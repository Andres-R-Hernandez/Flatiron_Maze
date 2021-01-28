class CreateTimescores < ActiveRecord::Migration[6.0]
  def change
    create_table :timescores do |t|
      t.integer :score
      t.references :player, null: false, foreign_key: true
      t.references :maze, null: false, foreign_key: true

      t.timestamps
    end
  end
end
