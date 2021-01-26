class TimescoresController < ApplicationController

    def index
        scores = Timescore.all
        render json: scores
    end

end
