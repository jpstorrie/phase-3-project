# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_02_10_213422) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.string "bio"
    t.string "image"
    t.bigint "game_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_id"], name: "index_characters_on_game_id"
  end

  create_table "comments", force: :cascade do |t|
    t.bigint "form_id", null: false
    t.string "username"
    t.string "comment"
    t.integer "likes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["form_id"], name: "index_comments_on_form_id"
  end

  create_table "forms", force: :cascade do |t|
    t.bigint "game_id", null: false
    t.string "username"
    t.string "question"
    t.datetime "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_id"], name: "index_forms_on_game_id"
  end

  create_table "games", force: :cascade do |t|
    t.string "name"
    t.string "story"
    t.string "image"
    t.string "bio"
    t.integer "release_date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "genres", force: :cascade do |t|
    t.bigint "game_id", null: false
    t.boolean "rts"
    t.boolean "fps"
    t.boolean "rpg"
    t.boolean "action"
    t.boolean "multiplayer"
    t.boolean "open_world"
    t.boolean "sports"
    t.boolean "turn_based"
    t.boolean "adventure"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_id"], name: "index_genres_on_game_id"
  end

  create_table "lores", force: :cascade do |t|
    t.string "content"
    t.string "link"
    t.bigint "game_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_id"], name: "index_lores_on_game_id"
  end

  create_table "platforms", force: :cascade do |t|
    t.bigint "game_id", null: false
    t.boolean "xbox"
    t.boolean "pc"
    t.boolean "playstation"
    t.boolean "switch"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_id"], name: "index_platforms_on_game_id"
  end

  create_table "tips", force: :cascade do |t|
    t.string "content"
    t.string "link"
    t.bigint "game_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_id"], name: "index_tips_on_game_id"
  end

  create_table "walkthroughs", force: :cascade do |t|
    t.string "content"
    t.string "link"
    t.bigint "game_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_id"], name: "index_walkthroughs_on_game_id"
  end

  add_foreign_key "characters", "games"
  add_foreign_key "comments", "forms"
  add_foreign_key "forms", "games"
  add_foreign_key "genres", "games"
  add_foreign_key "lores", "games"
  add_foreign_key "platforms", "games"
  add_foreign_key "tips", "games"
  add_foreign_key "walkthroughs", "games"
end
