// VARIABLES 

var dateNow = moment().format("dddd, MMMM Do YYYY");
console.log(dateNow);
var timeNow = Number(moment().format("H"));
console.log(timeNow);
const hours = $('.hour');

//FUNCTIONS
// DISPLAYS CURRENT DATE 
$("#currentDay").text(dateNow);

//INITIATORS
// STORE VARS IN LOCAL STORAGE
 $('.saveBtn').click(function() {
    console.log('start button clicked');
    var task = $(this).siblings(".example").val();
    var taskTime = $(this).parent().attr("id");
   localStorage.setItem(taskTime, task);
 })

//  ASSIGNING TEXTAREA VALUE TO ITS PARENT ID LOCALSTORAGE   
$("#9AM .example").val(localStorage.getItem("9AM"));
$("#10AM .example").val(localStorage.getItem("10AM"));
$("#11AM .example").val(localStorage.getItem("11AM"));
$("#12PM .example").val(localStorage.getItem("12PM"));
$("#1PM .example").val(localStorage.getItem("1PM"));
$("#2PM .example").val(localStorage.getItem("2PM"));
$("#3PM .example").val(localStorage.getItem("3PM"));
$("4PM .example").val(localStorage.getItem("4PM"));
$("#5PM .example").val(localStorage.getItem("5PM"));

//  iterates through time blocks and changes bg-color
// based on if past,present or future compared to current time
$.each(hours, function(index, value) { 
    console.log(Number(value.dataset.hour));
    console.log(Number(value.dataset.hour) > timeNow);
    if(Number(value.dataset.hour) > timeNow) {
      $(this).next().addClass('future');   
    }else if(Number(value.dataset.hour) === timeNow){
         $(this).next().addClass('present');
    } else {
     $(this).next().addClass('past');
     }
    });

   





