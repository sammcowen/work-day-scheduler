// VARIABLES 

var dateNow = moment().format("dddd, MMMM Do YYYY");
console.log(dateNow);
var tasks = $('.text-area').textInput;

//FUNCTIONS
$("#currentDay").text(dateNow);
// INITIATORS
$('.text-area').click( function() {
   console.log("yessir")
   var textInput = $("<textarea>")
  .addClass("form-control")
  .val(tasks);
  $(this).replaceWith(textInput);
  textInput.trigger("focus");
  $(".text-area").on("blur", "textarea", function() {
      $(this).replaceWith(tasks);
      var taskP = $("<div>")
      .addClass("text-area")
      .text(text);
    
    // replace textarea with p element
    $(this).replaceWith(taskP);
});
});