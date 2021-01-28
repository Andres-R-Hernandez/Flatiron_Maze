class TimescoresController < ApplicationController

    def index
        scores = Timescore.all
        render json: scores, except: [:updated_at, :id]
    end

    def maze_ID
        scores = Timescore.where(maze_id: params[:mazeID])
        render json: scores, except: [:updated_at, :id], include: [:player => {only: [:name]}]
    end

    def create
        newScore = Timescore.new(score_params)

        if newScore.save
            render json: newScore
        end
    end

    private

    def score_params
        params.require(:timescore).permit(:score, :player_id, :maze_id)
    end

end
