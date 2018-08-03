module HomeHelper

  def bootstrap_data
    {
      user_uuid: current_user.is_anonymous? ? nil : current_user.account.uuid,
      login_path: openstax_accounts.login_path,
      logout_path: openstax_accounts.logout_path,
    }.to_json
  end
end
