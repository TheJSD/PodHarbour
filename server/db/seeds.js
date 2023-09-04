use podharbour;

db.dropDatabase()

db.podcasts.insertMany([
    {
        name: "podcast1",
        author: "author1",
        description: "some podcast",
        genre: "a genre",
        episodes: [{
            title:"episode 1",
            description: "the first of many",
            audio: "podcast.mp3"
        },
        {
            title:"episode 1",
            description: "the first of many",
            audio: "podcast.mp3"
        }],
    },
    {
        name: "podcast2",
        author: "author2",
        description: "some podcast",
        genre: "a genre",
        episodes: [{
            title:"episode 4",
            description: "the first of many",
            audio: "podcast.mp3"
        },
        {
            title:"episode 9",
            description: "the first of many",
            audio: "podcast.mp3"
        }],
    }
])

db.users.insertOne({
    name:"user",
    subscriptions: []
})

