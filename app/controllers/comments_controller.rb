class CommentsController < ApplicationController

    def patch_like
        #get the comment
        comment = Comment.find(params[:id])
        #set a variable to update the like count
        updated_like = comment.likes += 1
        #update using the variable
        comment.update(likes: updated_like)
        render json: [comment.likes]
    end
end