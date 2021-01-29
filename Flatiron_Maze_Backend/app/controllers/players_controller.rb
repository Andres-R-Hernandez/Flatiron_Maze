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
        
        if Player.exists?(name: params[:name])
        else
            sprite = Sprite.find_by(id: params[:spriteId])
            player = Player.new(name: params[:name])
            PlayerSprite.create(player: player, sprite: sprite)
            if player.save
                render json: player, except: [:updated_at, :created_at], include: [:sprites => {:only => [:image_url]}]
            end
        end
    end

    private

    def player_params
        params.require(:player).permit(:name, :spriteId)
    end

end
