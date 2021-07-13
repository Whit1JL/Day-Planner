// create work day planner for user 

$(document).ready(function () {

    //Global Variables

    // create current time variable to show accurate date
    var currentTime = moment().format("MMMM Do YYYY, H:mm:ss a");
    console.log(currentTime);
    // user when loading page, current date appear at top of screen
    var currentDay = moment().format("MMMM Do, YYYY");

    //display current date and time in the subheading
    currentDay = moment().format("MMMM Do, YYYY");
    $("#currentDay").text("Today's Date is " + currentDay);

    //on click on save button and use local storage to save data
    // user clicks save button, data input is saved into a local storage
    $(".saveBtn").on("click", function () {
        var textArea = $(this).attr("data-value");
        var userInput = $("#" + textArea).val();
        localStorage.setItem("#" + textArea, userInput);

    });

   