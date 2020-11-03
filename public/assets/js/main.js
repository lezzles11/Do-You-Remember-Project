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

$("#favQuestionForm").on("click", function (event) {
    event.preventDefault();

    console.log("Favorite Question Form Submit Form Button Pressed");
    console.log(event.target);

    let user_id = $("#questionform_user_id").val();
    let friend_id = $("#questionform_friend_id").val();
    let question_id = $("#questionform_question_id").val();
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
        url: "/api/favoritequestion",
        body: favQuestion,
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

$("#markAsDone").on("click", function (event) {
    event.preventDefault();

    console.log("Favorite Question Form Submit Form Button Pressed");
    console.log(event.target);

    let user_id = $("#questionform_user_id").val();
    let friend_id = $("#questionform_friend_id").val();
    let question_id = $("#questionform_question_id").val();
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
        url: "/api/markasdone",
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
