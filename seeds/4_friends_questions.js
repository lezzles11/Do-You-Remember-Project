exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('friends_questions').del()
        .then(function() {
            // Inserts seed entries
            return knex('friends_questions').insert([{
                    id: 1,
                    user_id: 1,
                    users_friends_id: 1,
                    question_id: 1,
                    answered: true
                },
                {
                    id: 2,
                    user_id: 2,
                    users_friends_id: 2,
                    question_id: 2,
                    answered: true
                },
                {
                    id: 3,
                    user_id: 3,
                    users_friends_id: 3,
                    question_id: 3,
                    answered: true
                }
            ]);
        });
};