Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
resources :games
  # Defines the root path route ("/")
  # root "articles#index"

  get "/games", to: "games#index"

  get "/games/:id", to: "games#show"

  get "/forums", to: "forums#index"

  get "/forums/:id", to: "forums#get_forum_by_id"

  post "/forums/new", to: "forums#post_forum"

  delete "/forums/delete/:id", to: "forums#destroy_forum"

  patch "/comments/like/:id", to: "comments#patch_like"
  
  post "/comments/new", to: "comments#post_comment"


  post "/game/new", to: "games#add_new"

  post "/game/character/new", to: "characters#add_new" 

  post "/game/tips/new", to: "tips#add_new"
  
  post "/game/lore/new", to: "lores#add_new"
end
