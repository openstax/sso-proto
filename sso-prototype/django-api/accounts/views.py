import urllib
import base64
import json
from Crypto.Cipher import AES
from Crypto.Protocol.KDF import PBKDF2

from django.conf import settings
from django.http import JsonResponse

unpad = lambda s: s[:-ord(s[len(s) - 1:])]


class OXSessionDecryptor(object):
    def __init__(self, shared_secret):
        self.secret = shared_secret[:32]

    def get_cookie_data(self, cookie):
        cookie = base64.b64decode(urllib.parse.unquote(cookie).split('--')[0])
        encrypted_data, iv = map(base64.b64decode, cookie.split('--'.encode()))
        cipher = AES.new(self.secret, AES.MODE_GCM, iv)
        return json.loads(unpad(cipher.decrypt(encrypted_data)))


def auth(request):
    cookie = request.COOKIES.get(settings.COOKIE_NAME, None)
    if not cookie:
        return JsonResponse({ 'logged_in': False })

    decrypt = OXSessionDecryptor(shared_secret=settings.SHARED_SECRET)
    decrypted_user = decrypt.get_cookie_data(cookie)
    return JsonResponse(decrypted_user)
