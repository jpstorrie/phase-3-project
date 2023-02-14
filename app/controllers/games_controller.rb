class GamesController < ApplicationController
    wrap_parameters format: []

    def index
        # render json: {}, status: :ok
        games = Game.all_games
        # games = Game.all
        # games.to_json
        render json: games, status: :ok
    end

    def show
        game = Game.all.find(params[:id])
        character = game.characters
        tips = game.tips
        lore = game.lores

        render json: [game, character, tips, lore], status: :ok
    end

    def add_new
        add_game = Game.create(post_params)
        render json: add_game, status: :ok
    end

    private

    def post_params
        params.permit(:name, :story, :image, :bio, :release_date, :platform, :genre)
    end

end