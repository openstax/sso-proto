require 'net/http'
require 'nokogiri'

class HomeController < ApplicationController

  caches_page :index

end
