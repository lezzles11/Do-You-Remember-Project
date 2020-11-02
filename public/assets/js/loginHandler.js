/**********************************************
 * This handles the login.handlebars page
 * ==================================
 * 1. [ ] First, I want to check if upon submission of the login button, the email and password is captured in the javascript file
 * 2. It will ultimately be sent through axios, which will send it to the backend (axios makes requests from the browser
 *  Fun Fact: The "("/api/user", function (request, response) { app.post... })" seen in express correlates with the axios.post method - it also helps us automatically transform data into and from JSON
 * 3. [ ] I want to also write the jquery / axios - and make sure that the login route, and the handlebars route is the same (really important to check the variables here)
 * 4. [ ] When I start the server, I want to make sure the form submission works
 * 5. [ ] Write the test required!
 ***********************************************/

// This will the template that will render each user
// Notice that the button has a remove class to it - there will be an event handler to associate the remove class with the button!
let userTemplate = Handlebars.compile(`{{#each user}}
 <div class="card">
 <textarea data-id="{{ id }}">{{ email }}</textarea>
<button class="remove btn btn-xs" data-id="{{ id }}"><i class = "fa fa-trash" aria-hidden="true"></i></button>
 </div>`);
// References a user id
const loadUser = (data) => {
    console.log("trying");
    console.log(data);
    $("#user").html(notesTemplate({ notes: data }));
};
