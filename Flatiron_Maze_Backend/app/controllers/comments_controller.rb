class CommentsController < ApplicationController
    def index
        comments = Comment.all
        render json: comments, except: [:player_id, :id, :updated_at], include: [:player => {only: [:name]}]
    end

    def create
        newComment = Comment.new(comment_params)

        if newComment.save
            render json: newComment
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:player_id, :maze_id, :description)
    end
end
