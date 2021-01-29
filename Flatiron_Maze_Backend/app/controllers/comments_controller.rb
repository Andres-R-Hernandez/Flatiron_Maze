class CommentsController < ApplicationController
    def index
        comments = Comment.all
        render json: comments, except: [:player_id, :updated_at], include: [:player => {only: [:name]}]
    end

    def create
        newComment = Comment.new(comment_params)

        if newComment.save
            render json: newComment
        end
    end

    def destroy
        comment = Comment.find(params[:id])
        comment.delete
        comments = Comment.all
        render json: comments, except: [:player_id, :updated_at], include: [:player => {only: [:name]}]
    end

    def update
        comment = Comment.find(params[:id])
        comment.update(comment_params)
        comments = Comment.all
        render json: comments, except: [:player_id, :updated_at], include: [:player => {only: [:name]}]
    end

    private

    def comment_params
        params.require(:comment).permit(:player_id, :maze_id, :description)
    end
end
