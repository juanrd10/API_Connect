Rails.application.routes.draw do
  get 'private/index'
  get "/private", to: "private#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
