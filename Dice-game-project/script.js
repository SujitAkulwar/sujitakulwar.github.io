var winner = document.getElementById("winner");
var image1 = document.getElementById("player1");
var image2 = document.getElementById("player2");
var dice1 = 1;
var dice2 = 1;

starting(image1);
starting(image2);

function starting(img){
    img.style.backgroundImage = "url('Alea_1.png')";
    img.style.backgroundRepeat = "no-repeat";
    img.style.backgroundSize = "40vh 40vh";
}

function roll(){
    get_number();
    set_images();
    Whos_winner();
}

function get_number(){
    dice1 = Math.floor(Math.random()*6);
    dice2 = Math.floor(Math.random()*6);
}

function set_images(){
    put_image(dice1,image1);
    put_image(dice2,image2);
}

function put_image(dice,img){
    if(dice == 0){img.style.backgroundImage = "url('Alea_1.png')";}
    else if(dice == 1){img.style.backgroundImage = "url('Alea_2.png')";}
    else if(dice == 2){img.style.backgroundImage = "url('Alea_3.png')";}
    else if(dice == 3){img.style.backgroundImage = "url('Alea_4.png')";}
    else if(dice == 4){img.style.backgroundImage = "url('Alea_5.png')";}
    else {img.style.backgroundImage = "url('Alea_6.png')";}
    img.style.backgroundRepeat = "no-repeat";
    img.style.backgroundSize = "40vh 40vh";
}

function Whos_winner(){
    if(dice1>dice2){winner.innerHTML = "Player 1 is winner !";}
    else if(dice1<dice2){winner.innerHTML = "Player 2 is winner !";}
    else{winner.innerHTML = "It's a tie !";}
}