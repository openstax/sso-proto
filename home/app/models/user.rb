class User < ApplicationRecord
  belongs_to :account,
             class_name: 'OpenStax::Accounts::Account',
             inverse_of: :profile
end
