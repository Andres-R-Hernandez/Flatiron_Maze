# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Player.destroy_all()
# Maze.destroy_all()
# Timescore.destroy_all()
# Comment.destroy_all()
# Sprite.destroy_all()
# PlayerSprite.destroy_all()

#destroy all functions are giving an error: FOREIGN KEY constraint failed
#figure out why, and fast!

player1 = Player.create(name: "Player1")
player2 = Player.create(name: "Player2")
player3 = Player.create(name: "Player3")

maze1 = Maze.create(difficulty: "easy", size: "5x5", layout: [])
maze2 = Maze.create(difficulty: "medium", size: "10x10", layout: [])
maze3 = Maze.create(difficulty: "hard", size: "20x20", layout: [])

Timescore.create(timescore: 15, player: player1, maze: maze1)
Timescore.create(timescore: 30, player: player1, maze: maze1)
Timescore.create(timescore: 10, player: player1, maze: maze2)
Timescore.create(timescore: 20, player: player1, maze: maze3)
Timescore.create(timescore: 23, player: player2, maze: maze1)
Timescore.create(timescore: 24, player: player2, maze: maze2)
Timescore.create(timescore: 28, player: player2, maze: maze3)
Timescore.create(timescore: 10, player: player3, maze: maze2)
Timescore.create(timescore: 17, player: player3, maze: maze2)
Timescore.create(timescore: 13, player: player3, maze: maze1)
Timescore.create(timescore: 11, player: player3, maze: maze2)
Timescore.create(timescore: 29, player: player3, maze: maze3)
Timescore.create(timescore: 14, player: player3, maze: maze3)

Comment.create(player: player1, maze: maze1, description: "This maze was soooo easy!")
Comment.create(player: player1, maze: maze2, description: "I like turtles.")
Comment.create(player: player2, maze: maze3, description: "This maze is impossible!")
Comment.create(player: player2, maze: maze2, description: "Buy grandson shoes.")
Comment.create(player: player3, maze: maze1, description: "I took way to long on this maze.")
Comment.create(player: player3, maze: maze3, description: "Awesome, can't wait for the fourth.")

sprite1 = Sprite.create(image_url: "https://e7.pngegg.com/pngimages/688/123/png-clipart-pokemon-red-and-blue-pokemon-firered-and-leafgreen-pokemon-heartgold-and-soulsilver-sprite-sprite-text-rectangle.png")
sprite2 = Sprite.create(image_url: "https://www.codeandweb.com/img/texturepacker/twitter-photonstorm.png")
sprite3 = Sprite.create(image_url: "https://pngimage.net/wp-content/uploads/2018/06/sonic-sprite-png-5.png")

PlayerSprite.create(player: player1, sprite: sprite1)
PlayerSprite.create(player: player2, sprite: sprite2)
PlayerSprite.create(player: player3, sprite: sprite3)


#gif image_url: "https://cdn.lowgif.com/full/6804b8940e8b8cff-.gif"