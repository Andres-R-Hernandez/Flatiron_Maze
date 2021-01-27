class CommentsController < ApplicationController
    def index
        comments = Comment.all
        render json: comments, except: [:player_id, :id, :updated_at], include: [:player => {only: [:name]}]
    end
end
