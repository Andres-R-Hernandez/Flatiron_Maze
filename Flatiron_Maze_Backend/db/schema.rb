# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_01_25_202955) do

  create_table "comments", force: :cascade do |t|
    t.integer "player_id", null: false
    t.integer "maze_id", null: false
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["maze_id"], name: "index_comments_on_maze_id"
    t.index ["player_id"], name: "index_comments_on_player_id"
  end

  create_table "mazes", force: :cascade do |t|
    t.string "difficulty"
    t.string "size"
    t.string "layout"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "player_sprites", force: :cascade do |t|
    t.integer "player_id", null: false
    t.integer "sprite_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["player_id"], name: "index_player_sprites_on_player_id"
    t.index ["sprite_id"], name: "index_player_sprites_on_sprite_id"
  end

  create_table "players", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "sprites", force: :cascade do |t|
    t.string "image_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "timescores", force: :cascade do |t|
    t.integer "timescore"
    t.integer "player_id", null: false
    t.integer "maze_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["maze_id"], name: "index_timescores_on_maze_id"
    t.index ["player_id"], name: "index_timescores_on_player_id"
  end

  add_foreign_key "comments", "mazes"
  add_foreign_key "comments", "players"
  add_foreign_key "player_sprites", "players"
  add_foreign_key "player_sprites", "sprites"
  add_foreign_key "timescores", "mazes"
  add_foreign_key "timescores", "players"
end
