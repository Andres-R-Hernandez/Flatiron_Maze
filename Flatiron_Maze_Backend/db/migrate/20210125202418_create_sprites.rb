class CreateSprites < ActiveRecord::Migration[6.0]
  def change
    create_table :sprites do |t|
      t.string :image_url

      t.timestamps
    end
  end
end
