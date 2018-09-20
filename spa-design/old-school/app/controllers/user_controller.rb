class UserController < ApplicationController

  before_action :require_user

  def profile
    @user = current_user
  end

end
