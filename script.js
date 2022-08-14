$('body').ripples({
	resolution: 700,
	dropRadius: 20,
	perturbance: 0.01,
});

const counter = 0;
var music = document.getElementById("music");
music.pause();
function play(){
    music.play();
}
function pause(){
	music.pause();
}
