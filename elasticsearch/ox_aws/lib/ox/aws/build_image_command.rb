module Ox::Aws
  class BuildImageCommand

    def initialize(ami_name_base:, region:, branch: nil, sha: nil, verbose: false, debug: false, repo:,
                   packer_file_from_root: "packer.json", playbook_file_from_root:)

      root_dir = File.expand_path("../../../..", File.dirname(File.expand_path(__FILE__)))

      packer_file = File.join(root_dir, packer_file_from_root)
      playbook_file = File.join(root_dir, playbook_file_from_root)

      if sha.nil?
        branch ||= 'master'

        sha = A15k::Aws::GitHelper.sha_for_branch_name(
                org_slash_repo: "openstax/#{repo}",
                branch: branch
              )
      end

      ami_name = "#{ami_name_base}@#{sha[0..6]} #{Time.now.utc.strftime("%y%m%d%H%MZ")}"

      @cmd = "packer build --only=amazon-ebs"

      @cmd = "#{@cmd} --var 'region=#{region}'"
      @cmd = "#{@cmd} --var 'ami_name=#{ami_name}'"
      @cmd = "#{@cmd} --var 'sha=#{sha}'"
      @cmd = "#{@cmd} --var 'playbook_file=#{playbook_file}'"

      @cmd = "PACKER_LOG=1 #{@cmd}" if verbose
      @cmd = "#{@cmd} --debug" if debug

      @cmd = "#{@cmd} #{packer_file}"
    end

    def run
      `#{@cmd}`
    end

    def to_s
      @cmd
    end

  end
end
