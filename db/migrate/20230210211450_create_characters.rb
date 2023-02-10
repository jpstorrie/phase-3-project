class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :bio
      t.string :image
      t.belongs_to :game, null: false, foreign_key: true

      t.timestamps
    end
  end
end
