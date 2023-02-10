class CreateGenres < ActiveRecord::Migration[7.0]
  def change
    create_table :genres do |t|
      t.belongs_to :game, null: false, foreign_key: true
      t.boolean :rts
      t.boolean :fps
      t.boolean :rpg
      t.boolean :action
      t.boolean :multiplayer
      t.boolean :open_world
      t.boolean :sports
      t.boolean :turn_based
      t.boolean :adventure

      t.timestamps
    end
  end
end
