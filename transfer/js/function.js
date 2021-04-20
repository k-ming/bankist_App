//elements
const currentDay = document.querySelector('.current-balance h4');
const bookmark = document.querySelector('.bookmark ul');
const moneyInput = document.querySelector('input');
const sendBtn = document.querySelector('.add');
const personPhoto = document.querySelector('.item');
const sentAmount = document.querySelector('.item-amount span');
const money = document.querySelector('.money');


//get Date
const today = new Date();
const day = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();
let Mon = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
currentDay.innerText = `${day} ${Mon[month]} ${year}`;


function init(){
  bookmarkList();
  let bill = Number(500000);
  money.innerText = bill;

}
init();

//bookmark UI
function bookmarkList(){
  for( i=0; i< members.length; i++){
  let li = document.createElement('li');
  bookmark.appendChild(li);
  li.innerHTML +=`<img src="../user/images/${members[i].photo}">`;

  li.addEventListener('click', (e) =>{
    let target = e.target;
    target = members[0].name;

  
    localStorage.setItem('name', target);
  
  // send Money
    sendBtn.addEventListener('click', ()=>{
      current();
      TransferMoney();
    })
  })
}
}


function TransferMoney(){
  if(moneyInput.value > 0){
    //sent
    let mon = month < 9 ? `0${month + 1}` : `${month}`;

    const alert = document.querySelector('.total-sent');
    alert.classList.add('active');
    let name = localStorage.getItem('name');

    //send money UI
    let totalBox = document.createElement('div');
    totalBox.classList.add('total-box');
    totalBox.innerHTML += `<div class="item">
                            <img src="../user/images/${members[0].photo}">
                            </div>
                            <div class="item-info">
                            <p>${name}</p>
                            <p>${day}.${mon}.${year}</p>
                            </div>
                            <div class="item-amount">$<span>${moneyInput.value}</span></div>`;
 
    const h2 = document.querySelector('.total-sent h2');
    h2.append(totalBox);
    moneyInput.value = '';
  }
}

//current money
function current(){  
  const money = document.querySelector('.money');
  const cur = money.innerText;
  const transfer = Number(moneyInput.value);
  money.innerText = (cur - transfer);
}