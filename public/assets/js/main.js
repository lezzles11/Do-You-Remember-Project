/**********************************************
 * Handles the on submit action
 * ==================================
 * This file is currently hardcoded into the handlebars main template as localhost:3001/assets/js/main.js (via <script> tag)
 ***********************************************/
// console.log("FAVORITE QUESTION FILE!!!");
// var elements = document.getElementsByClassName("favoriteQuestionForm");

// for (var i = 0, length = elements.length; i < length; i++) {
//     elements[i].onclick = function (event) {
//         var button = event.currentTarget;
//         console.log("TRYING TO SEE IF I CAN ADD A UNIQUE HANDLER");
//         let user_id = $("#questionform_user_id").val();

//         let friend_id = $("#questionform_friend_id").val();

//         let question_id = $("#questionform_question_id").val();

//         let favQuestion = {
//             user_id: user_id,
//             friend_id: friend_id,
//             question_id: question_id,
//         };
//         console.log(
//             "User Id can be successfully submitted through handlebars: ",
//             favQuestion
//         );
//
//         // Do your contentEditable checks here
//     };
// }

/**********************************************
 * CURRENT PROBLEM: Not being able to
 * ==================================
 ***********************************************/
console.log("THE MAIN.JS FILE LOADS");
$(".favQuestionForm").on("submit", function (event) {
    event.preventDefault();

    console.log("Favorite Question Form Submit Form Button Pressed");
    let friend_id = event.target[0].value;
    let user_id = event.target[1].value;
    let question_id = event.target[2].value;

    console.log("Friend Id: ", friend_id);

    console.log("User Id: ", user_id);
    console.log("Question Id: ", question_id);

    alert("Added to Favorite Question Category!");
    let favQuestion = {
        user_id: user_id,
        friend_id: friend_id,
        question_id: question_id,
    };
    console.log(
        "User Id can be successfully submitted through handlebars: ",
        favQuestion
    );
    console.log("LET'S SEND THIS TO AXIOS AFTER~~");
    $.ajax({
        type: "POST",
        url: `/favoritequestion/${user_id}/${question_id}`,
        data: favQuestion,
        success: function () {
            console.log("data sent!");
        },
        error: function (error) {
            console.log(
                "Error occurred when trying to post question to favorite question",
                error
            );
        },
    });
});

$(".markAsDone").on("submit", function (event) {
    event.preventDefault();
    console.log("Favorite Question Form Submit Form Button Pressed");
    console.log(event.target);
    let friend_id = event.target[0].value;
    let user_id = event.target[1].value;
    let question_id = event.target[2].value;

    alert("Successfully marked as done! Your relationship just progressed!!");
    console.log("Could be cool to add an animation here");
    let markAsDoneObject = {
        user_id: user_id,
        friend_id: friend_id,
        question_id: question_id,
        answered: true,
    };
    console.log("Mark As Done Button Object Is Clicked: ", markAsDoneObject);
    $.ajax({
        type: "POST",
        url: `/markasdone/${user_id}/${friend_id}/${question_id}`,
        data: markAsDoneObject,
        success: function () {
            console.log("data sent!");
        },
        error: function (error) {
            console.log(
                "Error occurred when trying to post question to favorite question",
                error
            );
        },
    });
});
