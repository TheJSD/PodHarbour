use podharbour;

db.dropDatabase()

db.podcasts.insertMany([
    {
        name: "Animal Sounds Podcast",
        author: "Arthur Buck",
        description: "The top podcast for all your favourite animal noises",
        genre: "Animals and Wildlife",
        image: '',
        episodes: [{
            title:"Episode 1: Cat Sounds",
            description: "In this episode we listen to sounds of Cats",
            audio: "cat.mp3"
        },
        {
            title:"Episode 2: Dog Sounds",
            description: "In this episode we listen to sounds of Dogs",
            audio: "dog.mp3"
        },
        {
            title:"Episode 3: Duck Sounds",
            description:"In this episode we listen to sounds of Ducks",
            audio: "quack.mp3"
        }],
    },
    {
        name: "We don't know how to Code",
        author: "Mystery Software Engineer",
        description: "I joined a company as a Software Engineer and I have no idea what I'm doing. Please don't ask me any coding questions.",
        genre: "Coding",
        image: '',
        episodes: [{
            title:"Episode 1: Functions",
            description: "What even are functions? Personally, I don't think they're even real.",
            audio: "podcast.mp3"
        },
        {
            title:"Episode 2: React States",
            description: "The only state I understand is that my mental state is declining",
            audio: "podcast.mp3"
        },
        {
            title:"Episode 3: For and While Loops",
            description: "That one time I introduced an infinite loop in production and got away with it.",
            audio: "podcast.mp3"
        }],
    },
    {
        name: "Sensitive Savage: The Real Alpha's Guide to Society",
        author: "Chad 'And Rotate' Adonis",
        description: "The podcast that proves sensitivity is a superpower! Join us on a journey to redefine what it means to be a true alpha in a world that desperately needs more sensitivity and kindness",
        genre: "The Manliest Genre",
        image: '',
        episodes: [{
            title:"Mastering the Art of Self-Care",
            description: "Dive into the world of bubble baths, scented candles, and emotional expression. Real alphas take care of their feelings.",
            audio: "podcast.mp3"
        },
        {
            title:"The Power of Vulnerability",
            description: "Explore how crying in public can be a display of strength and courage. Real men let it all out.",
            audio: "podcast.mp3"
        },
        {
            title:"Sensitivity Training: Crafting Poems and Compliments",
            description:"Learn how to write heartfelt poems and shower your friends with compliments. Real alphas are poets at heart.",
            audio: "podcast.mp3"
        },
        {
            title:"The Alpha Apology Tour",
            description:"Listen to heartfelt apologies from our hosts for all the times they've been overly assertive. Real alphas know when to say sorry.",
            audio: "podcast.mp3"
        },
        {
            title:"Meditation and Mantras: Finding Your Inner Zen Warrior",
            description:"Discover the tranquility of meditation and the power of positive affirmations. Real warriors are at peace with themselves.",
            audio: "podcast.mp3"
        }]
    },
    {
        name: "CrunchCast",
        author: "Kirsty Crunch",
        description: "Listen in as we crunch on some foods",
        genre: "Food",
        image: '',
        episodes: [
            {
                title: 'Crisps',
                description: 'On this episode we crunch on a packet of crisps',
                audio: ''
            },
            {
                title: 'Biscuits',
                description: "On this episode we crunch on a packet of biscuits",
                audio: ''
            },
            {
                title: 'Hot Chocolate',
                description: 'As a twist, on this episode we sip on some hot chocolate',
                audio: ''
            }
        ]
        
    },
    {
        name: "CrunchCast2",
        author: "Kirsty Crunch",
        description: "Listen in as we crunch on some foods",
        genre: "Food",
        image: '',
        episodes: [
            {
                title: 'Crisps',
                description: 'On this episode we crunch on a packet of crisps',
                audio: ''
            },
            {
                title: 'Biscuits',
                description: "On this episode we crunch on a packet of biscuits",
                audio: ''
            },
            {
                title: 'Hot Chocolate',
                description: 'As a twist, on this episode we sip on some hot chocolate',
                audio: ''
            }
        ]
        
    },
    {
        name: "CrunchCast3",
        author: "Kirsty Crunch",
        description: "Listen in as we crunch on some foods",
        genre: "Food",
        image: '',
        episodes: [
            {
                title: 'Crisps',
                description: 'On this episode we crunch on a packet of crisps',
                audio: ''
            },
            {
                title: 'Biscuits',
                description: "On this episode we crunch on a packet of biscuits",
                audio: ''
            },
            {
                title: 'Hot Chocolate',
                description: 'As a twist, on this episode we sip on some hot chocolate',
                audio: ''
            }
        ]
        
    },
    {
        name: "CrunchCast4",
        author: "Kirsty Crunch",
        description: "Listen in as we crunch on some foods",
        genre: "Food",
        image: '',
        episodes: [
            {
                title: 'Crisps',
                description: 'On this episode we crunch on a packet of crisps',
                audio: ''
            },
            {
                title: 'Biscuits',
                description: "On this episode we crunch on a packet of biscuits",
                audio: ''
            },
            {
                title: 'Hot Chocolate',
                description: 'As a twist, on this episode we sip on some hot chocolate',
                audio: ''
            }
        ]
        
    },
    {
        name: "CrunchCast5",
        author: "Kirsty Crunch",
        description: "Listen in as we crunch on some foods",
        genre: "Food",
        image: '',
        episodes: [
            {
                title: 'Crisps',
                description: 'On this episode we crunch on a packet of crisps',
                audio: ''
            },
            {
                title: 'Biscuits',
                description: "On this episode we crunch on a packet of biscuits",
                audio: ''
            },
            {
                title: 'Hot Chocolate',
                description: 'As a twist, on this episode we sip on some hot chocolate',
                audio: ''
            }
        ]
        
    },
    {
        name: "CrunchCast6",
        author: "Kirsty Crunch",
        description: "Listen in as we crunch on some foods",
        genre: "Food",
        image: '',
        episodes: [
            {
                title: 'Crisps',
                description: 'On this episode we crunch on a packet of crisps',
                audio: ''
            },
            {
                title: 'Biscuits',
                description: "On this episode we crunch on a packet of biscuits",
                audio: ''
            },
            {
                title: 'Hot Chocolate',
                description: 'As a twist, on this episode we sip on some hot chocolate',
                audio: ''
            }
        ]
        
    },
])

db.users.insertOne({
    name:"user",
    subscriptions: []
})

