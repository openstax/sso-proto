class BookController < ApplicationController

  caches_page :show

  ARCHIVE_URL = "https://archive.cnx.org/contents"

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
      redirect_to book_path(book_uid: @toc[:uid], page_uid: @toc[:content].first['id'])
      return
    end
    # get_page isn't cached since the entire html will be cached using page cache
    @page = get_page
    unless @page.present?
      render file: 'public/404.html', status: :not_found, layout: false
    end
  end

  protected

  def get_toc(book_uid)
    url = "#{ARCHIVE_URL}/#{book_uid}.json"
    response = Faraday.get url
    if response.success?
      content = JSON.parse(response.body)
      return {
        content: content['tree']['contents'],
        title: content['title'],
        uid: params[:book_uid],
      }
    else
      Rails.logger.warn "Failed to fetch #{url}"
      return nil
    end

  end

  def get_page
    response = Faraday.get "#{ARCHIVE_URL}/#{params[:page_uid]}.json"
    if response.success?
      doc = Nokogiri::HTML(
        JSON.parse(response.body)['content']
      )
      doc.search('img[src]').each do |img|
        img['src'] = URI.join('https://archive.cnx.org/', URI.escape(img['src']))
      end
      doc.xpath('//body').inner_html
    end
  end

end
