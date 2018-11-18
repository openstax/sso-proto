require 'byebug'

module Ox::Aws::Interactions
  class Deployment < Ox::Aws::DeploymentBase

    def initialize(env_name:, region:, is_sandbox: true)
      super(is_sandbox: is_sandbox, env_name: env_name, region: region, name: "search")
    end

    def create
      #create_network_stack
      # create_elasticsearch_stack
      create_api_stack
      # create_parameters(deployed_app_sha: sha || image_sha(app_image_id))
      # create_app_stack(app_image_id: app_image_id)
    end

    def create_network_stack(wait: true)
      upload_template(absolute_file_path: File.join(File.dirname(__FILE__), "network.yml"))

      client.create_stack(
        stack_name: network_stack_name,
        template_url: template_url(file_name: "network.yml")
      )

      wait_for_stack_creation(stack_name: network_stack_name) if wait
    end

    def create_elasticsearch_stack(wait: true)
      upload_template(absolute_file_path: File.join(File.dirname(__FILE__), "elasticsearch.yml"))

      client.create_stack(
        stack_name: elasticsearch_stack_name,
        template_url: template_url(file_name: "elasticsearch.yml"),
        capabilities: ["CAPABILITY_IAM"],
        parameters: client_params(
          network_stack_name: network_stack_name
        )
      )

      wait_for_stack_creation(stack_name: elasticsearch_stack_name) if wait
    end

    def create_api_stack(wait: true)
      upload_template(absolute_file_path: File.join(File.dirname(__FILE__), "api.yml"))

      client.create_stack(
        stack_name: api_stack_name,
        template_url: template_url(file_name: "api.yml"),
        capabilities: ["CAPABILITY_IAM"],
        parameters: client_params(
          network_stack_name: network_stack_name,
          elasticsearch_stack_name: elasticsearch_stack_name
        )
      )

      wait_for_stack_creation(stack_name: api_stack_name) if wait
    end

    # def create_parameters(deployed_app_sha:)
    #   redis_host = stack_output_value(stack: redis_stack, key: "ElastiCacheAddress")

    #   parameters.create(
    #     specification: Ox::Aws::ParametersSpecification.from_git(
    #       org_slash_repo: "a15k/interactions-api",
    #       sha: deployed_app_sha,
    #       path: 'config/secrets.yml.example',
    #       format: :yml,
    #       top_key: :production
    #     ),
    #     substitutions: {
    #       domain: domain,
    #       env_name: env_name,
    #       redis_url: "redis://#{redis_host}:6379/0"
    #     }
    #   )
    # end

    # def create_app_stack(app_image_id:)
    #   upload_template(absolute_file_path: File.join(File.dirname(__FILE__), "app.yml"))

    #   client.create_stack(
    #     stack_name: app_stack_name,
    #     template_url: template_url(file_name: "app.yml"),
    #     capabilities: ["CAPABILITY_IAM"],
    #     parameters: client_params(
    #       network_stack_name: network_stack_name,
    #       env_name: env_name,
    #       branch_name_or_sha: "",
    #       hosted_zone_name: hosted_zone_name,
    #       domain: domain,
    #       web_server_image_id: app_image_id,
    #       web_server_desired_capacity: '1',
    #       parameter_namespace: parameter_namespace,
    #       key_name: default_key_name
    #     )
    #   )
    # end

    def delete
      # delete_stack(stack_name: app_stack_name)
      # delete_stack(stack_name: redis_stack_name)

      # wait_for_stack_deletion(stack_name: app_stack_name)
      # wait_for_stack_deletion(stack_name: redis_stack_name)

      # parameters.delete

      delete_stack(stack_name: network_stack_name)
    end

    # def update_app_image(new_app_image_id:, dry_run: true)
    #   apply_change_set(dry_run: dry_run, params: {
    #     stack_name: app_stack_name,
    #     template_url: template_url(file_name: "app.yml"),
    #     capabilities: ["CAPABILITY_IAM"],
    #     parameters: client_params(
    #       network_stack_name: network_stack_name,
    #       env_name: env_name,
    #       branch_name_or_sha: "",
    #       hosted_zone_name: hosted_zone_name,
    #       domain: domain,
    #       web_server_image_id: new_app_image_id,
    #       web_server_desired_capacity: asg.desired_capacity.to_s,
    #       parameter_namespace: parameter_namespace,
    #       key_name: default_key_name
    #     ),
    #     change_set_name: "update-app-image-#{Time.now.utc.strftime("%Y%m%d-%H%M%S")}-#{new_app_image_id}"
    #   })
    # end

    protected

    # def parameter_namespace
    #   'search'
    # end

    def domain
      build_domain(site_name: "search")
    end

    def network_stack_name
      "search-#{env_name}-network"
    end

    def elasticsearch_stack_name
      "search-#{env_name}-elasticsearch"
    end

    def api_stack_name
      "search-#{env_name}-api"
    end

    # def redis_stack
    #   @redis_stack ||= Aws::CloudFormation::Stack.new(redis_stack_name, client, region: region)
    # end

  end
end
