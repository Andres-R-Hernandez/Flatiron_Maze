class MazesController < ApplicationController

    def index
        mazes = Maze.all
        render json: mazes, only: [:id, :difficulty]
    end

    def show
        mazes = Maze.find(params[:id])
        render json: mazes, only: [:layout]
    end

end
