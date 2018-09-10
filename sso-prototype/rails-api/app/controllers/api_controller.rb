class ApiController < ApplicationController

  def status
    render json: { user_uuid: helpers.current_user_uuid, logged_in: helpers.logged_in? }
  end

end
