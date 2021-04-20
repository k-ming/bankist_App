//elements
const userName = document.querySelector('.user-name');
const date = document.querySelector('.current-balance h4');


today();
function today(){
  let today = new Date;
  let month = today.getMonth();
  let day = today.getDate();
  let year = today.getYear();
  var Mon = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
  date.innerHTML = `${day}, ${Mon[month]}, ${year}`;
}
