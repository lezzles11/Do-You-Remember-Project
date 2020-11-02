/**********************************************
 * This handles the addFriend.handlebars page
 * -- Take it slow, homie. IT will takes a while!! --
 * ==================================
 * 1. [ ] First, I want to check if upon submission of the add friend button, the email and password is captured in the javascript file
 * 2. It will ultimately be sent through axios, which will send it to the backend (axios makes requests from the browser
 *  Fun Fact: The "("/api/user", function (request, response) { app.post... })" seen in express correlates with the axios.post method - it also helps us automatically transform data into and from JSON
 * 3. [ ] I want to also write the jquery / axios - and make sure that the add friend route, and the handlebars route is the same (really important to check the variables here)
 * 4. [ ] When I start the server, I want to make sure the form submission works (can I see the data? Check postgres here)
 * 5. [ ] Write the test required! :D
 * 6.
 ***********************************************/

/**********************************************
 *  Create an event handler ->
 * ==================================
 * 1. Grab the inputs
 * 2. Serialize into an object
 * 3. Push the two pieces of data into formOutput, which is an object that you will pass into axios
 * 4. ajax and submit into the data
 * 5. reset all values
 ***********************************************/
$("#addFriendForm").on("submit", function (event) {
    event.preventDefault();
    let sendToServer = $("#addFriendForm").serializeArray();
    let name = $("#name").val();
    let emoji = $("#emoji").val();
    let wishfulCity = $("#wishfulCity").val();
    let favoriteMemory = $("#favoriteMemory").val();
    console.log("Data: ", sendToServer);
    let friend = {
        name: name,
        emoji: emoji,
        wishfulCity: wishfulCity,
        favoriteMemory: favoriteMemory,
        questions: [],
    };
    sendToServer.push(friend);
    console.log("Sending friend to server: ", sendToServer);

    $.ajax({
        type: "POST",
        url: "/api/friends/addFriend",
        data: sendToServer,
        success: function () {
            console.log("data sent!");
            $("#name").val("");
            $("#emoji").val("");
            $("#wishfulCity").val("");
            $("#favoriteMemory").val("");
            location.replace("http://localhost:3000/");
        },
        error: function (error) {
            console.log("An error occurred in your form submit handler");
            console.log("The error is here: ", error);
        },
    });
});
