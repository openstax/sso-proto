require 'shared_session'

class ApplicationController < ActionController::Base

  before_action :decrypt_session

  protected

  def decrypt_session
    begin
      @shared_session = SharedSession.decrypt(request)
    rescue => e
      Rails.logger.warn e
    end
  end

end
