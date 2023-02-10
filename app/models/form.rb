class Form < ApplicationRecord
  belongs_to :game
  has_many :comments
end
