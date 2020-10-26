exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('user_friend').del()
        .then(function() {
            // Inserts seed entries
            return knex('user_friend').insert([{
                    id: 1,
                    user_id: 1,
                    name: "Sam",
                    emoji: "Friend",
                    wishful_city: "Cool person",
                    favorite_memory: ""
                },
                {
                    id: 2,
                    user_id: 2,
                    name: "Sam Poon",
                    emoji: "",
                    wishful_city: "Cool person",
                    favorite_memory: ""
                },
                {
                    id: 3,
                    user_id: 3,
                    name: "Sam Ng",
                    emoji: "",
                    wishful_city: "Cool person",
                    favorite_memory: ""
                }
            ]);
        });
};