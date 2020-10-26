USER TABLE
```
exports.up = function(knex) {
    return knex.schema.createTable("user", (table) => {
        table.increments()
        table.string("email")
        table.string("password")
        table.string("spotify_id")
        table.string("spotify_access_token")
        table.timestamps(false, true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("user")
};
```

USER_FRIEND TABLE
```
exports.up = function(knex) {
    return knex.schema.createTable("user_friend", (table) => {
        table.increments()
        table.integer("user_id").unsigned()
        table.foreign("user_id").references("users.id")
        table.string("name")
        table.string("emoji")
        table.string("wishful_city")
        table.string("favorite_memory")
        table.timestamps(false, true)
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("user_friend")
};
```

SEED FILES
```
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
```

CATEGORY table 
```
exports.up = function(knex) {
    return knex.schema.createTable("category", (table) => {
        table.increments()
        table.string("name")
        table.timestamps(false, true);
    })
};
exports.down = function(knex) {
    return knex.schema.dropTable("category")
};
```

SEED
```
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
```
QUESTION TABLE
exports.up = function(knex) {
    return knex.schema.createTable("question", (table) => {
        table.increments()
        table.integer("category_id").unsigned()
        table.foreign("category_id").references("categories.id")
        table.string("question_string")
        table.string("photo_url")
        table.timestamps(false, true);

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("question")
};

USER_FRIEND_ALL_QUESTIONS 

exports.up = function(knex) {
    return knex.schema.createTable("user_friend_all_questions", (table) => {
        table.increments()
        table.integer("user_id").unsigned()
        table.foreign("user_id").references("users.id")
        table.integer("user_friend_id").unsigned()
        table.foreign("user_friend_id").references("user_friend.id")
        table.integer("question_id").unsigned()
        table.foreign("question_id").references("questions.id")
        table.boolean("answered")
        table.timestamps(false, true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("user_friend_all_questions")
};

// USER_FAV_QUESTION 

exports.up = function(knex) {
    return knex.schema.createTable("user_fav_question", (table) => {
        table.increments()
        table.integer("user_id").unsigned()
        table.foreign("user_id").references("users.id")
        table.integer("question_id").unsigned()
        table.foreign("question_id").references("questions.id")
        table.timestamps(false, true);
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("user_fav_question")
};

