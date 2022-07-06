var now = moment().format("MMMM Do YYYY")
var currentHour = moment().hour();
console.log("currentHour", currentHour);

$("#currentDay").text(now);

var text = document.querySelector("#event-discription")
var saveButton = document.querySelector("#saveBtn"); 
localStorage.setItem("#event-description", text);

$(document).ready(function () {
    if(localStorage.getItem("#event-description")) { 
        $(".event-description").html(localStorage.getItem("#event-description"));
    }
    $("#saveBtn").click(function () {        
        localStorage.setItem("#event-description", $event-description.html());

    });

});


function ChageColor(){
    var textbody = document.querySelector(".card-body");
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