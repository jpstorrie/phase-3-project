class ForumsController < ApplicationController

    def index
        forums = Forum.all
        render json: forums, status: :ok
    end

    def get_forum_by_id
        forum = Forum.find(params[:id])
        render json: [forum, forum.comments], status: :ok
    end
end