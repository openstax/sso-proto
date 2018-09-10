VALID_IFRAME_ORIGINS = Rails.application.secrets[:valid_iframe_origins].map do |origin|
  Regexp.new("\\A#{origin}")
end
require 'doorkeeper/orm/active_record/application'

OpenStax::Api.configure do |config|

  config.user_class_name = 'User'
  config.current_user_method = 'current_user'

  config.validate_cors_origin = lambda do |request|
    VALID_IFRAME_ORIGINS.any? do | origin |
      origin.match(request.headers["HTTP_ORIGIN"])
    end
  end

end
