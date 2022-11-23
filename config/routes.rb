Rails.application.routes.draw do
  resources :responses
  resources :surveys
  resources :user_locations
  resources :places
  resources :users, only: [:show, :create]

  post "/signup/", to: "users#create"

  delete "/logout", to: "sessions#destroy"

  post "/login", to: "sessions#create"

end
