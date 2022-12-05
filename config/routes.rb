Rails.application.routes.draw do
  resources :responses, only: [:index, :create, :update, :destroy]
  resources :surveys, only: [:show]
  resources :user_locations, only: [:index, :create, :update]
  resources :places, only: [:index, :create, :destroy]
  resources :users, only: [:show, :create]

  post "/signup/", to: "users#create"

  delete "/logout", to: "sessions#destroy"

  post "/login", to: "sessions#create"

  get "/auth", to: "users#show"

end
