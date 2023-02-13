class Game < ApplicationRecord
    has_many :characters
    has_many :lores
    has_many :tips
    has_many :forums
    has_many :comments, through: :forum

    def self.all_games
        self.all
    end
end
