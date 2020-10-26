exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('category').del()
        .then(function() {
            // Inserts seed entries
            return knex('category').insert([{
                    id: 1,
                    category: "Friends"
                },
                {
                    id: 2,
                    category: "Work"
                },
                {
                    id: 3,
                    category: "Family"
                },
                {
                    id: 4,
                    category: "Love"
                }
            ]);
        });
};