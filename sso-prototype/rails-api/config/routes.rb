Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'api/status', to: 'api#status'

  root to: 'home#index'
end
