class Maze < ApplicationRecord
  has_many :comments
  has_many :timescores
end
