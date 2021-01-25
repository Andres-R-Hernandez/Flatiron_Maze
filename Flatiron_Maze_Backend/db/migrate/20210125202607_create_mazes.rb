class CreateMazes < ActiveRecord::Migration[6.0]
  def change
    create_table :mazes do |t|
      t.string :difficulty
      t.string :size
      t.string :layout

      t.timestamps
    end
  end
end
