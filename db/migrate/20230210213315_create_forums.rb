class CreateForms < ActiveRecord::Migration[7.0]
  def change
    create_table :forums do |t|
      t.belongs_to :game, null: false, foreign_key: true
      t.string :username
      t.string :question
      t.datetime :date

      t.timestamps
    end
  end
end
