var string = ""; 
var string2 = "";
var ans;
var counter=0;
var temp = 0;
var n,n2;

function start(){
    ans = Math.floor(Math.random()*4);
    string += ans;              console.log(ans);
    setTimeout(Playing(ans), 100);
}

function fun(i){
    string2 += i;
    n = string.length;
    n2 = string2.length;            console.log(n+" "+n2);
    if(n == n2){
        check();
        string2 = "";
    }else{
                                console.log(string);console.log(string2);
    }
}

function check(){
    if(string == string2){
        counter++;                      console.log(counter);
        start();
    }
    else{
        wrong_ans();                    console.log("wrong");   
    }
    $("h1").text("score = "+counter);
}

function wrong_ans(){
    string = "";
    string2 = "";
    counter = 0;
    counter2 = 0;
    $("#start").text("Restart");

    var w_sound = document.createElement("audio");
    w_sound.src="wrong.mp3";
    w_sound.autoPlay=false;
    w_sound.preLoad=true;       
    w_sound.play();
}

function Playing(ans){
    if(ans==0){
        var red_sound = document.createElement("audio");
        red_sound.src="red.mp3";
        red_sound.autoPlay=false;
        red_sound.preLoad=true;       
        red_sound.play();
        setTimeout(function(){ $(".red").css("transform", "translateY(-4px)");$(".red").css("background-color", "red");},100);
        $(".red").css("background-color", "white");
        $(".red").css("transform", "translateY(4px)");
    }
    else if(ans==1){
        var y_sound = document.createElement("audio");
        y_sound.src="yellow.mp3";
        y_sound.autoPlay=false;
        y_sound.preLoad=true;       
        y_sound.play();
        setTimeout(function(){ $(".yellow").css("transform", "translateY(-4px)");$(".yellow").css("background-color", "yellow");},100);
        $(".yellow").css("background-color", "white");
        $(".yellow").css("transform", "translateY(4px)");
    }
    else if(ans==2){
        var g_sound = document.createElement("audio");
        g_sound.src="green.mp3";
        g_sound.autoPlay=false;
        g_sound.preLoad=true;       
        g_sound.play();
        setTimeout(function(){ $(".green").css("transform", "translateY(-4px)");$(".green").css("background-color", "green");},100);
        $(".green").css("background-color", "white");
        $(".green").css("transform", "translateY(4px)");
    }
    else{
        var b_sound = document.createElement("audio");
        b_sound.src="blue.mp3";
        b_sound.autoPlay=false;
        b_sound.preLoad=true;       
        b_sound.play();    
        setTimeout(function(){ $(".blue").css("transform", "translateY(-4px)");$(".blue").css("background-color", "blue");},100);
        $(".blue").css("background-color", "white");
        $(".blue").css("transform", "translateY(4px)");
    }
}

