class Player < ApplicationRecord
    has_many :timescores
    has_many :comments
    has_many :player_sprites
    has_many :sprites, through: :player_sprites

    validates :name, presence: true
    validates :name, uniqueness: true
end