class User < ApplicationRecord
  class Anonymous < User
    include Singleton
    before_save { false }
    def is_anonymous?
      true
    end
  end

  belongs_to :account,
             class_name: 'OpenStax::Accounts::Account',
             inverse_of: :profile

  def self.anonymous
    ::User::Anonymous.instance
  end

  def is_anonymous?
    false
  end

end
