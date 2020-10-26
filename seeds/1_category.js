exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('category').del()
        .then(function() {
            // Inserts seed entries
            return knex('category').insert([{
                    id: 1,
                    name: "Friends"
                },
                {
                    id: 2,
                    name: "Work"
                },
                {
                    id: 3,
                    name: "Family"
                },
                {
                    id: 4,
                    name: "Love"
                }
            ]);
        });
};