Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # use a regex for book_uid so it can contain .
  get '/book/:book_uid(/:page_uid)', to: 'book#show', as: :book,
      book_uid: /[^\/]*/,
      page_uid: /[^\/]*/

  get '/profile', to: 'user#profile'
  root to: 'home#index'
end
