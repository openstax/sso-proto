require "aws-sdk-s3"
require 'aws-sdk-cloudformation'
require 'aws-sdk-ssm'
require "aws-sdk-ec2"
require "aws-sdk-autoscaling"

require "slop"
require "ox/aws/extensions"
require "ox/aws/version"
require "ox/aws/git_helper"
require "ox/aws/parameters_specification"
require "ox/aws/parameters"
require "ox/aws/deployment_base"
require "ox/aws/build_image_command"
require "ox/aws/search/deployment"

module Ox
  module Aws

    def self.verify_secrets_populated!
      if ENV['AWS_ACCESS_KEY_ID'].nil? || ENV['AWS_SECRET_ACCESS_KEY'].nil?
        raise "AWS key and secret are not both set!"
      end
    end

  end
end
