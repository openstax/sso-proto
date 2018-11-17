module Ox::Aws
  class Parameters

    attr_reader :region, :env_name, :parameter_namespace

    def initialize(region:, env_name:, parameter_namespace:)
      @region = region
      @env_name = env_name
      @parameter_namespace = parameter_namespace
      @client = Aws::SSM::Client.new(region: region)
    end

    def create(specification:, substitutions: {})
      raise "Cannot create parameters already in existence!" if !data.empty?

      # Build all parameters first so we hit any errors before we send any to AWS
      built_parameters = build_parameters(specification: specification, substitutions: substitutions)

      # Ship 'em

      built_parameters.each do |built_parameter|
        client.put_parameter(built_parameter)
      end
    end

    def build_parameters(specification:, substitutions:)
      built_parameters = specification.expanded_data.map do |parameter_name, spec_value|
        value = case spec_value.strip
        when /^random\(hex,(\d+)\)$/
          SecureRandom.hex($1.to_i)
        when "uuid"
          SecureRandom.uuid
        when /{([^{}]+)}/
          spec_value.gsub(/({{\W*(\w+)\W*}})/) do |match|
            if (!substitutions.has_key?($2) && !substitutions.has_key?($2.to_sym))
              raise "no substitution provided for #{$2}"
            end

            substitutions[$2] || substitutions[$2.to_sym]
          end
        when /^ssm\((.*)\)$/
          begin
            client.get_parameter({
              name: substitutions[$1] || substitutions[$1.to_sym],
              with_decryption: true
            }).parameter.value
          rescue Aws::SSM::Errors::ParameterNotFound => ee
            raise "Could not get parameter '#{$1}'"
          end
        else # use literal value
          spec_value
        end

        {
          name: "/#{env_name}/#{parameter_namespace}/#{parameter_name}",
          type: "String",
          value: value
        }
      end
    end

    def data
      @data ||= data!
    end

    def data!
      {}.tap do |hash|
        client.get_parameters_by_path({
          path: "/#{env_name}/#{parameter_namespace}",
          recursive: true,
          with_decryption: true
        }).each do |response|
          response.parameters.each do |parameter|
            hash[parameter.name] = {
              type: parameter.type,
              value: parameter.value
            }
          end
        end
      end
    end

    def delete
      parameter_names = data!.keys
      return if parameter_names.empty?

      # Can send max 10 parameter names at a time
      parameter_names.each_slice(10) do |some_parameter_names|
        response = client.delete_parameters({names: some_parameter_names})

        if response.invalid_parameters.any?
          raise "Some parameters were not deleted: #{response.invalid_parameters}"
        end
      end
    end

    protected

    attr_reader :client

  end
end
