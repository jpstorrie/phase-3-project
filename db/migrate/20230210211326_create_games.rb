class CreateGames < ActiveRecord::Migration[7.0]
  def change
    create_table :games do |t|
      t.string :name
      t.string :story
      t.string :image
      t.string :bio
      t.integer :release_date

      t.timestamps
    end
  end
end
