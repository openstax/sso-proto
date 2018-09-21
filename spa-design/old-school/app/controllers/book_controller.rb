require 'faraday_middleware'

class BookController < ApplicationController

  caches_page :show

  ARCHIVE = "https://archive.cnx.org"

  # this is extremely inefficient

  def show
    book_uid = params[:book_uid]
    @toc = Rails.cache.fetch("books/#{book_uid}", expires_in: 12.hours) do
      get_toc(book_uid)
    end
    unless @toc.present?
      render file: 'public/404.html', status: :not_found, layout: false
      return
    end
    unless params[:page_uid].present?
      redirect_to book_path(book_uid: @toc[:uid], page_uid: @toc[:content].first['shortId'])
      return
    end
    # get_page isn't cached since the entire html will be cached using page cache
    @page = get_page(book_uid, params[:page_uid])
    unless @page.present?
      render file: 'public/404.html', status: :not_found, layout: false
    end
  end

  protected

  def get_toc(book_uid)
    content = retrieve book_uid
    if content.present?
      return {
        content: content['tree']['contents'],
        title: content['title'],
        uid: book_uid,
      }
    else
      Rails.logger.warn "Failed to fetch #{url}"
      return nil
    end

  end

  def get_page(book_uid, page_uid)
    content = retrieve "#{book_uid}:#{page_uid}"
    if content.present?
      doc = Nokogiri::HTML(content['content'])
      doc.search('img[src]').each do |img|
        img['src'] = URI.join('https://archive.cnx.org/', URI.escape(img['src']))
      end
      doc.xpath('//body').inner_html
    end
  end

  def retrieve(path)
    conn = Faraday.new(:url => ARCHIVE) do |faraday|
      faraday.use FaradayMiddleware::FollowRedirects
      faraday.use FaradayMiddleware::Gzip
      faraday.adapter Faraday.default_adapter
    end
    response = conn.get "/contents/#{path}.json"
    response.success? ? Oj.load(response.body) : nil
  end

end
