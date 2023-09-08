use podharbour;

db.dropDatabase()

db.podcasts.insertMany([
    {
        name: "Animal Sounds Podcast",
        author: "Arthur Buck",
        description: "Do you love Animal Sounds? So do we, this is a podcast all about listening to them! We dive into the wild world of the Animal kingdom and listen to funny, cute, sad, and happy clips of animal noises! ",
        genre: "Animals and Wildlife",
        image: 'animals',
        episodes: [{
            title:"Episode 1: Cat Sounds",
            description: "In this episode we listen to sounds of Cats, we know you love listening to cats! Love em or hate em, cats always find a way to make us laugh smile, or sometimes cry. Lets spend a day listening to a wide variety of cat sounds together, and talk about what each meow might mean!",
            image: 'animals',
            audio: "cat.mp3"
        },
        {
            title:"Episode 2: Dog Sounds",
            description: "Dogs, humans best friend. Everyone loves dogs! Their wild tails and happy pants always bring a smile to our faces. Today we will listen to the sounds that dogs make and try to decipher what what each sound means! ",
            image: 'animals',
            audio: "dog.mp3"
        },
        {
            title:"Episode 3: Duck Sounds",
            description:"Quackity Quack, don't quack back! Ducks are cute, you can't deny it. They quack and flap and and play in water all day. Some people think they are tasty, I certainly do, but that doesn't mean we can't still enjoy their silly sounds while they live and breathe! And that is exactly what we will do in todays episode.",
            image: 'animals',
            audio: "quack.mp3"
        }],
    },
    {
        name: "We don't know how to Code",
        author: "Mystery Software Engineer",
        description: "I joined a company as a Software Engineer and I have no idea what I'm doing. Please don't ask me any coding questions. But feel free to join me on my journey of chaos as I attempt to navigate my way through the wild world of tech!",
        genre: "Coding",
        image: 'IDontKnowHowToCode',
        episodes: [{
            title:"Episode 1: Functions",
            description: "What is a function? Personally, I don't think they're even real. When I started my journey into software engineering, one of the first things I ever learned was the functionality of a function... Unfortunately to this day, I am still sure what the hell they do. I asked my instructors everyday during my course 'What is a Function?' and all they ever did was look at me and laugh... So I don't know. You should join in and help me try to learn what a function is..",
            image: 'IDontKnowHowToCode',
            audio: "podcast.mp3"
        },
        {
            title:"Episode 2: React States",
            description: "The only state I understand is that my mental state is declining.... I don't really know what else to say about this on. Im really hoping one of my lovely viewers will be able to help me with both what the hell a state is, and maybe even my mental state.",
            image: 'IDontKnowHowToCode',
            audio: "podcast.mp3"
        },
        {
            title:"Episode 3: For and While Loops",
            description: "Infinite Loops... aaahhhhh.... The panic that we feel when we accidentally introduce one into our projects. That one time I introduced an infinite loop in production and got away with it. I almost got fired when they finally discovered it was there, but I got away with ti for a good 4 weeks. I want to talk with any of you about times you introduced an infinite loop to your lovely project and how much fear and anxiety it induced in you as a result.",
            image: 'IDontKnowHowToCode',
            audio: "podcast.mp3"
        }],
    },
    {
        name: "Sensitive Savage: The Real Alpha's Guide to Society",
        author: "Chad 'And Rotate' Adonis",
        description: "The podcast that proves sensitivity is a superpower! Join us on a journey to redefine what it means to be a true alpha in a world that desperately needs more sensitivity and kindness. Every episode we will dive muscle first into exploring our manliest sensitive side, because real alphas cry too.",
        genre: "The Manliest Genre",
        image: 'man',
        episodes: [{
            title:"Mastering the Art of Self-Care",
            description: "Dive into the world of bubble baths, scented candles, and emotional expression. Real alphas take care of themselves and their feelings. Autumn Breeze, Ocean Spray, Summers Eve, Fall Leaves. We love candles, and smelling them makes you way more manly, its proven, with science. Bubble baths are even cooler than Ice Baths. They say 1 hour in a bubble bath each day increases your manliness by 50% after just one week! So men, join me, light those candles, draw a warm bubbly bath, and lets dive in and be manly together.",
            image: 'man',
            audio: "podcast.mp3"
        },
        {
            title:"The Power of Vulnerability",
            description: "Explore how crying in public can be a display of strength and courage. Real men let it all out. We've been told all our lives that men can't cry. We've been told all our lives to suck it up and be a man. But I've found out through my journey through manliness that crying more actually makes you WAY more manly. So lets go boys, lets get together and cry together.",
            image: 'man',
            audio: "podcast.mp3"
        },
        {
            title:"Sensitivity Training: Crafting Poems and Compliments",
            description:"Learn how to write heartfelt poems and shower your friends with compliments. Real alphas are poets at heart. I discovered poetry just 2 weeks ago, and let me tell ya, I've absolutely never been more manly. Everyday I send emails out to all my favourite men and shower them with about 5 or 6 poems. My productivity has increased so much, I can write about 20 poems a day now! I want to help all of my manly subscribers learn how to write stacks of poetry everyday!",
            image: 'man',
            audio: "podcast.mp3"
        },
        {
            title:"The Alpha Apology Tour",
            description:"Listen to heartfelt apologies from our hosts for all the times they've been overly assertive. Real alphas know when to say sorry.",
            image: 'man',
            audio: "podcast.mp3"
        },
        {
            title:"Meditation and Mantras: Finding Your Inner Zen Warrior",
            description:"Discover the tranquility of meditation and the power of positive affirmations. 1 week ago I discovered the power of Yoga and meditation. I now start everyday with 15 positive affirmations and 1 solid hour of yoga. As I bend down and perform my final downward facing dog of the day, I feel my body filling to the brim with pure manliness.  Real warriors are at peace with themselves.",
            image: 'man',
            audio: "podcast.mp3"
        }]
    },
    {
        name: "CrunchCast",
        author: "Kirsty Crunch",
        description: "Listen in as we crunch on some foods",
        genre: "Food",
        image: 'CrunchCast',
        episodes: [
            {
                title: 'Crisps',
                description: 'On this episode we crunch on a packet of crisps',
                image: 'CrunchCast',
                audio: ''
            },
            {
                title: 'Biscuits',
                description: "On this episode we crunch on a packet of biscuits",
                image: 'CrunchCast',
                audio: ''
            },
            {
                title: 'Hot Chocolate',
                description: 'As a twist, on this episode we sip on some hot chocolate',
                image: 'CrunchCast',
                audio: ''
            }
        ]
        
    },
    {
        name: "CrunchCast2",
        author: "Kirsty Crunch",
        description: "Listen in as we crunch on some foods",
        genre: "Food",
        image: 'CrunchCast',
        episodes: [
            {
                title: 'Crisps',
                description: 'On this episode we crunch on a packet of crisps',
                image: 'CrunchCast',
                audio: ''
            },
            {
                title: 'Biscuits',
                description: "On this episode we crunch on a packet of biscuits",
                image: 'CrunchCast',
                audio: ''
            },
            {
                title: 'Hot Chocolate',
                description: 'As a twist, on this episode we sip on some hot chocolate',
                image: 'CrunchCast',
                audio: ''
            }
        ]
        
    },
    {
        name: "CrunchCast3",
        author: "Kirsty Crunch",
        description: "Listen in as we crunch on some foods",
        genre: "Food",
        image: 'CrunchCast',
        episodes: [
            {
                title: 'Crisps',
                description: 'On this episode we crunch on a packet of crisps',
                image: 'CrunchCast',
                audio: ''
            },
            {
                title: 'Biscuits',
                description: "On this episode we crunch on a packet of biscuits",
                image: 'CrunchCast',
                audio: ''
            },
            {
                title: 'Hot Chocolate',
                description: 'As a twist, on this episode we sip on some hot chocolate',
                image: 'CrunchCast',
                audio: ''
            }
        ]
        
    },
    {
        name: "CrunchCast4",
        author: "Kirsty Crunch",
        description: "Listen in as we crunch on some foods",
        genre: "Food",
        image: 'CrunchCast',
        episodes: [
            {
                title: 'Crisps',
                description: 'On this episode we crunch on a packet of crisps',
                image: 'CrunchCast',
                audio: ''
            },
            {
                title: 'Biscuits',
                description: "On this episode we crunch on a packet of biscuits",
                image: 'CrunchCast',
                audio: ''
            },
            {
                title: 'Hot Chocolate',
                description: 'As a twist, on this episode we sip on some hot chocolate',
                image: 'CrunchCast',
                audio: ''
            }
        ]
        
    },
    {
        name: "CrunchCast5",
        author: "Kirsty Crunch",
        description: "Listen in as we crunch on some foods",
        genre: "Food",
        image: 'CrunchCast',
        episodes: [
            {
                title: 'Crisps',
                description: 'On this episode we crunch on a packet of crisps',
                image: 'CrunchCast',
                audio: ''
            },
            {
                title: 'Biscuits',
                description: "On this episode we crunch on a packet of biscuits",
                image: 'CrunchCast',
                audio: ''
            },
            {
                title: 'Hot Chocolate',
                description: 'As a twist, on this episode we sip on some hot chocolate',
                image: 'CrunchCast',
                audio: ''
            }
        ]
        
    },
    {
        name: "CrunchCast6",
        author: "Kirsty Crunch",
        description: "Listen in as we crunch on some foods",
        genre: "Food",
        image: 'CrunchCast',
        episodes: [
            {
                title: 'Crisps',
                description: 'On this episode we crunch on a packet of crisps',
                image: 'CrunchCast',
                audio: ''
            },
            {
                title: 'Biscuits',
                description: "On this episode we crunch on a packet of biscuits",
                image: 'CrunchCast',
                audio: ''
            },
            {
                title: 'Hot Chocolate',
                description: 'As a twist, on this episode we sip on some hot chocolate',
                image: 'CrunchCast',
                audio: ''
            }
        ]
        
    },
])

db.users.insertOne({
    name:"user",
    subscriptions: []
})