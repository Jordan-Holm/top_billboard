Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api do

    resources :billboards do
      resources :artists
    end
    resources :artists do
      resources :songs
    end 

  end
  # Defines the root path route ("/")
  # root "articles#index"
end
