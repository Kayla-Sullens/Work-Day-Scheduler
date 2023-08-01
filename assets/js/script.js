// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//Function for save button
$(function () {
  const main = document.getElementById('main');
  const currentDay = document.getElementById("currentDay");
  const hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

  currentDay.innerHTML = dayjs().format('ddd, MMM DD YYYY @ hh:mm a');

  // main.innerHTML = '';

  // hours.forEach((hour, i) => {
  //   let rH = i + 9;
  //   let cH = dayjs().format('H');

  //   main.innerHTML += `
  //   <div id="hour-9" class="row time-block ${rH > cH ? 'future' : rH < cH ? 'past' : 'present'}">
  //     <div class="col-2 col-md-1 hour text-center py-3">${hour}</div>
  //     <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
  //     <button class="btn saveBtn col-2 col-md-1" aria-label="save">
  //       <i class="fas fa-save" aria-hidden="true"></i>
  //     </button>
  //   </div>
  // `;
  });

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


  $(".saveBtn").click(function () {

    var text = $(this).siblings(".description").val();
    var time = $(this).siblings(".hour").text();
    console.log(time);

    localStorage.setItem(time, JSON.stringify(text));

  });

  function renderText() {
    var saveText9 = JSON.parse(localStorage.getItem("9am"));
    $("#hour-9 .description").val("");
    $("#hour-9 .description").val(saveText9);

    var saveText10 = JSON.parse(localStorage.getItem("10am"));
    $("#hour-10").val("");
    $("#hour-10").val(saveText10);

    var saveText11 = JSON.parse(localStorage.getItem("11am"));
    $("#hour-11").val("");
    $("#hour-11").val(saveText11);

    var saveText12 = JSON.parse(localStorage.getItem("12pm"));
    $("#hour-12").val("");
    $("#hour-12").val(saveText12);

    var saveText13 = JSON.parse(localStorage.getItem("1pm"));
    $("#hour-13").val("");
    $("#hour-13").val(saveText13);

    var saveText14 = JSON.parse(localStorage.getItem("2pm"));
    $("#hour-14").val("");
    $("#hour-14").val(saveText14);

    var saveText15 = JSON.parse(localStorage.getItem("3pm"));
    $("#hour-15").val("");
    $("#hour-15").val(saveText15);

    var saveText16 = JSON.parse(localStorage.getItem("4pm"));
    $("#hour-16").val("");
    $("#hour-16").val(saveText16);

    var saveText17 = JSON.parse(localStorage.getItem("5pm"));
    $("#hour-17").val("");
    $("#hour-17").val(saveText17);
  };

  renderText();

});







//Retrieve what's entered and puts them in the correct time block/place
