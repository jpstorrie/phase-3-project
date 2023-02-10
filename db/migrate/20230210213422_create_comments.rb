class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.belongs_to :form, null: false, foreign_key: true
      t.string :username
      t.string :comment
      t.integer :likes

      t.timestamps
    end
  end
end
