Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
resources :games
  # Defines the root path route ("/")
  # root "articles#index"

  get "/games", to: "games#index"

  get "/forums", to: "forums#index"

  get "/forums/:id", to: "forums#get_forum_by_id"

  patch "/comments/like/:id", to: "comments#patch_like"
  get "/games/:id", to: "games#show"
end
