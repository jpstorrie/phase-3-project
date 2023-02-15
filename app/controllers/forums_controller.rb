class ForumsController < ApplicationController
    wrap_parameters format: []

    def index
        forums = Forum.all
        render json: forums, status: :ok
    end

    def get_forum_by_id
        forum = Forum.find(params[:id])
        render json: [forum, forum.comments], status: :ok
    end

    def post_forum
        new_forum = Forum.create(post_params)
        render json: new_forum, status: :ok
    end

    def destroy_forum
        forum_found = Forum.where(id: params[:id])
        forum_found.destroy_all
    end

    private

    def post_params
        params.permit(:username, :question, :date, :game_id)
    end
end