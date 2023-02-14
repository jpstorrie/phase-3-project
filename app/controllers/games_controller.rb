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
        render json: [character, game], status: :ok
    end
end