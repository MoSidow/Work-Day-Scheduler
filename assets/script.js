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


