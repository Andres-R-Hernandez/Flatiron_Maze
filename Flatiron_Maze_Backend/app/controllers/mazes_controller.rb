class MazesController < ApplicationController

    def index
        mazes = Maze.all
        render json: mazes
    end

    def maze_difficulty
        mazes = Maze.where(difficulty: params[:difficulty])
        render json: mazes, only: [:id, :layout]
    end

end
