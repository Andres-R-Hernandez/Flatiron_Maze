class SpritesController < ApplicationController
    def index
        sprites = Sprite.all
        render json: sprites
    end
end
