class PlayerSpritesController < ApplicationController
    def index
        player_sprites = PlayerSprite.all
        render json: player_sprites
    end
end
