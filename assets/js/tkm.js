const btnRock = document.querySelector('.btn');  
const btnPaper = document.querySelector('.btn2'); 
const btnScissors = document.querySelector('.btn3'); 
const oyuncuHamle = document.querySelector('.oyuncuHamle');
const bilgisayarHamle = document.querySelector('.bilgisayarHamle');
const kazananBilgi = document.querySelector('.kazananBilgi');
const oyuncuSkorTxt = document.querySelector('.oyuncuSkor');

const hamleler = ['tas', 'kagit', 'makas'];

let oyuncuSkor = 0;

function bilgisayarHamlesi() {
  return hamleler[Math.floor(Math.random() * 3)];
}

function oyna() {
    let hamle = '';

if (this.classList.contains('btn')) {
    hamle = 'tas';  
} else if (this.classList.contains('btn2')) {
    hamle = 'kagit';  
} else if (this.classList.contains('btn3')) {
    hamle = 'makas'; 
}
const bilgisayarınHamlesi = bilgisayarHamlesi();
  
if (
    (hamle === 'tas' && bilgisayarınHamlesi === 'makas') ||
    (hamle === 'kagit' && bilgisayarınHamlesi === 'tas') ||
    (hamle === 'makas' && bilgisayarınHamlesi === 'kagit')
){
    kazananBilgi.innerText = 'YOU WIN';
    oyuncuSkor++;
} else{
    kazananBilgi.innerText = 'YOU LOSE';
}
  oyuncuSkorTxt.innerText = oyuncuSkor;
}

btnRock.addEventListener('click', oyna);
btnPaper.addEventListener('click', oyna);
btnScissors.addEventListener('click', oyna);


