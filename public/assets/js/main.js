console.log("FAVORITE QUESTION FILE!!!");
$("favoriteQuestionForm").on("submit", function (event) {
    event.preventDefault();
    console.log("Favorite Question Form Submit Form Button Pressed");
    let value = $("#favorite").val();
    console.log("Button Value: ", value);
});

/**********************************************
 * #TODO: how did sam render the javascript file?
 * ==================================
 ***********************************************/
