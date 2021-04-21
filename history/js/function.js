//element
let money = document.querySelector('.money');
const savingBtn = document.querySelector('.saving');
const expenseBtn = document.querySelector('.expense');

//current saving
money.innerText = 500;

savingBtn.addEventListener('click', () =>{
  expenseBtn.classList.remove('active');
  savingBtn.classList.add('active');
  money.innerText = 500;
})

expenseBtn.addEventListener('click', () =>{
  savingBtn.classList.remove('active');
  expenseBtn.classList.add('active');
  money.innerText = 100;
})

