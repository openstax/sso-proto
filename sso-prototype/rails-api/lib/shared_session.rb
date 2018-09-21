require 'cgi'
require 'json'
require 'active_support'

module SharedSession
  extend self

  def user_uuid(request)
    decrypt(request)['user_uuid']
  end

  # https://github.com/rails/rails/blob/4-2-stable/activesupport/lib/active_support/message_encryptor.rb#L90
  def decrypt(request)
    config = Rails.application.secrets.sso
    secret = config['shared_secret'][0, 32]
    cookie = request.cookies[config['cookie']['name']]

    encrypted_message = Base64.decode64(cookie)
    cipher = OpenSSL::Cipher.new('aes-256-gcm')

    encrypted_data, iv = encrypted_message.split("--").map {|v| ::Base64.decode64(v)}

    cipher.decrypt
    cipher.key = secret
    cipher.iv  = iv

    decrypted_data = cipher.update(encrypted_data)
    decrypted_data << cipher.final
    JSON.parse decrypted_data
  end
end
