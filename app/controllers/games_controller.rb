class GamesController < ApplicationController

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
end