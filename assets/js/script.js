// VARIABLES 

var dateNow = moment().format("dddd, MMMM Do YYYY");
console.log(dateNow);
var timeNow = Number(moment().format("H"));
console.log(timeNow);
const hours = $('.hour');



//FUNCTIONS
// displays current date 
$("#currentDay").text(dateNow);


//INITIATORS
 $('.saveBtn').click(function() {
    console.log('start button clicked');
    var task = $(this).siblings(".example").val();
    var taskTime = $(this).parent().attr("id");
   localStorage.setItem(taskTime, task);
});



//  iterates through time blocks and changes bg-color
// based on if past,present or future compared to current time
$.each(hours, function(index, value) {
   // console.log(timeNow);
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

    // UPON REFRESH, RETRIEVE THE LOCAL STORAGE AND HAVE IT APPEAR IN THE TEXTAREAS


  


