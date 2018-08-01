require 'shared_session'

module ApplicationHelper

  def current_user_uuid
    @shared_session ? @shared_session['user_uuid'] : nil
  end

  def logged_in?
    current_user_uuid.present?
  end
end
