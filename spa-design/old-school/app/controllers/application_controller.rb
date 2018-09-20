require 'sso_session'

class ApplicationController < ActionController::Base

  before_action :decrypt_session

  protected

  def require_user
    unless signed_in?
      render file: 'public/403.html', status: :forbidden, layout: false
    end
  end

  def signed_in?
    current_user.present?
  end

  def current_user
    if @sso_session
      @current_user ||= OpenStruct.new(uuid: @sso_session['user_uuid'],
                                       name: @sso_session['user_name'])
    else
      nil
    end
  end

  def decrypt_session
    begin
      @sso_session = SsoSession.decrypt(request)
    rescue
      @sso_session = false
    end
  end

end
