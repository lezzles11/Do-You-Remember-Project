exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('user_fav_question').del()
        .then(function() {
            // Inserts seed entries
            return knex('user_fav_question').insert([{
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