
const init = function() {
  const main = document.getElementById('main');
  const currentDay = document.getElementById("currentDay");
  const hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

  currentDay.innerHTML = dayjs().format('ddd, MMM DD YYYY @ hh:mm a');
  

  
  hours.forEach(function(hour, i) {
    let rH = parseInt(hour);
    let cH = parseInt(dayjs().format('H'));
    console.log(typeof rH);
    console.log(typeof cH);
    var row = $('#hour-' + rH);

    if (cH < rH) {
      row.addClass('future');
    } else if (cH > rH) {
      row.addClass('past');
    } else {
      row.addClass('present');
    }
  });
  
  $('.saveBtn').on('click', function () {
    console.log('Hello');
    // let store = [];
    // document.querySelectorAll('textarea').forEach((area,i)=> store.push(area.value));
  
    // localStorage.hours = JSON.stringify(store)
    // localStorage.setItem('textarea', 'text')
    // localStorage.getItem('textarea');
  });
};

init();



  
  