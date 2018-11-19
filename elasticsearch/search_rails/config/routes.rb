Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get :search, to: 'application#search'
  get :build_index, to: 'application#build_index'

end
