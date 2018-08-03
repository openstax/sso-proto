module HomeHelper

  def bootstrap_data
    {
      user_uuid: @shared_session ? @shared_session['user_uuid'] : nil,
      login_path: openstax_accounts.login_path,
      logout_path: openstax_accounts.logout_path,
    }.to_json
  end
end
