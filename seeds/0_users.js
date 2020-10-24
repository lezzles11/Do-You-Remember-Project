exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function() {
            // Inserts seed entries
            return knex('users').insert([{
                    id: 1,
                    username: "ryan",
                    password: "cheung",
                    email: "ryan@bu.edu",
                    spotify_id: "",
                    spotify_access_token: ""
                },
                {
                    id: 2,
                    username: "lesley",
                    password: "cheung",
                    email: "lesley@bu.edu",
                    spotify_id: "",
                    spotify_access_token: ""
                },
                {
                    id: 3,
                    username: "robert",
                    password: "cheung",
                    email: "robert@bu.edu",
                    spotify_id: "",
                    spotify_access_token: ""
                }
            ]);
        });
};