class PlayersController < ApplicationController

    def index
        players = Player.all
        render json: players
    end

    def player_verify
        player = Player.find_by(name: params[:name])

        if !!player
            render json: player, except: [:updated_at, :created_at], include: [:sprites => {:only => [:image_url]}]
        end
    end

    def create
        player = Player.new(player_params)

        if player.save
            render json: player
        end
    end

    private

    def player_params
        params.require(:player).permit(:name)
    end

end
