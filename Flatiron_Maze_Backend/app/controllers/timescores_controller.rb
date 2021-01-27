class TimescoresController < ApplicationController

    def index
        scores = Timescore.all
        render json: scores, except: [:updated_at, :id]
    end

    def maze_ID
        scores = Timescore.where(maze_id: params[:mazeID])
        render json: scores, except: [:updated_at, :id], include: [:player => {only: [:name]}]
    end

end
