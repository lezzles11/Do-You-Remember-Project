exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('questions').del()
        .then(function() {
            // Inserts seed entries
            return knex('questions').insert([{
                    id: 1,
                    category_id: 1,
                    question: "If you could alter something about a parent, what would it be?"
                },
                {
                    id: 2,
                    category_id: 1,
                    question: "How have you changed over the past few years?"
                },
                {
                    id: 3,
                    category_id: 1,
                    question: "The trick to understanding why I can sometimes be difficult is to remember that..."
                },
                {
                    id: 4,
                    category_id: 1,
                    question: "In what ways do you disagree with your society's standard views on sex?"
                },
                {
                    id: 5,
                    category_id: 1,
                    question: "What are the bad things you learnt from your mother? And your father?"
                },
                {
                    id: 6,
                    category_id: 1,
                    question: "What would you want to reassure the child version of yourself about?"
                },
                {
                    id: 7,
                    category_id: 1,
                    question: "What would need to happen for us all to spend more time together?"
                },
                {
                    id: 8,
                    category_id: 1,
                    question: "How have you let your parents down?"
                },
                {
                    id: 9,
                    category_id: 1,
                    question: "What bit of you did your parents never understand?"
                },
                {
                    id: 10,
                    category_id: 1,
                    question: "Has anything from your childhood made you very anxious?"
                },
                {
                    id: 11,
                    category_id: 1,
                    question: "How do you disappoint yourself?"
                },
                {
                    id: 12,
                    category_id: 1,
                    question: "What kinds of problems would you (almost) like an ideal lover to have?"
                },
                {
                    id: 13,
                    category_id: 1,
                    question: "Describe how your current (or past) partner resembles one of your parents."
                },
                {
                    id: 14,
                    category_id: 1,
                    question: "Explain why you might feel reluctant to show off a new partner to friends or family."
                },
                {
                    id: 15,
                    category_id: 1,
                    question: "What romantic gesture / overture are you now quite embarrassed to think about?"
                },
                {
                    id: 16,
                    category_id: 1,
                    question: "Have you ever had an unhealthy attachment to someone?"
                },
                {
                    id: 17,
                    category_id: 1,
                    question: "If you decided not to continue dating someone, how would you end the relationship?"
                },
                {
                    id: 18,
                    category_id: 1,
                    question: "Who was the first person to break your heart?"
                },
                {
                    id: 19,
                    category_id: 1,
                    question: "What might your family blame you for?"
                },
                {
                    id: 20,
                    category_id: 1,
                    question: "As an adult, do you squabble with your siblings? How?"
                },
                {
                    id: 21,
                    category_id: 1,
                    question: "How does your dependence on (or independence from) your parents affect your relationship with them?"
                },
                {
                    id: 22,
                    category_id: 1,
                    question: "Have you ever had a crush on someone rather too senior or junior for you?"
                },
                {
                    id: 23,
                    category_id: 1,
                    question: "What causes your anxieties? How do you overcome them?"
                },
                {
                    id: 24,
                    category_id: 1,
                    question: "Have you ever struggled to get over a partner?"
                },
                {
                    id: 25,
                    category_id: 1,
                    question: "What values do you have that your parents don't?"
                },
                {
                    id: 26,
                    category_id: 1,
                    question: "Who do you blame for the state of your career, aside from yourself?"
                },
                {
                    id: 27,
                    category_id: 1,
                    question: "What matters to you when choosing friends?"
                },
                {
                    id: 28,
                    category_id: 1,
                    question: "Ten years from now, how would you like to have changed?"
                },
                {
                    id: 29,
                    category_id: 1,
                    question: "What I'd love to change about myself is..."
                },
                {
                    id: 30,
                    category_id: 1,
                    question: "What do you wish you could go back and correct?"
                },
                {
                    id: 31,
                    category_id: 1,
                    question: "What would need to change for you to feel less anxious?"
                },
                {
                    id: 32,
                    category_id: 1,
                    question: "What did you learn about relationships from your parents?"
                },
                {
                    id: 33,
                    category_id: 1,
                    question: "What would you like to learn from me? How could I help you?"
                },
                {
                    id: 34,
                    category_id: 1,
                    question: "Looking back, what were you angry with your parents about?"
                },
                {
                    id: 35,
                    category_id: 1,
                    question: "How might your parents strictness / permissiveness influence your future parenting styles / methods?"
                },
                {
                    id: 36,
                    category_id: 1,
                    question: "What might you not want your employers to learn about your behavior outside of work?"
                },
                {
                    id: 37,
                    category_id: 1,
                    question: "Who do you need to impress?"
                },
                {
                    id: 38,
                    category_id: 1,
                    question: "What negative thought do you worry your friends have about you?"
                },
                {
                    id: 39,
                    category_id: 1,
                    question: "What part of you do you feel needs the most work?"
                },
                {
                    id: 40,
                    category_id: 1,
                    question: "What do the negative voices in your head focus on when they criticize you?"
                },
                {
                    id: 41,
                    category_id: 1,
                    question: "Do you think you have changed your own behavior or character during a relationship?"
                },
                {
                    id: 42,
                    category_id: 1,
                    question: "How has your past hindered you in the present?"
                },
                {
                    id: 43,
                    category_id: 1,
                    question: "Who makes you envious? What might the envy tell you about your own aspirations?"
                },
                {
                    id: 44,
                    category_id: 1,
                    question: "What kinds of mature qualities do you particularly admire in other people?"
                },
                {
                    id: 45,
                    category_id: 1,
                    question: "What do you fear in social contexts?"
                },
                {
                    id: 46,
                    category_id: 1,
                    question: "What do you worry that others might think?"
                },
                {
                    id: 47,
                    category_id: 1,
                    question: "In what ways have you disappointed your parents?"
                },
                {
                    id: 48,
                    category_id: 1,
                    question: "What unfortunate character trait can be traced back directly to something in your past?"
                },
                {
                    id: 49,
                    category_id: 1,
                    question: "What book made a big impression on you?"
                },
                {
                    id: 50,
                    category_id: 1,
                    question: "When have you felt lonely?"
                },
                {
                    id: 51,
                    category_id: 1,
                    question: "What are the ideal conditions for a get-together?"
                },
                {
                    id: 52,
                    category_id: 2,
                    question: "What small changes could you make to move your life in a better direction, work-wise?"
                },
                {
                    id: 53,
                    category_id: 2,
                    question: "What is the world far too judgmental about? Draw the discussion back to yourself, too."
                },
                {
                    id: 54,
                    category_id: 2,
                    question: "Think of something you admire. Without naming them, try to describe what impresses you about them."
                },
                {
                    id: 55,
                    category_id: 2,
                    question: "Tell us about one of your good old friends: what do you like about them?"
                },
                {
                    id: 56,
                    category_id: 2,
                    question: "What would you like more regularly to be appreciated for?"
                },
                {
                    id: 57,
                    category_id: 2,
                    question: "What do you still want to achieve in life?"
                },
                {
                    id: 58,
                    category_id: 2,
                    question: "What thoughts do you experience when you start to panic at work?"
                },
                {
                    id: 59,
                    category_id: 2,
                    question: "Have you had an experience that might have contributed to your prejudices?"
                },
                {
                    id: 60,
                    category_id: 2,
                    question: "Who would you want to impress, if you had lots of money?"
                },
                {
                    id: 61,
                    category_id: 2,
                    question: "Where are you most an imposter?"
                },
                {
                    id: 62,
                    category_id: 2,
                    question: "What could you have done with a bit more luck and encouragement?"
                },
                {
                    id: 63,
                    category_id: 2,
                    question: "In what ways are you tricky to work with (we all are)? What could you do to improve or resolve this?"
                },
                {
                    id: 64,
                    category_id: 2,
                    question: "What makes you particularly happy?"
                },
                {
                    id: 65,
                    category_id: 2,
                    question: "Do you ever feel as if you don't deserve your success?"
                },
                {
                    id: 66,
                    category_id: 2,
                    question: "In what ways do you underperform at work?"
                },
                {
                    id: 67,
                    category_id: 2,
                    question: "What's the biggest mistake you've ever made at work?"
                },
                {
                    id: 68,
                    category_id: 2,
                    question: "In what ways might your choice (money or job satisfaction) be causing you difficulties in life?"
                },
                {
                    id: 69,
                    category_id: 2,
                    question: "What's preventing you from acting on your dreams?"
                },
                {
                    id: 70,
                    category_id: 2,
                    question: "How do your personal values align with your current role?"
                },
                {
                    id: 71,
                    category_id: 2,
                    question: "If you were the head of an organization, would you prioritize employee happiness over profit?"
                },
                {
                    id: 72,
                    category_id: 2,
                    question: "What sets off your tendency to procrastinate?"
                },
                {
                    id: 73,
                    category_id: 2,
                    question: "Describe the worst boss you've ever had."
                },
                {
                    id: 74,
                    category_id: 2,
                    question: "What are the negative characteristics you've inherited from your family?"
                },
                {
                    id: 75,
                    category_id: 2,
                    question: "Have you ever felt jealous of a sibling?"
                },
                {
                    id: 76,
                    category_id: 2,
                    question: "What would you like to be reassured about?"
                },
                {
                    id: 77,
                    category_id: 2,
                    question: "What scares you about other people?"
                },
                {
                    id: 78,
                    category_id: 2,
                    question: "Describe the very worst that could happen if things you are worried about came to pass. How could they be survived?"
                },
                {
                    id: 79,
                    category_id: 2,
                    question: "What kind of people most irritate you at work? Can you notice any patterns?"
                },
                {
                    id: 80,
                    category_id: 2,
                    question: "What are the ideal conditions for a work get-together?"
                },
                {
                    id: 81,
                    category_id: 2,
                    question: "In what ways do you feel grateful to your team?"
                },
                {
                    id: 82,
                    category_id: 2,
                    question: "What is your team rather good at?"
                },
                {
                    id: 83,
                    category_id: 2,
                    question: "What would help this team achieve its full potential?"
                },
                {
                    id: 84,
                    category_id: 2,
                    question: "If you had to redesign some aspect of this company, what would it be?"
                },
                {
                    id: 85,
                    category_id: 2,
                    question: "What little but touching effort did someone in the company make that you still remember?"
                },
                {
                    id: 86,
                    category_id: 2,
                    question: "What might your colleagues be surprised to learn about you?"
                },
                {
                    id: 87,
                    category_id: 3,
                    question: "What remains to be achieved?"
                },
                {
                    id: 88,
                    category_id: 3,
                    question: "If you were braver, what would you be doing with your life?"
                },
                {
                    id: 89,
                    category_id: 3,
                    question: "I'd love you not to laugh if I told you that one of my secret aspirations is..."
                },
                {
                    id: 90,
                    category_id: 3,
                    question: "What do you want more of in your life in the time that remains?"
                },
                {
                    id: 91,
                    category_id: 3,
                    question: "What smells, foods, textures, lights or scenes carry you back to the past in a particularly vivid way?"
                },
                {
                    id: 92,
                    category_id: 3,
                    question: "What interests that you had in the past still live on in the adult you?"
                },
                {
                    id: 93,
                    category_id: 3,
                    question: "If you could go back and reassure the younger you abotu something, what would it be?"
                },
                {
                    id: 94,
                    category_id: 3,
                    question: "What are the ideal conditions for a family get-together?"
                },
                {
                    id: 95,
                    category_id: 3,
                    question: "How might the child in you be disappointed by your life as an adult?"
                },
                {
                    id: 96,
                    category_id: 3,
                    question: "The key to understanding me is to remember that..."
                },
                {
                    id: 97,
                    category_id: 3,
                    question: "What are the good things you learnt from your mother? And your father?"
                },
                {
                    id: 98,
                    category_id: 3,
                    question: "What are some sources of sadness in your life?"
                },
                {
                    id: 99,
                    category_id: 3,
                    question: "What would you like to stop being cross about?"
                },
                {
                    id: 100,
                    category_id: 3,
                    question: "What qualities do you long to find in a partner?"
                },
                {
                    id: 101,
                    category_id: 3,
                    question: "What should we perhaps all change about ourselves?"
                },
                {
                    id: 102,
                    category_id: 3,
                    question: "What was challenging about being a teenager?"
                },
                {
                    id: 103,
                    category_id: 3,
                    question: "What would you like to go back and correct in the past?"
                },
                {
                    id: 104,
                    category_id: 3,
                    question: "What could this family do better?"
                },
                {
                    id: 105,
                    category_id: 3,
                    question: "If you had to redesign some aspect of this family, what would it be?"
                },
                {
                    id: 106,
                    category_id: 3,
                    question: "How have you changed since you were five?"
                },
                {
                    id: 107,
                    category_id: 3,
                    question: "What negative thoughts do you have about yourself when you're down?"
                },
                {
                    id: 108,
                    category_id: 3,
                    question: "That time, you weren't mean or bad; tell me what was going on..."
                },
                {
                    id: 109,
                    category_id: 3,
                    question: "If you never improved one bit, I'd still..."
                },
                {
                    id: 110,
                    category_id: 3,
                    question: "What I don't tell you often enough is..."
                },
                {
                    id: 111,
                    category_id: 3,
                    question: "When I'm moody, it's often at heart because..."
                },
                {
                    id: 112,
                    category_id: 3,
                    question: "I'd love you to trust that..."
                },
                {
                    id: 113,
                    category_id: 3,
                    question: "I promise to be less defensive about..."
                },
                {
                    id: 114,
                    category_id: 3,
                    question: "What would you love to argue less about?"
                },
                {
                    id: 115,
                    category_id: 3,
                    question: "Describe the family you were jealous of when you were a child."
                },
                {
                    id: 116,
                    category_id: 3,
                    question: "How would you like to evolve?"
                },
                {
                    id: 117,
                    category_id: 3,
                    question: "To whom have you been a bit too moody?"
                },
                {
                    id: 118,
                    category_id: 3,
                    question: "Who in this family cut you some slack, and when?"
                },
                {
                    id: 119,
                    category_id: 3,
                    question: "Thank someone in the family for something they did for you."
                },
                {
                    id: 120,
                    category_id: 3,
                    question: "What little but touching effort did someone in this family make that you still remember?"
                },
                {
                    id: 121,
                    category_id: 3,
                    question: "In what ways do you feel grateful to your family?"
                },
                {
                    id: 122,
                    category_id: 3,
                    question: "What is your family rather good at?"
                },
                {
                    id: 123,
                    category_id: 3,
                    question: "What's especially endearing about someone in this family?"
                },
                {
                    id: 124,
                    category_id: 3,
                    question: "How are you a bad son / daughter?"
                },
                {
                    id: 125,
                    category_id: 3,
                    question: "What might your parents complain in you?"
                },
                {
                    id: 126,
                    category_id: 3,
                    question: "If you could go back in time, what would you like to alter about your childhood and adolescence?"
                },
                {
                    id: 127,
                    category_id: 3,
                    question: "What are your hopes for yourself for the next few years?"
                },
                {
                    id: 128,
                    category_id: 3,
                    question: "What would help this family achieve its full potential?"
                },
                {
                    id: 129,
                    category_id: 4,
                    question: "It's said that we worry about certain things to escape other, greater worries. What might these greater worries be for you?"
                },
                {
                    id: 130,
                    category_id: 4,
                    question: "What still embarrases you about your parents?"
                },
                {
                    id: 131,
                    category_id: 4,
                    question: "What positive things have you learnt from your family?"
                },
                {
                    id: 132,
                    category_id: 4,
                    question: "What are your worst sides as a son / daughter?"
                },
                {
                    id: 133,
                    category_id: 4,
                    question: "What are your worst sides as a parent?"
                },
                {
                    id: 134,
                    category_id: 4,
                    question: "What haven't you been able to tell a partner?"
                },
                {
                    id: 135,
                    category_id: 4,
                    question: "Have you ever planned out a life with someone you have only just met?"
                },
                {
                    id: 136,
                    category_id: 4,
                    question: "What values do you think we share?"
                },
                {
                    id: 137,
                    category_id: 4,
                    question: "What do you think you could teach me?"
                },
                {
                    id: 138,
                    category_id: 4,
                    question: "One thing you've tuaght me is..."
                },
                {
                    id: 139,
                    category_id: 4,
                    question: "I'd love to reassure you that..."
                },
                {
                    id: 140,
                    category_id: 4,
                    question: "What I particularly appreciate about you is..."
                },
                {
                    id: 141,
                    category_id: 4,
                    question: "A moment when I felt especially connected to you was when..."
                },
                {
                    id: 142,
                    category_id: 4,
                    question: "Describe a time when you had fun together in a silly, playful but very pleasing way."
                },
                {
                    id: 143,
                    category_id: 4,
                    question: "I feel tenderly towards you when..."
                },
                {
                    id: 144,
                    category_id: 4,
                    question: "If I had to invent a new kindly nickname for you, I might call you..."
                },
                {
                    id: 145,
                    category_id: 4,
                    question: "What I really admire about you is..."
                },
                {
                    id: 146,
                    category_id: 4,
                    question: "In what ways are you not yet fully mature (none of us are)?"
                },
                {
                    id: 147,
                    category_id: 4,
                    question: "In what ways are we a great team?"
                },
                {
                    id: 148,
                    category_id: 4,
                    question: "What motivates you?"
                },
                {
                    id: 149,
                    category_id: 4,
                    question: "How might you like to keep growing emotionally?"
                },
                {
                    id: 150,
                    category_id: 4,
                    question: "What makes you sulk?"
                },
                {
                    id: 151,
                    category_id: 4,
                    question: "One thing that you need to keep in mind about my past is..."
                },
                {
                    id: 152,
                    category_id: 4,
                    question: "How has your past influenced your views on money?"
                },
                {
                    id: 153,
                    category_id: 4,
                    question: "How might your parents have let you down?"
                },
                {
                    id: 154,
                    category_id: 4,
                    question: "What influence did your mother and father's housekeeping roles have on you as an adult?"
                },
                {
                    id: 155,
                    category_id: 4,
                    question: "Who is the person you've treated the worst in love in the past?"
                },
                {
                    id: 156,
                    category_id: 4,
                    question: "What do you have trouble expressing in love?"
                },
                {
                    id: 157,
                    category_id: 4,
                    question: "How might you evolve in the way you express disappointment with a partner?"
                },
                {
                    id: 158,
                    category_id: 4,
                    question: "When was the last time you cried, and over what?"
                },
                {
                    id: 159,
                    category_id: 4,
                    question: "What mistakes - your parents' or those of other people you've observed - would you not want to repeat with your own children?"
                },
                {
                    id: 160,
                    category_id: 4,
                    question: "What weaknesses of yours do you want to find compensation for in a partner?"
                },
                {
                    id: 161,
                    category_id: 4,
                    question: "What are you trying to escape through your addictions?"
                },
                {
                    id: 162,
                    category_id: 4,
                    question: "What's the worst thing you've ever done out of anger?"
                },
                {
                    id: 163,
                    category_id: 4,
                    question: "What are your misgivings about marriage?"
                },
                {
                    id: 164,
                    category_id: 4,
                    question: "Have you ever been involved with more than one person at once?"
                },
                {
                    id: 165,
                    category_id: 4,
                    question: "How love-worthy do you feel, on a scale of 1-10?"
                },
                {
                    id: 166,
                    category_id: 4,
                    question: "How might you be too romantic for your own good? Or not romantic enough?"
                },
                {
                    id: 167,
                    category_id: 4,
                    question: "It makes me rather vulnerable to tell you this, but here goes..."
                },
                {
                    id: 168,
                    category_id: 4,
                    question: "How might you be a problematic parent?"
                },
                {
                    id: 169,
                    category_id: 4,
                    question: "Have you ever felt insecure about a partner's past relationships?"
                },
                {
                    id: 170,
                    category_id: 4,
                    question: "What secrest have you kept from a partner?"
                },
                {
                    id: 171,
                    category_id: 4,
                    question: "How do you like to feel comforted / reassured in love?"
                },
                {
                    id: 172,
                    category_id: 4,
                    question: "How would you like to develop as a partner?"
                },
                {
                    id: 173,
                    category_id: 4,
                    question: "What elements of your mother do you find cropping up in your relationships?"
                },
                {
                    id: 174,
                    category_id: 4,
                    question: "How much money would you need to feel totally safe?"
                },
                {
                    id: 175,
                    category_id: 4,
                    question: "What would you love to ask me but don't quite dare?"
                },
                {
                    id: 176,
                    category_id: 4,
                    question: "I think my best qualities are..."
                },
                {
                    id: 177,
                    category_id: 4,
                    question: "When I'm exhausted and need to recover, what I need from you is..."
                },
                {
                    id: 178,
                    category_id: 4,
                    question: "What turns you on about your partner?"
                },
                {
                    id: 179,
                    category_id: 4,
                    question: "How would you like to come back together at the end of everyday? Describe it in detail."
                },
                {
                    id: 180,
                    category_id: 4,
                    question: "How have I let you down?"
                },
                {
                    id: 181,
                    category_id: 4,
                    question: "I rather like it when you tease me affectionately about..."
                },
                {
                    id: 182,
                    category_id: 4,
                    question: "What do you need me to remember about where you've come from?"
                },
                {
                    id: 183,
                    category_id: 4,
                    question: "In what ways are we trying, in our present, to change the patterns of the past?"
                },
                {
                    id: 184,
                    category_id: 4,
                    question: "How do you think we could make our relationship more surprising?"
                },
                {
                    id: 185,
                    category_id: 4,
                    question: "I need you to be especially generous about..."
                }
            ]);
        });
};