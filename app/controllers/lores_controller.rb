class LoresController < ApplicationController
    wrap_parameters format: []

    def add_new
        add_lore = Lore.create(post_params)
        render json: add_lore, status: :ok
    end

    private

    def post_params
        params.permit(:content, :link, :game_id)
    end


end