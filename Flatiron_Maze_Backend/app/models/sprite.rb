class Sprite < ApplicationRecord
    has_many :player_sprites
    has_many :players, through: :player_sprites
end
