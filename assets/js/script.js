// VARIABLES 

var dateNow = moment().format("dddd, MMMM Do YYYY");
//console.log(dateNow);
var timeNow = moment().format("hmmA");
console.log(timeNow);

//FUNCTIONS
// displays current date 
$("#currentDay").text(dateNow);

//  iterates through time blocks and changes bg-color
// based on if past,present or future compared to current time
$('.hour').each(function (index) {
    if( this.text === timeNow) {
        $('.col-8').addClass('present');
    } else if(this.text < timeNow){
        $('.col-8').addClass('past');
    } else {
        $('.col-8').addClass('future');
    }
    console.log( index + ": " + $( this ).text() );
});

//INITIATORS

   


    

