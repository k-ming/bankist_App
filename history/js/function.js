//element
let money = document.querySelector('.money');
const savingBtn = document.querySelector('.saving');
const expenseBtn = document.querySelector('.expense');
const historyCon = document.querySelector('.history');
let savingMoney = 2800;
let expenseMoney = 400;
let historyName = localStorage.getItem('name');
let histoyMoney = localStorage.getItem('sentMoney');

//current saving
money.innerText = savingMoney;

savingBtn.addEventListener('click', () =>{
  expenseBtn.classList.remove('active');
  savingBtn.classList.add('active');
  money.innerText = savingMoney;
})

expenseBtn.addEventListener('click', () =>{
  savingBtn.classList.remove('active');
  expenseBtn.classList.add('active');
  let hMoney = JSON.parse(histoyMoney);
  let totalExpense = expenseMoney + hMoney;
  money.innerText = totalExpense;

})

//currentMoney save하고 다시 표시하기

//history UI
function history(){
  const historyh2 = document.querySelector('.history h2');
  // if(historyName && histoyMoney){
    const histoyBox = document.createElement('div');
    history.innerHTML += `<div class="history-box" id="expense">
                          <h3>${historyName}</h3>
                          <h4>17 April 2021</h4>
                          <p>$ <span class="money">${histoyMoney}</span></p></div>`;
    historyh2.append(histoyBox);
  }
// }

history();

