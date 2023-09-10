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
        description: "I love crunchy foods, do you? Even if you don't, maybe you love listening to other people crunch on them. I think we can all relate to that. If that sounds like your cup of tea then you are in the right place my friend! Join me on this ASMR journey through this world of crunch, pop and slurps.",
        genre: "Food",
        image: 'CrunchCast',
        episodes: [
            {
                title: 'Crisps',
                description: 'In todays episode I will will be opening a bag of crisps slowly and crunch away on each and every single one of them. Join me for tingly crunchy feelings.',
                image: 'CrunchCast',
                audio: ''
            },
            {
                title: 'Biscuits',
                description: "On this episode we crunch on a packet of biscuits. Mmmmmm I love biscuits. They are very british aren't they? I found out that most Americans don't even know what our version of biscuits is. To them biscuits are fluffy and soft, to use they are crunchy and delicious. Join me for a lovely day of crunch biscuits and crinkly packets.",
                image: 'CrunchCast',
                audio: ''
            },
            {
                title: 'Hot Chocolate',
                description: "As a twist, on this episode we sip on some hot chocolate. I told you we would be hearing some slurping didnt I? Pour yourself a cup of tea, coffee, or hot cocoa and join me for a slurpy cozy day. Im sure there will be plenty of whispers in your ear as well;)",
                image: 'CrunchCast',
                audio: ''
            }
        ]
        
    },
    {
        name: "Just the Two of Us",
        author: "John and Joe Watson",
        description: "Hi, I'm John, and hes Joe, and together we are, TWINCAST! Born only moments apart from eachother, Joe and I have always been close. In this podcast we will share our experience of life as identical twins! We've had ups and downs over the past 28 years, and we want to share them all with you! Join us on our journey together, through life as Twins!",
        genre: "Life",
        image: 'CrunchCast',
        episodes: [
            {
                title: 'Look Whos Talkin - Episode 1',
                description: "Okay let's start this pod off right! Today we are going to play a little games, it's called Looks Who's Talkin'! John and I will take turns reading out from a script, but it won't be in order. Its your job as the audience to chime in and try to guess whos talkin! We will award points to those of you who guess right!",
                image: 'CrunchCast',
                audio: ''
            },
            {
                title: 'What Happened to Us? - Episode 2',
                description: "Alright, in todays episode lets share some stories. Joe and I have gotten into plenty of mischief together (and separately) whilst growing up. Today we want to share with you some of our most embarrassing and hilarious childhood stories. Join us and enjoy a day of laughs and smiles as we take a trip down memory lane and giggle our way through each story.",
                image: 'CrunchCast',
                audio: ''
            },
            {
                title: 'Trading Places - Episode 3',
                description: "Have you ever wondered what it would be like to have a twin and attempt to trade places them? Well guess what, we did that once, for a WHOLE WEEK! This story is a long one, and a good one, so buckle up for this long episode where we tell you all about the time where John became Joe and Joe became John for and entire week. We managed to deceive our friends, our family, our teachers, and even our girlfriends!",
                image: 'CrunchCast',
                audio: ''
            }
        ]
        
    },
    {
        name: "Nightfall Mysteries",
        author: "Spooky Steve",
        description: "*BUMP* We all hear those bumps in the night and wonder if its just the house creaking, the wind blowing, or something far more sinister. Unfortunately for some very unlucky folks on this earth that bump ends up being something very sinister. My job is to dig into the gruesome details of true crime, mysteries and scary ghost tails, your job is to dive deeper with me and enjoy every shiver thats sent down your spine.",
        genre: "Horror, True Crime",
        image: 'CrunchCast',
        episodes: [
            {
                title: 'The Gruesome Kidnapping of Kathy K. - Episode 1',
                description: "Kathy was a 26 year old University student in South West UK. Her friends family and peers describe her as a shining star ready to start her life and career as a news journalist. But unfortunately Kathys shot at that beautiful life and future was cut short because one vile person on this planet couldnt stand to just sit back and watch her succeed. Join me today as we look into Kathys tragic short life and uncover what happened to her together.",
                image: 'CrunchCast',
                audio: ''
            },
            {
                title: 'Where is Sam Peterson - Episode 2',
                description: "In the quiet evening of July 13, 2003 in small town rural Jamesville Ohio, all seemed peaceful and calm. The birds were sleeping and the crickets were alive and as the fog rested its cold touch upon the land one cyclist was riding down interstate 56 when they suddenly seemingly disappeared off the face of this earth. The cyclist in question was Angel Gonzalez, a local resident that was on his was home from a long night at work. Police have been searching for Angel for over ten years now with little to no leads to work from. Join me as we try to crack this cold case together and discover what truly happened to Angel on that cool summer night.",
                image: 'CrunchCast',
                audio: ''
            },
            {
                title: 'Ghosts - Episode 3',
                description: "Ghosts, do you believe in them? What do you think they are if you do? There are so mayn theories out there about what ghosts are, whether or not they are real. Are they demons, are they relatives taht have passed on, are they creatures from another dimension? Lets dive into a day of looking into the best evidence possible to represent our ideas about what ghosts are and where they come from.",
                image: 'CrunchCast',
                audio: ''
            },
            {
                title: 'Ghosts continued- Episode 4',
                description: "Last week we started exploring and discussing our ideas of what ghosts are and whether or not they are real, this week after looking into a bunch of evidence we will be diving even deeper into more evidence and talking baout what we see and what it means.",
                image: 'CrunchCast',
                audio: ''
            }
        ]
        
    },
    {
        name: "We're Not Even That Funny",
        author: "The Humour Squad",
        description: "Five People, one desk, five microphones, too many boring jokes, too many embarassing stories. Join us and maybe you will laugh.",
        genre: "Comedy, Real Life",
        image: 'CrunchCast',
        episodes: [
            {
                title: 'Episode 1: Dad Jokes',
                description: "Once I was kidnapped but a mime, they did unspeakable things to me. Did you just laugh? Good, then youll love todays episode where we tell you dad jokes and you laugh at them",
                image: 'CrunchCast',
                audio: ''
            },
            {
                title: 'Episode 2: Fart Jokes',
                description: "Everyone farts, and sometimes its funny and comes with a story that sbeen told about 50 times over. Today we will share our stories about all the times that we managed to clear a room or offend our grandmas by farting at the dinner table. Join us and maybe you will laugh.",
                image: 'CrunchCast',
                audio: ''
            }
        ]
        
    }
]);

db.users.insertOne({
    name:"user",
    subscriptions: []
})