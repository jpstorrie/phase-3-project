class CommentsController < ApplicationController

    def patch_like
        comment = Comment.find(params[:id])
        comment.likes += 1
        render json: [comment.likes]
    end
end