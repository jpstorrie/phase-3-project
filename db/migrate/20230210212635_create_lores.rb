class CreateLores < ActiveRecord::Migration[7.0]
  def change
    create_table :lores do |t|
      t.string :content
      t.string :link
      t.belongs_to :game, null: false, foreign_key: true

      t.timestamps
    end
  end
end
