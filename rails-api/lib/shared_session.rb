require 'cgi'
require 'json'
require 'active_support'

module SharedSession
  extend self

  def user_uuid(request)
    decrypt(request.cookies)['user_uuid']
  end

  # https://github.com/rails/rails/blob/4-2-stable/activesupport/lib/active_support/message_encryptor.rb#L90
  def decrypt(cookies)
    config = Rails.application.secrets['rdls_sessions']
    cookie = cookies[config[:name]]

    key = config[:shared_secret]

    secret = OpenSSL::PKCS5.pbkdf2_hmac_sha1(key, 'encrypted cookie', 1000, 64)

    encrypted_message = Base64.decode64(cookie)
    cipher = OpenSSL::Cipher::Cipher.new('aes-256-cbc')

    encrypted_data, iv = encrypted_message.split("--").map {|v| ::Base64.decode64(v)}

    cipher.decrypt
    cipher.key = secret[0, 32]
    cipher.iv  = iv

    decrypted_data = cipher.update(encrypted_data)
    decrypted_data << cipher.final
    JSON.parse decrypted_data
  end
end
