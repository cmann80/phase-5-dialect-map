Rails.application.routes.draw do
  resources :responses, only: [:create, :update, :destroy]
  resources :surveys, only: [:show]
  resources :user_locations, only: [:create, :update]
  resources :places, only: [:index, :create, :destroy]
  resources :users, only: [:show, :create]

  post "/signup/", to: "users#create"

  delete "/logout", to: "sessions#destroy"

  post "/login", to: "sessions#create"

  get "/auth", to: "users#show"

end
