class Forum < ApplicationRecord
  belongs_to :game
  has_many :comments
end
