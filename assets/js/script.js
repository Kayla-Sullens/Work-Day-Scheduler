// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
 
});


const main = document.getElementById('main');
const currentDay = document.getElementById("currentDay");
const hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

currentDay.innerHTML = dayjs().format('ddd, MMM DD YYYY @ hh:mm a');

main.innerHTML = '';

hours.forEach((hour, i) => {
  let rH = i + 9;
  let cH = dayjs().format('H');

  main.innerHTML += `
    <div id="hour-9" class="row time-block ${rH > cH ? 'future' : rH < cH ? 'past' : 'present'}">
      <div class="col-2 col-md-1 hour text-center py-3">${hour}</div>
      <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
      <button class="btn saveBtn col-2 col-md-1" aria-label="save">
        <i class="fas fa-save" aria-hidden="true"></i>
      </button>
    </div>
  `;
});

//Function for save button
$(".saveBtn").on("click", function () {
  var text = $(this).siblings(".decription").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
});

//Retrieve what's entered and puts them in the correct time block/place
$("#hour-9 .desciption").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));