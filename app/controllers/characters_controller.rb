class CharactersController < ApplicationController
    wrap_parameters format: []

    def add_new
        add_character = Character.create(post_params)
        render json: add_character, status: :ok
    end

    def destroy_character
        character_destroy = Character.find(params[:id])
        character_destroy.destroy
    end

    private

    def post_params
        params.permit(:name, :image, :bio, :game_id)
    end


end