exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('user_table').del()
        .then(function() {
            // Inserts seed entries
            return knex('user_table').insert([{
                    id: 1,
                    email: "ryan@bu.edu",
                    password: "cheung",
                    spotify_id: "",
                    spotify_access_token: ""
                },
                {
                    id: 2,
                    email: "lesley@bu.edu",
                    password: "cheung",
                    spotify_id: "",
                    spotify_access_token: ""
                },
                {
                    id: 3,
                    email: "robert@bu.edu",
                    password: "cheung",
                    spotify_id: "",
                    spotify_access_token: ""
                }
            ]);
        });
};