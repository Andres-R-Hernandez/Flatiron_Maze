Rails.application.routes.draw do
  get "/timescores", to: "timescores#index"
  get "/timescores/:mazeID", to:"timescores#maze_ID"
  # resources :comments
  get "/comments", to: "comments#index"
  get "/mazes", to: "mazes#index"
  get "/mazes/:difficulty", to: "mazes#maze_difficulty"
  resources :player_sprites
  resources :sprites
  get "/players", to: "players#index"
  get "/players/:name", to: "players#player_verify"
  post "/players/new", to: "players#create"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
