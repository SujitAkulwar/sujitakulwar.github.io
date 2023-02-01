const result = document.getElementById("result");
var score = localStorage.getItem("score");

if(score % 5 == 0){
    result.innerHTML = "Score = " + score;
}
else{
    result.innerHTML = "error";
}