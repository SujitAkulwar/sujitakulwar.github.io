var head = document.getElementById('head');
var options = document.getElementsByClassName('option');
var nextBtn = document.getElementById('next-btn');
var option1 = document.getElementById('A');
var option2 = document.getElementById('B');
var option3 = document.getElementById('C');
var option4 = document.getElementById('D');
var i = 0;
var counter = 0;
var score = 0;

var Quetions = localStorage.getItem('Quetions');
var Difficulty = localStorage.getItem('Difficulty');
var Catagory = localStorage.getItem('Catagory');

var xhr = new XMLHttpRequest();
xhr.open('GET','https://opentdb.com/api.php?amount='+Quetions+'&category='+Catagory+'&difficulty='+Difficulty+'&type=multiple',true);
xhr.onload = function(){
	if(this.status == 200){
		Response(JSON.parse(this.responseText));
	}
}
xhr.send();
function Response(result){
	setQuetion(result,i);
}

function setQuetion(result,i){
	if(i<Quetions){
		head.innerHTML = result.results[i].question;
		correct = Math.floor(Math.random()*4);
		var k = 0;
		for(var j=0;j<4;j++){
			if(j == correct){
				options[j].innerHTML = result.results[i].correct_answer;
			}
			else{
				options[j].innerHTML = result.results[i].incorrect_answers[k];
				k++;	
			}
		}
		nextBtn.addEventListener('click',function(){
			i++;
			counter = 0;
			check_opt();
			setQuetion(result,i);
		});
	}
	else{
		localStorage.setItem('score',score);
		location.href = "./result.html";
	}
}
function opt1(){
	if(correct == 0 && counter == 0){
		option1.style.backgroundColor = 'green';
		check_score();
	}
	else if(counter == 0){
		option1.style.backgroundColor = 'red';
		setTimeout(function(){ options[correct].style.backgroundColor = 'green';},100);
	}
	counter = 1;
}
function opt2(){
	if(correct == 1 && counter == 0){
		option2.style.backgroundColor = 'green';
		check_score();
	}
	else if(counter == 0){
		option2.style.backgroundColor = 'red';
		setTimeout(function(){ options[correct].style.backgroundColor = 'green';},100);
	}
	counter = 1;
}
function opt3(){
	if(correct == 2 && counter == 0){
		option3.style.backgroundColor = 'green';
		check_score();
	}
	else if(counter == 0){
		option3.style.backgroundColor = 'red';
		setTimeout(function(){ options[correct].style.backgroundColor = 'green';},100);
	}
	counter = 1;
}
function opt4(){
	if(correct == 3 && counter == 0){
		option4.style.backgroundColor = 'green';
		check_score();
	}
	else if(counter == 0){
		option4.style.backgroundColor = 'red';
		setTimeout(function(){ options[correct].style.backgroundColor = 'green';},100);
	}
	counter = 1;
}
function check_score(){
	score = score + 5 ;
	document.getElementById('score').innerHTML = '<h1>Score :'+score+'</h1>';
}
function check_opt(){
	for(var p=0;p<4;p++){
		options[p].style.background = "orange";
	}
}