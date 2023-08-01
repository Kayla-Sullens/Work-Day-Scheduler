
const init = async () => {
  const main = document.getElementById('main');
  const currentDay = document.getElementById("currentDay");
  const hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

  currentDay.innerHTML = dayjs().format('ddd, MMM DD YYYY @ hh:mm a');
  
  main.innerHTML = '';
  
  hours.forEach((hour, i) => {
    let rH = i + 9;
    let cH = dayjs().format('H');
    main.innerHTML += `
    <div id="hour-9" class="row time-block ${cH < rH ? 'future' : cH > rH ? 'past' : 'present'}">
    <div class="col-2 col-md-1 hour text-center py-3">${hour}</div>
    <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
    <button class="btn saveBtn col-2 col-md-1" aria-label="save">
      <i class="fas fa-save" aria-hidden="true"></i>
    </button>
  </div>
  `;
  });

};

init();

$('.saveBtn').on('click', () => {
  let store = [];
  document.querySelectorAll('textarea').forEach((area,i)=> store.push(area.value));

  localStorage.hours = JSON.stringify(store)
})

  
  