Rails.application.routes.draw do
  resources :responses, only: [:create, :update]
  resources :surveys, only: [:show]
  resources :user_locations, only: []
  resources :places, only: []
  resources :users, only: [:show, :create]

  post "/signup/", to: "users#create"

  delete "/logout", to: "sessions#destroy"

  post "/login", to: "sessions#create"

end
