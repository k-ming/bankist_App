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


//reload !!!
function onLoad(){
  let bill = Number(500000);
  money.innerText = bill;

  let currentMoney = localStorage.getItem('current');
  if(currentMoney){
    money.innerText = currentMoney;
  }

  TransferMoney();

}

//bookmark UI
function bookmarkList(){
  for( i=0; i< members.length; i++){
  const li = document.createElement('li');
  bookmark.appendChild(li);
  li.innerHTML +=`<img src="../user/images/${members[i].photo}">`;

  li.addEventListener('click', (e) =>{
    let target = e.target;
    target = members[0].name;

    localStorage.setItem('name', target);


    sendBtn.addEventListener('click', () => {
      saveMoney();
      TransferMoney();
      current();
    })
  })
 }
}



//save money to localstorage
function saveMoney(){
  let sentMon = moneyInput.value;
  localStorage.setItem('sentMoney', sentMon);

}

//current money to localstorage
function current(){  
  const money = document.querySelector('.money');
  let cur = money.innerText;
  let transfer = localStorage.getItem('sentMoney');
  let curMon = (cur - transfer);
  localStorage.setItem('current', curMon);
}

function TransferMoney(){
  let totalBox = document.createElement('div');
  let name = localStorage.getItem('name');
  let sentMoney = localStorage.getItem('sentMoney');


  if( sentMoney){
    //sent-date
    let mon = month < 9 ? `0${month + 1}` : `${month}`;
    
    //message-empty
    const alert = document.querySelector('.total-sent');
    alert.classList.add('active');

    //send money UI
    totalBox.classList.add('total-box');
    totalBox.innerHTML = `<div class="item">
      <img src="../user/images/${members[0].photo}">
      </div>
      <div class="item-info">
      <p>${name}</p>
      <p>${day}.${mon}.${year}</p>
      </div>
      <div class="item-amount">$<span>${sentMoney}</span></div>`;

    const h2 = document.querySelector('.total-sent h2');
    h2.append(totalBox);   
  
  }
}



onLoad();
bookmarkList();

