class CommentsController < ApplicationController
    wrap_parameters format:[]
    def patch_like
        #get the comment
        comment = Comment.find(params[:id])
        #set a variable to update the like count
        updated_like = comment.likes += 1
        #update using the variable
        comment.update(likes: updated_like)
        render json: [comment.likes]
    end

    def post_comment
        new_comment = Comment.create(post_params)
        render json: new_comment
    end

    def delete_comment
        comment = Comment.where(id: params[:id])
        comment.destroy_all
        render json: comment
    end

    private

    def post_params
        params.permit(:username, :likes, :forum_id, :comment)
    end
end