/* ================================================================== */
/* ================ main ============================================ */
/* ================================================================== */

// ====== слова цветные ========================== //
const quotes = [ 
  'красный', 'оранжевый', 'желтый', 'зеленый', 'голубой','синий',  'фиолетовый',
  'серый', 'черный', 'коричневый', 'розовый', 'белый' ];

const changeQ = document.getElementById('changeQuotes');
changeQ.addEventListener('click', mots);

function mots() {

  let a = quotes[Math.floor(Math.random() * quotes.length)];
  let i = quotes[Math.floor(Math.random() * quotes.length)];
  let c = quotes[Math.floor(Math.random() * quotes.length)];
  let d = quotes[Math.floor(Math.random() * quotes.length)];
  let e = quotes[Math.floor(Math.random() * quotes.length)];


var test1 = document.querySelector('.test1');
var test2 = document.querySelector('.test2');
var test4 = document.querySelector('.test4');
var test5 = document.querySelector('.test5');
var test6 = document.querySelector('.test6');


  var r = Math.floor(Math.random()*256)  ;
      g = Math.floor(Math.random()*256)  ;
      b = Math.floor(Math.random()*256) ;
test1.style.color = 'rgb('+ r +','+ g + ',' + b + ')';
document.querySelector('.test1').innerHTML = a + ' ';

  var r = Math.floor(Math.random()*256)  ;
      g = Math.floor(Math.random()*256)  ;
      b = Math.floor(Math.random()*256) ;
test2.style.color = 'rgb('+ r +','+ g + ',' + b + ')';      
document.querySelector('.test2').innerHTML = i + ' ';

  var r = Math.floor(Math.random()*256)  ;
      g = Math.floor(Math.random()*256)  ;
      b = Math.floor(Math.random()*256) ;
test4.style.color = 'rgb('+ r +','+ g + ',' + b + ')';
document.querySelector('.test4').innerHTML = c + ' ';

  var r = Math.floor(Math.random()*256)  ;
      g = Math.floor(Math.random()*256)  ;
      b = Math.floor(Math.random()*256) ;
test5.style.color = 'rgb('+ r +','+ g + ',' + b + ')';
document.querySelector('.test5').innerHTML = d + ' ';

  var r = Math.floor(Math.random()*256)  ;
      g = Math.floor(Math.random()*256)  ;
      b = Math.floor(Math.random()*256) ;
test6.style.color = 'rgb('+ r +','+ g + ',' + b + ')';
document.querySelector('.test6').innerHTML = e + ' ';
};
// ============================================================================ //

   
// ==============секундомер ============================//
let timer = document.getElementById('timer');
let startBtn = document.getElementById('startBtn');
let pauseBtn = document.getElementById('pauseBtn');
let resetBtn = document.getElementById('resetBtn');

let seconds = 0;
let minutes = 0;
let interval;

function updateTime() {
  seconds++;
  if (seconds === 60) {
    minutes++;
    seconds = 0;
    if (minutes == 5) {
        alert('Прошло 5 минут');
    }
  }
  timer.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

startBtn.addEventListener('click', () => {
  interval = setInterval(updateTime, 1000);
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  resetBtn.disabled = false;
});

pauseBtn.addEventListener('click', () => {
  clearInterval(interval);
  startBtn.disabled = false;
  pauseBtn.disabled = true;
});

resetBtn.addEventListener('click', () => {
  clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  timer.textContent = '00:00';
  startBtn.disabled = false;
  pauseBtn.disabled = true;
  resetBtn.disabled = true;
});
// ===============================================================//
