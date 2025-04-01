const questions = [
    {
        category: 'Adventure',
        question: 'When do you feel most alive?'
    },
    {
        category: 'Adventure',
        question: 'What do you want to be when you grow up?'
    },
    {
        category: 'Adventure',
        question: 'What makes you weird? How do you feel about it?'
    },
    {
        category: 'Adventure',
        question: 'What is your favorite activity to do or game to play? Why do you like it?'
    },
    {
        category: 'Adventure',
        question: 'If a crystal ball could tell you the truth about your life, the world, or anything else, what would you want to know?'
    },
    {
        category: 'Adventure',
        question: 'If you could wake up tomorrow having gained any one quality, what quality would you want to have?'
    },
    {
        category: 'Adventure',
        question: 'If you spent a year travelling, where would you go?'
    },
    {
        category: 'Adventure',
        question: 'When is the closest you have ever come to dying?'
    },
    {
        category: 'Closeness',
        question: 'What message would you put on a billboard for thousands of people to see every day?'
    },
    {
        category: 'Closeness',
        question: 'What fun family traditions do you have? Which is your favorite?'
    },
    {
        category: 'Closeness',
        question: 'Who was your first true friend? What brought you together?'
    },
    {
        category: 'Closeness',
        question: 'What are three words the people closest to you would use to describe you?'
    },
    {
        category: 'Closeness',
        question: 'What qualities make someone a good friend?'
    },
    {
        category: 'Closeness',
        question: 'Who is someone in your life that you wish you were closer to? What can you do to start that change?'
    },
    {
        category: 'Closeness',
        question: 'What activities/events help you feel close to friends or family?'
    },
    {
        category: 'Closeness',
        question: 'What was one of the best days of your life? What did you do?'
    },
    {
        category: 'Creativity',
        question: `If you didn't have to sleep, what would you do with the extra time?`
    },
    {
        category: 'Creativity',
        question: 'What have you read, watched, or listened to that has changed your life?'
    },
    {
        category: 'Creativity',
        question: 'If you could change anything about your life right now, what would you change?'
    },
    {
        category: 'Creativity',
        question: 'What character from a book, movie, or TV show is most like you?'
    },
    {
        category: 'Creativity',
        question: 'If you had the money and the opportunity, what is something crazy you want to try?'
    },
    {
        category: 'Creativity',
        question: 'What is something creative you want to learn how to do?'
    },
    {
        category: 'Creativity',
        question: 'How do you spend your free time? Is it different from how you want to spend your free time?'
    },
    {
        category: 'Creativity',
        question: `What is the most beautiful work of art you've ever seen?`
    },
    {
        category: 'Compassion',
        question: 'How do you show the people around you that you love them?'
    },
    {
        category: 'Compassion',
        question: 'What is the nicest thing someone has ever done for you?'
    },
    {
        category: 'Compassion',
        question: 'When was the last time you had to forgive someone? How did you handle it?'
    },
    {
        category: 'Compassion',
        question: `What is the kindest thing you've done for someone else?`
    },
    {
        category: 'Compassion',
        question: `Have you done any acts of service for others? Do you have a favorite service project you've done?`
    },
    {
        category: 'Compassion',
        question: 'What is the best gift you have ever received? What made it so special?'
    },
    {
        category: 'Compassion',
        question: 'Do the ends justify the means? (ie does it matter how you treat someone if you end up getting what you want in the end?)'
    },
    {
        category: 'Compassion',
        question: 'How do you show compassion for yourself? Is there something else you want to do?'
    },
    {
        category: 'Gratitude',
        question: 'Who was your favorite/most memorable teacher? What did they teach you?'
    },
    {
        category: 'Gratitude',
        question: 'Who in your life are you most grateful for?'
    },
    {
        category: 'Gratitude',
        question: 'If you were to die today, what would you want to tell your friends and family?'
    },
    {
        category: 'Gratitude',
        question: 'What is something in your life you want to be more grateful for?'
    },
    {
        category: 'Gratitude',
        question: 'If your house was on fire and you could only save one item, what would you save?'
    },
    {
        category: 'Gratitude',
        question: 'What is something that bothers you? Can you think of a reason why you might be grateful for it?'
    },
    {
        category: 'Gratitude',
        question: `Do you think it's important to take time to be grateful? Why?`
    },
    {
        category: 'Gratitude',
        question: 'When was the last time you felt truly appreciated?'
    },
    {
        category: 'Integrity',
        question: 'Have you ever made a life-changing decision? What was it?'
    },
    {
        category: 'Integrity',
        question: 'What is one bad habit you wish you could break? What could you do to change it?'
    },
    {
        category: 'Integrity',
        question: 'What is something that always makes you smile?'
    },
    {
        category: 'Integrity',
        question: 'What is more important to you: being right or being forgiving?'
    },
    {
        category: 'Integrity',
        question: 'When is it okay to be completely honest? What is it okay to not?'
    },
    {
        category: 'Integrity',
        question: 'What, if anything, is too important or serious to be joked about?'
    },
    {
        category: 'Integrity',
        question: 'Have you had to stand up for something you believe in, a rule, or a boundary? How did that go?'
    },
    {
        category: 'Integrity',
        question: 'What does integrity mean to you?'
    },
    {
        category: 'Passion',
        question: 'What in your life are you most excited about right now?'
    },
    {
        category: 'Passion',
        question: `What is one book or movie that you'd recommend to friends? Why?`
    },
    {
        category: 'Passion',
        question: 'What would your perfect day look like?'
    },
    {
        category: 'Passion',
        question: 'What are your top three favorite movies? Why do you like them so much?'
    },
    {
        category: 'Passion',
        question: `What is the riskiest or most dangerous thing you've done? If you had another chance, would you do it differently?`
    },
    {
        category: 'Passion',
        question: 'What is something that you like or would like to collect?'
    },
    {
        category: 'Passion',
        question: `What is one hobby/interest that you've invested way too much time or money on?`
    },
    {
        category: 'Passion',
        question: `What is something you were nervous about or didn't want to try, but ended up loving? What changed your attitude?`
    },
    {
        category: 'Resilience',
        question: 'Who is someone that inspires you or someone that you look up to?'
    },
    {
        category: 'Resilience',
        question: `What is the best piece of advice you've ever been given?`
    },
    {
        category: 'Resilience',
        question: `Where is the worst place you've tried to sleep?`
    },
    {
        category: 'Resilience',
        question: 'What is something you are struggling with that you want to overcome?'
    },
    {
        category: 'Resilience',
        question: 'Who are the top three people you go to for encouragement, advice, or support?'
    },
    {
        category: 'Resilience',
        question: `What is something hard you've accomplished? What did you have to do?`
    },
    {
        category: 'Resilience',
        question: 'What are you afraid of?'
    },
    {
        category: 'Resilience',
        question: 'Who is the bravest person you know? What makes them so brave?'
    },
    {
        category: 'Reflection',
        question: 'In a perfect world, what would the next year of your life look like?'
    },
    {
        category: 'Reflection',
        question: `What is something you've done that you're the most proud of?`
    },
    {
        category: 'Reflection',
        question: 'What advice would you give to younger you?'
    },
    {
        category: 'Reflection',
        question: 'What is one magical memory from this past year?'
    },
    {
        category: 'Reflection',
        question: 'Which feels worse: failing or not trying?'
    },
    {
        category: 'Reflection',
        question: 'Do you think there is a reason for why certain things are your favorite?'
    },
    {
        category: 'Reflection',
        question: 'Are there rules in your childhood that you wish were different? What would you do instead if you were a parent?'
    },
    {
        category: 'Reflection',
        question: 'What is something you wish past you would have known?'
    },
    {
        category: 'Wellness',
        question: 'Where do you find peace and quiet?'
    },
    {
        category: 'Wellness',
        question: `What is something that really helps you when you're feeling down?`
    },
    {
        category: 'Wellness',
        question: 'What is one thing you could do to take better care of yourself?'
    },
    {
        category: 'Wellness',
        question: 'When was the last time you tried something totally new?'
    },
    {
        category: 'Wellness',
        question: `Do you have a happy place? Where is it? If you don't have one, what would it be like?`
    },
    {
        category: 'Wellness',
        question: 'What are you doing right now that your future self will thank you for?'
    },
    {
        category: 'Wellness',
        question: 'How do you try to maintain balance in your life? What areas could be better?'
    },
    {
        category: 'Wellness',
        question: 'What is a memory that will forever make you laugh out loud?'
    }
]

export default questions;