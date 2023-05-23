/*===========================================================================*/ 
/*================== main =========================================================*/ 
/*===========================================================================*/ 

// ============ упражнение на знаки ========================== //

const btnStartSym = document.querySelector('.btnStart__Sym');
btnStartSym.addEventListener ('click', mainSym);

function mainSym() {

function randomIntNumber(min, max) {
    var lenght = max - min + 1;
    var rand = Math.floor(Math.random() * lenght) + min;
    return rand;
}

function randomDey() {
    var items = ['▄', '●', '◆', '▲'];
    var dey = items [ Math.floor( Math.random()*(items.length))];
    return dey;  
}

function mathOp(a, b, op) {
    switch (op) {
        case '▄':
            res = a + b;               
            break;        
        case '●':
            res = a - b;                
            break;        
        case '◆':
            res = a * b;                
            break;
        case '▲':
            res = a / b;                
            break;
    }
    return res;
}

var x, y, znak, answer, good=0, error=0;

for(var i = 0; i < 25; i++) {
    x = randomIntNumber(1, 9);
    y = randomIntNumber(1, 9);        
    znak = randomDey();       

    res = mathOp(x,y,znak)
   
    answer = +prompt(x + znak + y + " = ?");                        

    if(res == answer){
        good++;
    }
    else {
        error++;
    }
}  

const examplePlusGoodSym = document.querySelector('.example__plus__good__Sym ');
const examplePlusErrorSym = document.querySelector('.example__plus__error__Sym ');

examplePlusGoodSym.innerHTML = ('правильных ✔' +good);
examplePlusErrorSym.innerHTML = ('неправильных ✘' +error );
}
// ===================================== //
