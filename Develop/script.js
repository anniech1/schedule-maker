var now = moment().format("MMMM Do YYYY")
$("#currentDay").text(now);

var text = document.querySelector("#event-discription")
var saveButton = document.querySelector("#saveBtn"); 
localStorage.setItem("#event-description", text);

$(document).ready(function () {
    if(localStorage.getItem("#event-description")) { 
        $event-description.html(localStorage.getItem("#event-description"));
    }
    $("#saveBtn").click(function () {        
        localStorage.setItem("#event-description", $event-description.html());
    });
});

document.onload = displayEvent();


// WHEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future


// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage

// WHEN I refresh the page
// THEN the saved events persist
