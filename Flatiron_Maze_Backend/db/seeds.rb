# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

PlayerSprite.destroy_all()
Sprite.destroy_all()
Comment.destroy_all()
Timescore.destroy_all()
Maze.destroy_all()
Player.destroy_all()

#destroy all functions are giving an error (after db:seed initial run): FOREIGN KEY constraint failed
#figure out why, and fast!

player1 = Player.create(name: "Player1")
player2 = Player.create(name: "Player2")
player3 = Player.create(name: "Player3")

layout1 = [
     [0, 1, 0, 0, 0],
     [0, 1, 0, 1, 0],
     [0, 0, 0, 1, 0],
     [1, 1, 1, 1, 0],
     [0, 0, 1, 0, 0],
 ]

layout2 = [
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0]
]

layout3 = [
    [0, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 0],
    [0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [0, 0, 0, 0, 1, 1, 1, 1, 0, 0]
]

layout4 = [
    [0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0],
    [1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0],
    [1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0],
    [1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0],
    [0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0],
    [0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,1,0,0],
    [0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0],
    [0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0],
    [1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,1,0],
    [0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0],
    [0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0],
    [0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0],
    [0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0],
    [1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,0,1,0],
    [1,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0],
    [1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0],
]

layout5 = [
    [1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1]
    [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1]
    [1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,0,1]
    [1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1]
    [1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1]
    [1,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1]
    [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1]
    [0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0]
    [1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,1]
    [0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0]
    [0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0]
    [0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,0]
    [0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,1]
    [0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1]
    [0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0]
    [1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1]
    [0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1]
    [0,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,1]
    [1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1]
    [1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0]
    [1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1]
    [1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1]
    [1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0]
    [1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0]
    [1,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1]
]

maze1 = Maze.create(difficulty: "easy", size: "5x5", layout: layout1)
maze2 = Maze.create(difficulty: "medium", size: "10x10", layout: layout2)
maze3 = Maze.create(difficulty: "medium", size: "10x10", layout: layout3)
maze4 = Maze.create(difficulty: "hard", size: "20x20", layout: layout4)
maze5 = Maze.crate(difficulty: "hard", size: "25x25", layout: layout5)

Timescore.create(score: 15, player: player1, maze: maze1)
Timescore.create(score: 30, player: player1, maze: maze1)
Timescore.create(score: 10, player: player1, maze: maze2)
Timescore.create(score: 20, player: player1, maze: maze3)
Timescore.create(score: 23, player: player2, maze: maze1)
Timescore.create(score: 24, player: player2, maze: maze2)
Timescore.create(score: 28, player: player2, maze: maze3)
Timescore.create(score: 10, player: player3, maze: maze2)
Timescore.create(score: 17, player: player3, maze: maze2)
Timescore.create(score: 13, player: player3, maze: maze1)
Timescore.create(score: 11, player: player3, maze: maze2)
Timescore.create(score: 29, player: player3, maze: maze3)
Timescore.create(score: 14, player: player3, maze: maze3)

Comment.create(player: player1, maze: maze1, description: "This maze was soooo easy!")
Comment.create(player: player1, maze: maze2, description: "I like turtles.")
Comment.create(player: player2, maze: maze3, description: "This maze is impossible!")
Comment.create(player: player2, maze: maze2, description: "Buy grandson shoes.")
Comment.create(player: player3, maze: maze1, description: "I took way to long on this maze.")
Comment.create(player: player3, maze: maze3, description: "Awesome, can't wait for the fourth.")

sprite1 = Sprite.create(image_url: "https://e7.pngegg.com/pngimages/688/123/png-clipart-pokemon-red-and-blue-pokemon-firered-and-leafgreen-pokemon-heartgold-and-soulsilver-sprite-sprite-text-rectangle.png")
sprite2 = Sprite.create(image_url: "https://www.codeandweb.com/img/texturepacker/twitter-photonstorm.png")
sprite3 = Sprite.create(image_url: "https://pngimage.net/wp-content/uploads/2018/06/sonic-sprite-png-5.png")
sprite4 = Sprite.create(image_url: "https://koenig-media.raywenderlich.com/uploads/2012/06/PixelArtTutorial.png")
sprite5 = Sprite.create(image_url: "https://cpng.pikpng.com/pngl/s/342-3420930_lonk-pixel-characters-transparent-background-clipart.png")
sprite6 = Sprite.create(image_url: "https://cdn.imgbin.com/7/21/7/imgbin-video-game-sprite-pixel-art-3d-isometric-74sfyHP6uxLgFXCYmaakYAwZW.jpg")
sprite7 = Sprite.create(image_url: "https://cdn.lowgif.com/full/6804b8940e8b8cff-.gif")

PlayerSprite.create(player: player1, sprite: sprite1)
PlayerSprite.create(player: player2, sprite: sprite2)
PlayerSprite.create(player: player3, sprite: sprite3)