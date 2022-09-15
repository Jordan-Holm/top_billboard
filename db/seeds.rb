Artist.delete_all
Billboard.delete_all

3.times do
    genre = Faker::Music.genre
    @billboard = Billboard.create(
        name: "Top 5 #{genre} Artists",
        genre: genre,
        description: "Filler content"
    )

    5.times do
        Artist.create(
            name: Faker::Music.band,
            listeners: rand(500),
            description: "filler content",
            billboard_id: @billboard.id
        )
    end
end 