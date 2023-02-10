class CreatePlatforms < ActiveRecord::Migration[7.0]
  def change
    create_table :platforms do |t|
      t.belongs_to :game, null: false, foreign_key: true
      t.boolean :xbox
      t.boolean :pc
      t.boolean :playstation
      t.boolean :switch

      t.timestamps
    end
  end
end
