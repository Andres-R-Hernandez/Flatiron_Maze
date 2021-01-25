class CreatePlayerSprites < ActiveRecord::Migration[6.0]
  def change
    create_table :player_sprites do |t|
      t.references :player, null: false, foreign_key: true
      t.references :sprite, null: false, foreign_key: true

      t.timestamps
    end
  end
end
