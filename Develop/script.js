var now = moment().format("MMMM Do YYYY")
var currentHour = moment().hour();
console.log("currentHour", currentHour);

$("#currentDay").text(now);

var text = document.querySelector("#discription")
var saveButton = document.querySelector("#saveBtn"); 
localStorage.setItem("#event-description", text);

$(document).ready(function () {
    if(localStorage.getItem("#description")) { 
        $(".description").html(localStorage.getItem("#description"));
    }
    $("#saveBtn").click(function () {        
        localStorage.setItem("#description", $description.html());

    });

});


function ChageColor(){
    var textbody = document.querySelector(".description");
    $.each( textbody, function( index, value){
      var schedulerHour = $(this).attr("id");
      if(currentHour < schedulerHour){
        $(value).addClass("future");
      }else if(currentHour == schedulerHour){
        $(value).addClass("present");
        }else if(currentHour > schedulerHour){
            $(value).addClass("past");
        }

    })

}