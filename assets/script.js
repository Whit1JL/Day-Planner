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

    // loops through the id array of times and grabs data from local storage 
    let timeClock = ["#9am", "#10am", "#11am", "#12pm", "#1pm", "#2pm", "#3pm", "#4pm", "#5pm"];
    // times in military style
    let milTime = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    // created a for loop to save items into local storage
    // saved event so even when page is refreshed it still works
    for (let i = 0; i < timeClock.length; i++) {
        savedEvent = $(".saved-event");
        if (localStorage.getItem(timeClock[i])) {
            $(timeClock[i]).val(localStorage.getItem(timeClock[i]))
        };
    };

    //changing style block color based on time of day
    function styleHour() {
        var currentHour = moment().hour();
        //loop over time blocks
        for (let i = 0; i < timeClock.length; i++) {

            //check if time is present (red)
            if (milTime[i] === currentHour) {
                $(timeClock[i]).addClass("present");
            }
            //check if time is past (gray)
            else if (milTime[i] >= currentHour) {
                $(timeClock[i]).addClass("future");
            }
            //check if time is future (green)
            else {
                $(timeClock[i]).addClass("past");
            };
        }
    };
    styleHour();
});
