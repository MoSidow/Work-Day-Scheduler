// Displays Current Day on top of Calender
var DateNow = moment().format("dddd MMM Do, YYYY");
$("#currentDay").text(DateNow);

var saveBtn = $(".saveBtn");


// when button is clicked, description and what hour it belongs to is saved to local storage.
saveBtn.on("click", function() {

    var Time = $(this).siblings(".hour").text();
    var description = $(this).siblings(".description").val();
    localStorage.setItem(Time, description);

});


// Determines colour of timeblock, whether it is future, present or past.
function colorOfTimeBlock () {
    var currentHour = moment().hours();

    $(".time-block").each(function() {
        var timeblockHour = parseInt($(this).attr("id"));

        if (timeblockHour > currentHour) {
            $(this).addClass("future");
        }   else if (timeblockHour === currentHour) {
            $(this).addClass("present")
        } else {
            $(this).addClass("past")
        }
        
    })
}

// After refresh the input still stays on the page
function saveAfterRefresh() {

    $(".hour").each(function() {
        var timeblockHour = $(this).text();
        var currentDescription = localStorage.getItem(timeblockHour);

        if(currentDescription !== null) {
            $(this).siblings(".description").val(currentDescription);
        }
    });
}

colorOfTimeBlock()
saveAfterRefresh()

