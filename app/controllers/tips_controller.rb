class TipsController < ApplicationController
    wrap_parameters format: []

    def add_new
        add_character = Tip.create(post_params)
        render json: add_character, status: :ok
    end

    def destroy_tip
        tip_destroy = Tip.find(params[:id])
        tip_destroy.destroy
    end

    private

    def post_params
        params.permit(:content, :link, :game_id)
    end


end