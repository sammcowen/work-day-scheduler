// VARIABLES 

var dateNow = moment().format("dddd, MMMM Do YYYY");
//console.log(dateNow);
var timeNow = moment().format("hA");
console.log(timeNow);
const hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];


//FUNCTIONS
// displays current date 
$("#currentDay").text(dateNow);

//  iterates through time blocks and changes bg-color
// based on if past,present or future compared to current time
$.each(hours, function(index, value) {
    console.log(timeNow);
    console.log(value);
     if(hours.value !==  timeNow) {
         console.log("you did it past");}
        // $('.col-8').addClass('present');
    // } else if(this.text < timeNow){
        // $('.col-8').addClass('past');
    // } else {
        // $('.col-8').addClass('future');
    // }
    // console.log( index + ": " + $( this ).text() );
//  }});

 
  

//INITIATORS

    // $('.saveBtn').click(function() {
    // console.log('saveBtn clicked');
 });

