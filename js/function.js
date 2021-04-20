//elements 
const btn = document.querySelector('button');
const idInput = document.querySelector('.id');
const pwInput = document.querySelector('.pw');
const alert = document.querySelector('.message');

const ID = 'jenny';
const PW = 007;

btn.addEventListener('click', (e) =>{
  e.preventDefault;
 if( idInput.value == ID && pwInput.value == PW){
  load();
 }else{
  alert.innerText = `Please try again`
 }
 
})

// user url
function load(){
  window.open('../user/index.html', '_self');
}

