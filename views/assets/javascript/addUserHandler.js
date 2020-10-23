    /**********************************************
     *  Create an event handler -> 
     * ==================================
     * 1. Grab the inputs
     * 2. Serialize into an object
     * 3. Push the two pieces of data into formOutput, which is an object that you will pass into axios 
     * 4. ajax and submit into the data 
     * 5. reset all values 
     ***********************************************/
    // $("#addUserButton").on("click", function(event) {
    //     event.preventDefault()
    //     console.log("Sign up button clicked!")
    //     let password = $("#password").val()
    //     console.log("can get password value: ", password)
    // })
    $("#addUserForm").on("submit", function(event) {
        console.log("Clicked!")
        event.preventDefault();
        let sendToServer = $("#addUserForm").serializeArray()
        let password = $("#password").val()
        let username = $("#username").val()
        console.log("Username: ", username)
        console.log("Password: ", password)
        console.log("Data: ", sendToServer)
        let userObject = {
            username: username,
            password: password,
        }
        sendToServer.push(userObject)
        console.log("Sending friend to server: ", sendToServer)

        $.ajax({
            type: "POST",
            url: "/api/users/addUser",
            data: sendToServer,
            success: function() {
                console.log("data sent!")
                $("#password").val("")
                $("#username").val("")
                location.replace("http://localhost:3000/")
            },
            error: function(error) {
                console.log("An error occurred in your form submit handler")
                console.log("The error is here: ", error)
            }
        })
    })