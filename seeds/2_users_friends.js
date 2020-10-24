exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users_friends').del()
        .then(function() {
            // Inserts seed entries
            return knex('users_friends').insert([{
                    id: 1,
                    user_id: 1,
                    name: "Sam",
                    relation: "Friend",
                    description: "Cool person"
                },
                {
                    id: 2,
                    user_id: 2,
                    name: "Sam Poon",
                    relation: "Family",
                    description: "Another cool person"
                },
                {
                    id: 3,
                    user_id: 3,
                    name: "Sam Ng",
                    relation: "Family",
                    description: "Another really cool person"
                }
            ]);
        });
};