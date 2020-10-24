exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users_fav_questions').del()
        .then(function() {
            // Inserts seed entries
            return knex('users_fav_questions').insert([{
                    id: 1,
                    user_id: 1,
                    question_id: 1
                },
                {
                    id: 2,
                    user_id: 2,
                    question_id: 2
                },
                {
                    id: 3,
                    user_id: 3,
                    question_id: 3
                }
            ]);
        });
};