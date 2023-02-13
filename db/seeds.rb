# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


Game.create(name: "Apex Legends", story: "Apex Legends is a game where you lose over and over", image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/91X744yj1xL.jpg", bio: "is a game", release_date: 2019, genre: "Fps, Battle Royale", platform: "All")
Game.create(name: "Super Mario Odyssey", story: "Save Peach again", image: "https://upload.wikimedia.org/wikipedia/en/8/8d/Super_Mario_Odyssey.jpg", bio: "capture moons", release_date: 2016, genre: "platformer", platform: "switch")
Game.create(name: "God of War Ragnorak", story: "Protect Boy", image: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png", bio: "Travel the relms", release_date: 2022 , genre: "action, adventure", platform: "Playstation")
Game.create(name: "Halo Infinite", story: "wort wort", image: "https://store-images.s-microsoft.com/image/apps.21536.13727851868390641.c9cc5f66-aff8-406c-af6b-440838730be0.68796bde-cbf5-4eaa-a299-011417041da6", bio: "Protect blue lady", release_date: 2021 , genre: "FPS, multiplayer", platform: "Xbox, PC")
Game.create(name: "Elden Ring", story: "trying to figure that out", image: "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/phvVT0qZfcRms5qDAk0SI3CM.png", bio: "Fight hard bosses", release_date: 2022 , genre: "openworld, action", platform: "Xbox, PC, Playstion")

Character.create(name: "Wattson", bio: "Electric type", image: "https://www.gamespot.com/a/uploads/original/1599/15997278/3915179-wattsonthumb.jpeg", game: Game.first)
Character.create(name: "Mario", bio: "Plumber with sweet mustache", image: "https://i.guim.co.uk/img/media/0a469e561da36ea82171580141dd5ca4d4fd2cac/40_0_1200_720/master/1200.jpg?width=1200&quality=85&auto=format&fit=max&s=85d671e8d3927101e98fdf40652be745", game: Game.second)
Character.create(name: "Kratos", bio: "angry man", image: "https://images.indianexpress.com/2021/12/Kratos-facts-featured.jpg", game: Game.third)
Character.create(name: "Master Chief", bio: "Real name John 117", image: "https://assets.reedpopcdn.com/-1648219953912.jpg/BROK/thumbnail/1200x1200/quality/100/-1648219953912.jpg", game: Game.fourth)
Character.create(name: "MALENIA", bio: "BLADE OF MIQUELLA", image: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/malenia,-blade-of-miquella.jpg", game: Game.last)

10.times do
Lore.create(content: "TEST TEST TEST TEST", link: "not a real link . com", game: Game.all.sample)
end

20.times do
    Tip.create(content: "TEST TEST TEST TEST", link: "not a real link . com", game: Game.all.sample)
end

Forum.create(game: Game.all.sample, username: "JANE DOE", question: "Question 2", date: DateTime.now)
Forum.create(game: Game.all.sample, username: "JOHN DOE", question: "Question 1", date: DateTime.now)
Forum.create(game: Game.all.sample, username: "TOM DOE", question: "Question 3", date: DateTime.now)
Forum.create(game: Game.all.sample, username: "JOSIAH DOE", question: "Question 4", date: DateTime.now)
Forum.create(game: Game.all.sample, username: "STEVE DOE", question: "Question 5", date: DateTime.now)
Forum.create(game: Game.all.sample, username: "GALEN DOE", question: "Question 6", date: DateTime.now)
Forum.create(game: Game.all.sample, username: "OWEN DOE", question: "Question 7", date: DateTime.now)
Forum.create(game: Game.all.sample, username: "THOMAS DOE", question: "Question 8", date: DateTime.now)
Forum.create(game: Game.all.sample, username: "RYAN DOE", question: "Question 9", date: DateTime.now)
Forum.create(game: Game.all.sample, username: "BOB DOE", question: "Question 10", date: DateTime.now)

20.times do
    Comment.create(forum: Forum.all.sample, username: "sample name #{rand(10)}", comment: "random comment troll", likes: rand(35))
end

puts "done seeding"