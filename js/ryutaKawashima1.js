/* ======================================================================== */
/* ======================= MAIN PAGE ====================================== */
/* ======================================================================== */

// ========= Упражнение ================== //

const btnStartPlus = document.querySelector('.btnStart__Plus');
btnStartPlus.addEventListener ('click', main);

function main() {

function randomIntNumber(min, max) {
    var lenght = max - min + 1;
    var rand = Math.floor(Math.random() * lenght) + min;
    return rand;
}

function randomDey() {
    var items = ['+', '-', '*', '/'];
    var dey = items [ Math.floor( Math.random()*(items.length))];
    return dey;  
}
    

function mathOp(a, b, op) {
    switch (op) {
        case '+':
            res = a + b;               
            break;        
        case '-':
            res = a - b;                
            break;        
        case '*':
            res = a * b;                
            break;
        case '/':
            res = a / b;                
            break;
    }
    return res;
}

var x, y, znak, answer, good=0, error=0;

const nums = document.getElementById('nums');
const num = document.querySelector('.num')

for(var i = 0; i < 25; i++) {
    x = randomIntNumber(1, 9);
    y = randomIntNumber(1, 9);        
    znak = randomDey();       

    res = mathOp(x,y,znak)

    num.innerHTML = answer = (x + znak + y +  '=' + nums );  
    //answer = +prompt(x + znak + y + ' = ?' );                        
                          

    if(res == answer){
        good++;
    }
    else {
        error++;
    }
}  

const examplePlusGood = document.querySelector('.example__plus__good');
const examplePlusError = document.querySelector('.example__plus__error');

examplePlusGood.innerHTML = ('правильных ' +good);
examplePlusError.innerHTML = ('неправильных ' +error );
}
// ========================================= //

