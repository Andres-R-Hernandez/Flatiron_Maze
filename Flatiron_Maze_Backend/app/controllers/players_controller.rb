class PlayersController < ApplicationController

    def index
        players = Player.all
        render json: players, only: [:name]
    end

    def player_verify
        player = Player.find_by(name: params[:name])
        render json: player
    end

end
