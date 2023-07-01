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
  const test = document.getElementsByClassName('test');
  for (let tes of test) {
    tes.innerText = `${quotes[Math.floor(Math.random() * quotes.length)]}`;

    let r = Math.floor(Math.random()*256)  ;
      g = Math.floor(Math.random()*256)  ;
      b = Math.floor(Math.random()*256) ;
      tes.style.color = 'rgb('+ r +','+ g + ',' + b + ')';
  }
};

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
