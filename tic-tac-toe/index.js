let counter = 1;
let arr = [0,1,2,3,4,5,6,7,8]; 
const question = [1,1,1,1,1,1,1,1,1];

const winnercheck =[9,8,7,6,5,4,3,21,54];

function turn(){
    if(counter%2 == 0){
        document.getElementById('player').innerHTML = "player_1's turn";
    }
    else{
        document.getElementById('player').innerHTML = "player_2's turn";
    }
}

function check(){
    for (let i = 0; i < 9; i++) {
        if((winnercheck[0]==winnercheck[1] && winnercheck[1]==winnercheck[2]) || (winnercheck[3]==winnercheck[4] && winnercheck[4]==winnercheck[5]) || (winnercheck[6]==winnercheck[7] && winnercheck[7]==winnercheck[8]) || (winnercheck[0]==winnercheck[3] && winnercheck[3]==winnercheck[6]) || (winnercheck[1]==winnercheck[4] && winnercheck[4]==winnercheck[7]) || (winnercheck[2]==winnercheck[5] && winnercheck[5]==winnercheck[8]) || (winnercheck[0]==winnercheck[4] && winnercheck[4]==winnercheck[8]) || (winnercheck[2]==winnercheck[4] && winnercheck[4]==winnercheck[6])){
            if(counter%2 == 1){
                document.getElementById('player').innerHTML = "player_1 is winner";
            }
            else{
                document.getElementById('player').innerHTML = "player_2 is winner";
            }
            for(let j = 0 ; j < 9 ; j++){
                question[i]=2;
            }
        }
    }
}

function fun0(){
    if(question[0] == 1){
        if(counter%2 == 0){
            document.getElementById('0').innerHTML = 'X';
            winnercheck[0] = 1;
        }
        else{
            document.getElementById('0').innerHTML = '0';
            winnercheck[0] = 2;
        }
        turn();
        check();
        question[0] = 2;
        counter++;
    }
}

function fun1(){
    if(question[1] == 1){
        if(counter%2 == 0){
            document.getElementById('1').innerHTML = 'X';
            winnercheck[1] = 1;
        }
        else{
            document.getElementById('1').innerHTML = '0';
            winnercheck[1] = 2;
        }
        turn();
        check();
        question[1] = 2;
        counter++;
    }
}

function fun2(){
    if(question[2] == 1){
        if(counter%2 == 0){
            document.getElementById('2').innerHTML = 'X';
            winnercheck[2] = 1;
        }
        else{
            document.getElementById('2').innerHTML = '0';
            winnercheck[2] = 2;
        }
        turn();
        check();
        question[2] = 2;
        counter++;
    }
}

function fun3(){
    if(question[3] == 1){
        if(counter%2 == 0){
            document.getElementById('3').innerHTML = 'X';
            winnercheck[3] = 1;
        }
        else{
            document.getElementById('3').innerHTML = '0';
            winnercheck[3] = 2;
        }
        turn();
        check();
        question[3] = 2;
        counter++;
    }
}

function fun4(){
    if(question[4] == 1){
        if(counter%2 == 0){
            document.getElementById('4').innerHTML = 'X';
            winnercheck[4] = 1;
        }
        else{
            document.getElementById('4').innerHTML = '0';
            winnercheck[4] = 2;
        }
        turn();
        check();
        question[4] = 2;
        counter++;
    }
}

function fun5(){
    if(question[5] == 1){
        if(counter%2 == 0){
            document.getElementById('5').innerHTML = 'X';
            winnercheck[5] = 1;
        }
        else{
            document.getElementById('5').innerHTML = '0';
            winnercheck[5] = 2;
        }
        turn();
        check();
        question[5] = 2;
        counter++;
    }
}

function fun6(){
    if(question[6] == 1){
        if(counter%2 == 0){
            document.getElementById('6').innerHTML = 'X';
            winnercheck[6] = 1;
        }
        else{
            document.getElementById('6').innerHTML = '0';
            winnercheck[6] = 2;
        }
        turn();
        check();
        question[6] = 2;
        counter++;
    }
}

function fun7(){
    if(question[7] == 1){
        if(counter%2 == 0){
            document.getElementById('7').innerHTML = 'X';
            winnercheck[7] = 1;
        }
        else{
            document.getElementById('7').innerHTML = '0';
            winnercheck[7] = 2;
        }
        turn();
        check();
        question[7] = 2;
        counter++;
    }
}

function fun8(){
    if(question[8] == 1){
        if(counter%2 == 0){
            document.getElementById('8').innerHTML = 'X';
            winnercheck[8] = 1;
        }
        else{
            document.getElementById('8').innerHTML = '0';
            winnercheck[8] = 2;
        }
        turn();
        check();
        question[8] = 2;
        counter++;
    }
}