class ForumsController < ApplicationController

    def index
        forums = Forum.all
        render json: forums, status: :ok
    end
end