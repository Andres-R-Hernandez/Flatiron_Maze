Rails.application.routes.draw do
  get "/timescores", to: "timescores#index"
  get "/timescores/:mazeID", to:"timescores#maze_ID"
  post "/timescores/new", to:"timescores#create"
  get "/comments", to: "comments#index"
  post "/comments/new", to: "comments#create"
  delete "/comments/:id", to: "comments#destroy"  
  patch "/comments/:id", to: "comments#update"
  get "/mazes", to: "mazes#index"
  get "/mazes/:id", to: "mazes#show"
  resources :player_sprites
  resources :sprites
  get "/players", to: "players#index"
  get "/players/:name", to: "players#player_verify"
  post "/players/new", to: "players#create"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
