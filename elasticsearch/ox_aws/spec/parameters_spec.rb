RSpec.describe Ox::Aws::Parameters do

  let(:instance) {
    described_class.new(region: 'region',
                        env_name: 'env_name',
                        parameter_namespace: 'namespace')
  }

  context "#build_parameters" do
    let(:specification) {
      Ox::Aws::ParametersSpecification.from_content(
        format: :yml,
        top_key: :production,
        content: <<~CONTENT
          production:
            site_info:
              flag1: "{{ flag1 }}"
              flag2: "{{ flag2 }}"
        CONTENT
      )
    }

    it 'can handle a boolean false value' do
      built_parameters = nil

      expect{
        built_parameters = instance.build_parameters(
          specification: specification,
          substitutions: {
            flag1: "false",
            flag2: false,
          }
        )
      }.not_to raise_error
    end

  end

end
