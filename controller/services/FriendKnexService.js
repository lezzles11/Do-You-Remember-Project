/**********************************************
 * Services and Controllers 
 * ==================================
 * Services handle the database - the purpose of this class is to be able to add, edit, delete and get the user from the database 
 * 
 * 1. Connect the routes 
 * 2. Grab input from frontend
 * 3. Add / edit / delete data from backend accordingly 
 ***********************************************/
let table = "user_friend"
let col1 = "name"
let col2 = "emoji"
let col3 = "wishful_city"
let col4 = "favorite_memory"

let insertFriendObject = {
    id: 4,
    user_id: 1,
    name: "Janice",
    emoji: "yoga",
    wishful_city: "Barcelona",
    favorite_memory: "Going to yoga together"
}
let replaceFriendObject = {
    id: 5,
    user_id: 2,
    name: "Genny",
    emoji: "cousin",
    wishful_city: "denmark",
    favorite_memory: "hanging out as kids writing weird stories"
}



class FriendControllerKnex {
    constructor(knex) {
        this.knex = knex;
    }
    /**********************************************
     * List out all friends
     * ==================================
     * 1. Grab user
     * 2. Map out all friends 
     ***********************************************/
    getAllFriendsService(user) {
        let getAllObjectsQuery = knex.from(table).select(col1, col2, col3, col4)

    }
    /**********************************************
     * Will add data to the user_friend table
     * ==================================
     * 1. Query for user 
     * 2. Insert friend 
     ***********************************************/
    addFriendService(friend, user) {
        let insertObjectQuery = knex(table).insert(insertFriendObject)
    }
    getFriendService(friendId, user) {
        let getObjectByIdQuery = knex.from(table).where("id", 1)
    }
    /**********************************************
     * Update Friend 
     * ==================================
     * 1. Grab user
     * 2. Grab friend, then replace friend with updated friend
     ***********************************************/
    editFriendService(friendId, friend, user) {
        // grab user friend 
        let editQuery = knex(table).where({
            id: 4
        }).update(replaceFriendObject)
    }
    /**********************************************
     * Remove Friend 
     * ==================================
     * 1. Grab user
     * 2. Grab the id of the friend
     * 3. Delete the friend  
     ***********************************************/
    deleteFriendService(friendId, user) {
        let deleteQuery = knex(table).where({
            id: friendId
        }).del()

    }
}