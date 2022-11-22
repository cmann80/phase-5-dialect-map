Rails.application.routes.draw do
  resources :responses
  resources :surveys
  resources :user_locations
  resources :places
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
