class Game < ApplicationRecord
    has_many :characters
    has_many :lores
    has_many :platforms
    has_many :tips
    has_many :walkthroughs
    has_many :genres
    has_many :forms
    has_many :comments, through: :form
end
