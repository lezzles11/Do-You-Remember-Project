/**********************************************
 *  Create an event handler -> 
 * ==================================
 * 1. Grab the inputs
 * 2. Serialize into an object
 * 3. Push the two pieces of data into formOutput, which is an object that you will pass into axios 
 * 4. ajax and submit into the data 
 * 5. reset all values 
 ***********************************************/

$("#addFriendForm").on("submit", function(event) {
    event.preventDefault();
    let sendToServer = $("#addFriendForm").serializeArray()
    let name = $("#name").val()
    let emoji = $("#emoji").val()
    let wishfulCity = $("#wishfulCity").val()
    let favoriteMemory = $("#favoriteMemory").val()
    console.log("Data: ", sendToServer)
    let friend = {
        name: name,
        emoji: emoji,
        wishfulCity: wishfulCity,
        favoriteMemory: favoriteMemory,
        questions: []
    }
    sendToServer.push(friend)
    console.log("Sending friend to server: ", sendToServer)

    $.ajax({
        type: "POST",
        url: "/api/friends/addfriend",
        data: sendToServer,
        success: function() {
            console.log("data sent!")
            $("#name").val("")
            $("#emoji").val("")
            $("#wishfulCity").val("")
            $("#favoriteMemory").val("")
            location.replace("http://localhost:3000/")
        },
        error: function(error) {
            console.log("An error occurred in your form submit handler")
            console.log("The error is here: ", error)
        }

    })



})