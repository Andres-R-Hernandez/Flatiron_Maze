Rails.application.routes.draw do
  resources :timescores
  resources :comments
  get "/mazes", to: "mazes#index"
  get "/mazes/:difficulty", to: "mazes#maze_difficulty"
  resources :player_sprites
  resources :sprites
  resources :players
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
