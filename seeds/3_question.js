exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('question').del()
        .then(function() {
            // Inserts seed entries
            return knex('question').insert([{
                    id: 1,
                    category_id: 1,
                    question_string: "If you could alter something about a parent, what would it be?",
                    photo_url: ""
                },
                {
                    id: 2,
                    category_id: 1,
                    question_string: "How have you changed over the past few years?",
                    photo_url: ""
                },
                {
                    id: 3,
                    category_id: 1,
                    question_string: "The trick to understanding why I can sometimes be difficult is to remember that...",
                    photo_url: ""
                },
                {
                    id: 4,
                    category_id: 1,
                    question_string: "In what ways do you disagree with your society's standard views on sex?",
                    photo_url: ""
                },
                {
                    id: 5,
                    category_id: 1,
                    question_string: "What are the bad things you learnt from your mother? And your father?",
                    photo_url: ""
                },
                {
                    id: 6,
                    category_id: 1,
                    question_string: "What would you want to reassure the child version of yourself about?",
                    photo_url: ""
                },
                {
                    id: 7,
                    category_id: 1,
                    question_string: "What would need to happen for us all to spend more time together?",
                    photo_url: ""
                },
                {
                    id: 8,
                    category_id: 1,
                    question_string: "How have you let your parents down?",
                    photo_url: ""
                },
                {
                    id: 9,
                    category_id: 1,
                    question_string: "What bit of you did your parents never understand?",
                    photo_url: ""
                },
                {
                    id: 10,
                    category_id: 1,
                    question_string: "Has anything from your childhood made you very anxious?",
                    photo_url: ""
                },
                {
                    id: 11,
                    category_id: 1,
                    question_string: "How do you disappoint yourself?",
                    photo_url: ""
                },
                {
                    id: 12,
                    category_id: 1,
                    question_string: "What kinds of problems would you (almost) like an ideal lover to have?",
                    photo_url: ""
                },
                {
                    id: 13,
                    category_id: 1,
                    question_string: "Describe how your current (or past) partner resembles one of your parents.",
                    photo_url: ""
                },
                {
                    id: 14,
                    category_id: 1,
                    question_string: "Explain why you might feel reluctant to show off a new partner to friends or family.",
                    photo_url: ""
                },
                {
                    id: 15,
                    category_id: 1,
                    question_string: "What romantic gesture / overture are you now quite embarrassed to think about?",
                    photo_url: ""
                },
                {
                    id: 16,
                    category_id: 1,
                    question_string: "Have you ever had an unhealthy attachment to someone?",
                    photo_url: ""
                },
                {
                    id: 17,
                    category_id: 1,
                    question_string: "If you decided not to continue dating someone, how would you end the relationship?",
                    photo_url: ""
                },
                {
                    id: 18,
                    category_id: 1,
                    question_string: "Who was the first person to break your heart?",
                    photo_url: ""
                },
                {
                    id: 19,
                    category_id: 1,
                    question_string: "What might your family blame you for?",
                    photo_url: ""
                },
                {
                    id: 20,
                    category_id: 1,
                    question_string: "As an adult, do you squabble with your siblings? How?",
                    photo_url: ""
                },
                {
                    id: 21,
                    category_id: 1,
                    question_string: "How does your dependence on (or independence from) your parents affect your relationship with them?",
                    photo_url: ""
                },
                {
                    id: 22,
                    category_id: 1,
                    question_string: "Have you ever had a crush on someone rather too senior or junior for you?",
                    photo_url: ""
                },
                {
                    id: 23,
                    category_id: 1,
                    question_string: "What causes your anxieties? How do you overcome them?",
                    photo_url: ""
                },
                {
                    id: 24,
                    category_id: 1,
                    question_string: "Have you ever struggled to get over a partner?",
                    photo_url: ""
                },
                {
                    id: 25,
                    category_id: 1,
                    question_string: "What values do you have that your parents don't?",
                    photo_url: ""
                },
                {
                    id: 26,
                    category_id: 1,
                    question_string: "Who do you blame for the state of your career, aside from yourself?",
                    photo_url: ""
                },
                {
                    id: 27,
                    category_id: 1,
                    question_string: "What matters to you when choosing friends?",
                    photo_url: ""
                },
                {
                    id: 28,
                    category_id: 1,
                    question_string: "Ten years from now, how would you like to have changed?",
                    photo_url: ""
                },
                {
                    id: 29,
                    category_id: 1,
                    question_string: "What I'd love to change about myself is...",
                    photo_url: ""
                },
                {
                    id: 30,
                    category_id: 1,
                    question_string: "What do you wish you could go back and correct?",
                    photo_url: ""
                },
                {
                    id: 31,
                    category_id: 1,
                    question_string: "What would need to change for you to feel less anxious?",
                    photo_url: ""
                },
                {
                    id: 32,
                    category_id: 1,
                    question_string: "What did you learn about relationships from your parents?",
                    photo_url: ""
                },
                {
                    id: 33,
                    category_id: 1,
                    question_string: "What would you like to learn from me? How could I help you?",
                    photo_url: ""
                },
                {
                    id: 34,
                    category_id: 1,
                    question_string: "Looking back, what were you angry with your parents about?",
                    photo_url: ""
                },
                {
                    id: 35,
                    category_id: 1,
                    question_string: "How might your parents strictness / permissiveness influence your future parenting styles / methods?",
                    photo_url: ""
                },
                {
                    id: 36,
                    category_id: 1,
                    question_string: "What might you not want your employers to learn about your behavior outside of work?",
                    photo_url: ""
                },
                {
                    id: 37,
                    category_id: 1,
                    question_string: "Who do you need to impress?",
                    photo_url: ""
                },
                {
                    id: 38,
                    category_id: 1,
                    question_string: "What negative thought do you worry your friends have about you?",
                    photo_url: ""
                },
                {
                    id: 39,
                    category_id: 1,
                    question_string: "What part of you do you feel needs the most work?",
                    photo_url: ""
                },
                {
                    id: 40,
                    category_id: 1,
                    question_string: "What do the negative voices in your head focus on when they criticize you?",
                    photo_url: ""
                },
                {
                    id: 41,
                    category_id: 1,
                    question_string: "Do you think you have changed your own behavior or character during a relationship?",
                    photo_url: ""
                },
                {
                    id: 42,
                    category_id: 1,
                    question_string: "How has your past hindered you in the present?",
                    photo_url: ""
                },
                {
                    id: 43,
                    category_id: 1,
                    question_string: "Who makes you envious? What might the envy tell you about your own aspirations?",
                    photo_url: ""
                },
                {
                    id: 44,
                    category_id: 1,
                    question_string: "What kinds of mature qualities do you particularly admire in other people?",
                    photo_url: ""
                },
                {
                    id: 45,
                    category_id: 1,
                    question_string: "What do you fear in social contexts?",
                    photo_url: ""
                },
                {
                    id: 46,
                    category_id: 1,
                    question_string: "What do you worry that others might think?",
                    photo_url: ""
                },
                {
                    id: 47,
                    category_id: 1,
                    question_string: "In what ways have you disappointed your parents?",
                    photo_url: ""
                },
                {
                    id: 48,
                    category_id: 1,
                    question_string: "What unfortunate character trait can be traced back directly to something in your past?",
                    photo_url: ""
                },
                {
                    id: 49,
                    category_id: 1,
                    question_string: "What book made a big impression on you?",
                    photo_url: ""
                },
                {
                    id: 50,
                    category_id: 1,
                    question_string: "When have you felt lonely?",
                    photo_url: ""
                },
                {
                    id: 51,
                    category_id: 1,
                    question_string: "What are the ideal conditions for a get-together?",
                    photo_url: ""
                },
                {
                    id: 52,
                    category_id: 2,
                    question_string: "What small changes could you make to move your life in a better direction, work-wise?",
                    photo_url: ""
                },
                {
                    id: 53,
                    category_id: 2,
                    question_string: "What is the world far too judgmental about? Draw the discussion back to yourself, too.",
                    photo_url: ""
                },
                {
                    id: 54,
                    category_id: 2,
                    question_string: "Think of something you admire. Without naming them, try to describe what impresses you about them.",
                    photo_url: ""
                },
                {
                    id: 55,
                    category_id: 2,
                    question_string: "Tell us about one of your good old friends: what do you like about them?",
                    photo_url: ""
                },
                {
                    id: 56,
                    category_id: 2,
                    question_string: "What would you like more regularly to be appreciated for?",
                    photo_url: ""
                },
                {
                    id: 57,
                    category_id: 2,
                    question_string: "What do you still want to achieve in life?",
                    photo_url: ""
                },
                {
                    id: 58,
                    category_id: 2,
                    question_string: "What thoughts do you experience when you start to panic at work?",
                    photo_url: ""
                },
                {
                    id: 59,
                    category_id: 2,
                    question_string: "Have you had an experience that might have contributed to your prejudices?",
                    photo_url: ""
                },
                {
                    id: 60,
                    category_id: 2,
                    question_string: "Who would you want to impress, if you had lots of money?",
                    photo_url: ""
                },
                {
                    id: 61,
                    category_id: 2,
                    question_string: "Where are you most an imposter?",
                    photo_url: ""
                },
                {
                    id: 62,
                    category_id: 2,
                    question_string: "What could you have done with a bit more luck and encouragement?",
                    photo_url: ""
                },
                {
                    id: 63,
                    category_id: 2,
                    question_string: "In what ways are you tricky to work with (we all are)? What could you do to improve or resolve this?",
                    photo_url: ""
                },
                {
                    id: 64,
                    category_id: 2,
                    question_string: "What makes you particularly happy?",
                    photo_url: ""
                },
                {
                    id: 65,
                    category_id: 2,
                    question_string: "Do you ever feel as if you don't deserve your success?",
                    photo_url: ""
                },
                {
                    id: 66,
                    category_id: 2,
                    question_string: "In what ways do you underperform at work?",
                    photo_url: ""
                },
                {
                    id: 67,
                    category_id: 2,
                    question_string: "What's the biggest mistake you've ever made at work?",
                    photo_url: ""
                },
                {
                    id: 68,
                    category_id: 2,
                    question_string: "In what ways might your choice (money or job satisfaction) be causing you difficulties in life?",
                    photo_url: ""
                },
                {
                    id: 69,
                    category_id: 2,
                    question_string: "What's preventing you from acting on your dreams?",
                    photo_url: ""
                },
                {
                    id: 70,
                    category_id: 2,
                    question_string: "How do your personal values align with your current role?",
                    photo_url: ""
                },
                {
                    id: 71,
                    category_id: 2,
                    question_string: "If you were the head of an organization, would you prioritize employee happiness over profit?",
                    photo_url: ""
                },
                {
                    id: 72,
                    category_id: 2,
                    question_string: "What sets off your tendency to procrastinate?",
                    photo_url: ""
                },
                {
                    id: 73,
                    category_id: 2,
                    question_string: "Describe the worst boss you've ever had.",
                    photo_url: ""
                },
                {
                    id: 74,
                    category_id: 2,
                    question_string: "What are the negative characteristics you've inherited from your family?",
                    photo_url: ""
                },
                {
                    id: 75,
                    category_id: 2,
                    question_string: "Have you ever felt jealous of a sibling?",
                    photo_url: ""
                },
                {
                    id: 76,
                    category_id: 2,
                    question_string: "What would you like to be reassured about?",
                    photo_url: ""
                },
                {
                    id: 77,
                    category_id: 2,
                    question_string: "What scares you about other people?",
                    photo_url: ""
                },
                {
                    id: 78,
                    category_id: 2,
                    question_string: "Describe the very worst that could happen if things you are worried about came to pass. How could they be survived?",
                    photo_url: ""
                },
                {
                    id: 79,
                    category_id: 2,
                    question_string: "What kind of people most irritate you at work? Can you notice any patterns?",
                    photo_url: ""
                },
                {
                    id: 80,
                    category_id: 2,
                    question_string: "What are the ideal conditions for a work get-together?",
                    photo_url: ""
                },
                {
                    id: 81,
                    category_id: 2,
                    question_string: "In what ways do you feel grateful to your team?",
                    photo_url: ""
                },
                {
                    id: 82,
                    category_id: 2,
                    question_string: "What is your team rather good at?",
                    photo_url: ""
                },
                {
                    id: 83,
                    category_id: 2,
                    question_string: "What would help this team achieve its full potential?",
                    photo_url: ""
                },
                {
                    id: 84,
                    category_id: 2,
                    question_string: "If you had to redesign some aspect of this company, what would it be?",
                    photo_url: ""
                },
                {
                    id: 85,
                    category_id: 2,
                    question_string: "What little but touching effort did someone in the company make that you still remember?",
                    photo_url: ""
                },
                {
                    id: 86,
                    category_id: 2,
                    question_string: "What might your colleagues be surprised to learn about you?",
                    photo_url: ""
                },
                {
                    id: 87,
                    category_id: 3,
                    question_string: "What remains to be achieved?",
                    photo_url: ""
                },
                {
                    id: 88,
                    category_id: 3,
                    question_string: "If you were braver, what would you be doing with your life?",
                    photo_url: ""
                },
                {
                    id: 89,
                    category_id: 3,
                    question_string: "I'd love you not to laugh if I told you that one of my secret aspirations is...",
                    photo_url: ""
                },
                {
                    id: 90,
                    category_id: 3,
                    question_string: "What do you want more of in your life in the time that remains?",
                    photo_url: ""
                },
                {
                    id: 91,
                    category_id: 3,
                    question_string: "What smells, foods, textures, lights or scenes carry you back to the past in a particularly vivid way?",
                    photo_url: ""
                },
                {
                    id: 92,
                    category_id: 3,
                    question_string: "What interests that you had in the past still live on in the adult you?",
                    photo_url: ""
                },
                {
                    id: 93,
                    category_id: 3,
                    question_string: "If you could go back and reassure the younger you abotu something, what would it be?",
                    photo_url: ""
                },
                {
                    id: 94,
                    category_id: 3,
                    question_string: "What are the ideal conditions for a family get-together?",
                    photo_url: ""
                },
                {
                    id: 95,
                    category_id: 3,
                    question_string: "How might the child in you be disappointed by your life as an adult?",
                    photo_url: ""
                },
                {
                    id: 96,
                    category_id: 3,
                    question_string: "The key to understanding me is to remember that...",
                    photo_url: ""
                },
                {
                    id: 97,
                    category_id: 3,
                    question_string: "What are the good things you learnt from your mother? And your father?",
                    photo_url: ""
                },
                {
                    id: 98,
                    category_id: 3,
                    question_string: "What are some sources of sadness in your life?",
                    photo_url: ""
                },
                {
                    id: 99,
                    category_id: 3,
                    question_string: "What would you like to stop being cross about?",
                    photo_url: ""
                },
                {
                    id: 100,
                    category_id: 3,
                    question_string: "What qualities do you long to find in a partner?",
                    photo_url: ""
                },
                {
                    id: 101,
                    category_id: 3,
                    question_string: "What should we perhaps all change about ourselves?",
                    photo_url: ""
                },
                {
                    id: 102,
                    category_id: 3,
                    question_string: "What was challenging about being a teenager?",
                    photo_url: ""
                },
                {
                    id: 103,
                    category_id: 3,
                    question_string: "What would you like to go back and correct in the past?",
                    photo_url: ""
                },
                {
                    id: 104,
                    category_id: 3,
                    question_string: "What could this family do better?",
                    photo_url: ""
                },
                {
                    id: 105,
                    category_id: 3,
                    question_string: "If you had to redesign some aspect of this family, what would it be?",
                    photo_url: ""
                },
                {
                    id: 106,
                    category_id: 3,
                    question_string: "How have you changed since you were five?",
                    photo_url: ""
                },
                {
                    id: 107,
                    category_id: 3,
                    question_string: "What negative thoughts do you have about yourself when you're down?",
                    photo_url: ""
                },
                {
                    id: 108,
                    category_id: 3,
                    question_string: "That time, you weren't mean or bad; tell me what was going on...",
                    photo_url: ""
                },
                {
                    id: 109,
                    category_id: 3,
                    question_string: "If you never improved one bit, I'd still...",
                    photo_url: ""
                },
                {
                    id: 110,
                    category_id: 3,
                    question_string: "What I don't tell you often enough is...",
                    photo_url: ""
                },
                {
                    id: 111,
                    category_id: 3,
                    question_string: "When I'm moody, it's often at heart because...",
                    photo_url: ""
                },
                {
                    id: 112,
                    category_id: 3,
                    question_string: "I'd love you to trust that...",
                    photo_url: ""
                },
                {
                    id: 113,
                    category_id: 3,
                    question_string: "I promise to be less defensive about...",
                    photo_url: ""
                },
                {
                    id: 114,
                    category_id: 3,
                    question_string: "What would you love to argue less about?",
                    photo_url: ""
                },
                {
                    id: 115,
                    category_id: 3,
                    question_string: "Describe the family you were jealous of when you were a child.",
                    photo_url: ""
                },
                {
                    id: 116,
                    category_id: 3,
                    question_string: "How would you like to evolve?",
                    photo_url: ""
                },
                {
                    id: 117,
                    category_id: 3,
                    question_string: "To whom have you been a bit too moody?",
                    photo_url: ""
                },
                {
                    id: 118,
                    category_id: 3,
                    question_string: "Who in this family cut you some slack, and when?",
                    photo_url: ""
                },
                {
                    id: 119,
                    category_id: 3,
                    question_string: "Thank someone in the family for something they did for you.",
                    photo_url: ""
                },
                {
                    id: 120,
                    category_id: 3,
                    question_string: "What little but touching effort did someone in this family make that you still remember?",
                    photo_url: ""
                },
                {
                    id: 121,
                    category_id: 3,
                    question_string: "In what ways do you feel grateful to your family?",
                    photo_url: ""
                },
                {
                    id: 122,
                    category_id: 3,
                    question_string: "What is your family rather good at?",
                    photo_url: ""
                },
                {
                    id: 123,
                    category_id: 3,
                    question_string: "What's especially endearing about someone in this family?",
                    photo_url: ""
                },
                {
                    id: 124,
                    category_id: 3,
                    question_string: "How are you a bad son / daughter?",
                    photo_url: ""
                },
                {
                    id: 125,
                    category_id: 3,
                    question_string: "What might your parents complain in you?",
                    photo_url: ""
                },
                {
                    id: 126,
                    category_id: 3,
                    question_string: "If you could go back in time, what would you like to alter about your childhood and adolescence?",
                    photo_url: ""
                },
                {
                    id: 127,
                    category_id: 3,
                    question_string: "What are your hopes for yourself for the next few years?",
                    photo_url: ""
                },
                {
                    id: 128,
                    category_id: 3,
                    question_string: "What would help this family achieve its full potential?",
                    photo_url: ""
                },
                {
                    id: 129,
                    category_id: 4,
                    question_string: "It's said that we worry about certain things to escape other, greater worries. What might these greater worries be for you?",
                    photo_url: ""
                },
                {
                    id: 130,
                    category_id: 4,
                    question_string: "What still embarrases you about your parents?",
                    photo_url: ""
                },
                {
                    id: 131,
                    category_id: 4,
                    question_string: "What positive things have you learnt from your family?",
                    photo_url: ""
                },
                {
                    id: 132,
                    category_id: 4,
                    question_string: "What are your worst sides as a son / daughter?",
                    photo_url: ""
                },
                {
                    id: 133,
                    category_id: 4,
                    question_string: "What are your worst sides as a parent?",
                    photo_url: ""
                },
                {
                    id: 134,
                    category_id: 4,
                    question_string: "What haven't you been able to tell a partner?",
                    photo_url: ""
                },
                {
                    id: 135,
                    category_id: 4,
                    question_string: "Have you ever planned out a life with someone you have only just met?",
                    photo_url: ""
                },
                {
                    id: 136,
                    category_id: 4,
                    question_string: "What values do you think we share?",
                    photo_url: ""
                },
                {
                    id: 137,
                    category_id: 4,
                    question_string: "What do you think you could teach me?",
                    photo_url: ""
                },
                {
                    id: 138,
                    category_id: 4,
                    question_string: "One thing you've tuaght me is...",
                    photo_url: ""
                },
                {
                    id: 139,
                    category_id: 4,
                    question_string: "I'd love to reassure you that...",
                    photo_url: ""
                },
                {
                    id: 140,
                    category_id: 4,
                    question_string: "What I particularly appreciate about you is...",
                    photo_url: ""
                },
                {
                    id: 141,
                    category_id: 4,
                    question_string: "A moment when I felt especially connected to you was when...",
                    photo_url: ""
                },
                {
                    id: 142,
                    category_id: 4,
                    question_string: "Describe a time when you had fun together in a silly, playful but very pleasing way.",
                    photo_url: ""
                },
                {
                    id: 143,
                    category_id: 4,
                    question_string: "I feel tenderly towards you when...",
                    photo_url: ""
                },
                {
                    id: 144,
                    category_id: 4,
                    question_string: "If I had to invent a new kindly nickname for you, I might call you...",
                    photo_url: ""
                },
                {
                    id: 145,
                    category_id: 4,
                    question_string: "What I really admire about you is...",
                    photo_url: ""
                },
                {
                    id: 146,
                    category_id: 4,
                    question_string: "In what ways are you not yet fully mature (none of us are)?",
                    photo_url: ""
                },
                {
                    id: 147,
                    category_id: 4,
                    question_string: "In what ways are we a great team?",
                    photo_url: ""
                },
                {
                    id: 148,
                    category_id: 4,
                    question_string: "What motivates you?",
                    photo_url: ""
                },
                {
                    id: 149,
                    category_id: 4,
                    question_string: "How might you like to keep growing emotionally?",
                    photo_url: ""
                },
                {
                    id: 150,
                    category_id: 4,
                    question_string: "What makes you sulk?",
                    photo_url: ""
                },
                {
                    id: 151,
                    category_id: 4,
                    question_string: "One thing that you need to keep in mind about my past is...",
                    photo_url: ""
                },
                {
                    id: 152,
                    category_id: 4,
                    question_string: "How has your past influenced your views on money?",
                    photo_url: ""
                },
                {
                    id: 153,
                    category_id: 4,
                    question_string: "How might your parents have let you down?",
                    photo_url: ""
                },
                {
                    id: 154,
                    category_id: 4,
                    question_string: "What influence did your mother and father's housekeeping roles have on you as an adult?",
                    photo_url: ""
                },
                {
                    id: 155,
                    category_id: 4,
                    question_string: "Who is the person you've treated the worst in love in the past?",
                    photo_url: ""
                },
                {
                    id: 156,
                    category_id: 4,
                    question_string: "What do you have trouble expressing in love?",
                    photo_url: ""
                },
                {
                    id: 157,
                    category_id: 4,
                    question_string: "How might you evolve in the way you express disappointment with a partner?",
                    photo_url: ""
                },
                {
                    id: 158,
                    category_id: 4,
                    question_string: "When was the last time you cried, and over what?",
                    photo_url: ""
                },
                {
                    id: 159,
                    category_id: 4,
                    question_string: "What mistakes - your parents' or those of other people you've observed - would you not want to repeat with your own children?",
                    photo_url: ""
                },
                {
                    id: 160,
                    category_id: 4,
                    question_string: "What weaknesses of yours do you want to find compensation for in a partner?",
                    photo_url: ""
                },
                {
                    id: 161,
                    category_id: 4,
                    question_string: "What are you trying to escape through your addictions?",
                    photo_url: ""
                },
                {
                    id: 162,
                    category_id: 4,
                    question_string: "What's the worst thing you've ever done out of anger?",
                    photo_url: ""
                },
                {
                    id: 163,
                    category_id: 4,
                    question_string: "What are your misgivings about marriage?",
                    photo_url: ""
                },
                {
                    id: 164,
                    category_id: 4,
                    question_string: "Have you ever been involved with more than one person at once?",
                    photo_url: ""
                },
                {
                    id: 165,
                    category_id: 4,
                    question_string: "How love-worthy do you feel, on a scale of 1-10?",
                    photo_url: ""
                },
                {
                    id: 166,
                    category_id: 4,
                    question_string: "How might you be too romantic for your own good? Or not romantic enough?",
                    photo_url: ""
                },
                {
                    id: 167,
                    category_id: 4,
                    question_string: "It makes me rather vulnerable to tell you this, but here goes...",
                    photo_url: ""
                },
                {
                    id: 168,
                    category_id: 4,
                    question_string: "How might you be a problematic parent?",
                    photo_url: ""
                },
                {
                    id: 169,
                    category_id: 4,
                    question_string: "Have you ever felt insecure about a partner's past relationships?",
                    photo_url: ""
                },
                {
                    id: 170,
                    category_id: 4,
                    question_string: "What secrest have you kept from a partner?",
                    photo_url: ""
                },
                {
                    id: 171,
                    category_id: 4,
                    question_string: "How do you like to feel comforted / reassured in love?",
                    photo_url: ""
                },
                {
                    id: 172,
                    category_id: 4,
                    question_string: "How would you like to develop as a partner?",
                    photo_url: ""
                },
                {
                    id: 173,
                    category_id: 4,
                    question_string: "What elements of your mother do you find cropping up in your relationships?",
                    photo_url: ""
                },
                {
                    id: 174,
                    category_id: 4,
                    question_string: "How much money would you need to feel totally safe?",
                    photo_url: ""
                },
                {
                    id: 175,
                    category_id: 4,
                    question_string: "What would you love to ask me but don't quite dare?",
                    photo_url: ""
                },
                {
                    id: 176,
                    category_id: 4,
                    question_string: "I think my best qualities are...",
                    photo_url: ""
                },
                {
                    id: 177,
                    category_id: 4,
                    question_string: "When I'm exhausted and need to recover, what I need from you is...",
                    photo_url: ""
                },
                {
                    id: 178,
                    category_id: 4,
                    question_string: "What turns you on about your partner?",
                    photo_url: ""
                },
                {
                    id: 179,
                    category_id: 4,
                    question_string: "How would you like to come back together at the end of everyday? Describe it in detail.",
                    photo_url: ""
                },
                {
                    id: 180,
                    category_id: 4,
                    question_string: "How have I let you down?",
                    photo_url: ""
                },
                {
                    id: 181,
                    category_id: 4,
                    question_string: "I rather like it when you tease me affectionately about...",
                    photo_url: ""
                },
                {
                    id: 182,
                    category_id: 4,
                    question_string: "What do you need me to remember about where you've come from?",
                    photo_url: ""
                },
                {
                    id: 183,
                    category_id: 4,
                    question_string: "In what ways are we trying, in our present, to change the patterns of the past?",
                    photo_url: ""
                },
                {
                    id: 184,
                    category_id: 4,
                    question_string: "How do you think we could make our relationship more surprising?",
                    photo_url: ""
                },
                {
                    id: 185,
                    category_id: 4,
                    question_string: "I need you to be especially generous about...",
                    photo_url: ""
                }
            ]);
        })
};

exports.down = function(knex) {
    return knex.schema.dropTable("question")
};