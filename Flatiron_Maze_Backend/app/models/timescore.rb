class Timescore < ApplicationRecord
  belongs_to :player
  belongs_to :maze
  belongs_to :leaderboard
end
