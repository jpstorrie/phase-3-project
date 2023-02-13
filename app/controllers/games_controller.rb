class GamesController < ApplicationController

    def index
        # render json: {}, status: :ok
        games = Game.all_games
        # games = Game.all
        # games.to_json
        render json: games, status: :ok
    end
end