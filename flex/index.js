var bodys = document.getElementById('right');
var option = document.getElementById('o');
var submit = document.querySelector("#submit");

var poo = document.querySelector('#p00');
var poi = document.querySelector('#p01');
var pot = document.querySelector('#p02');
var poe = document.querySelector("#p03");
var por = document.querySelector("#p04");
var pof = document.querySelector("#p05");

//
var o1 = document.getElementById("o1");
var fg1 = document.getElementById("fg1");
var fs1 = document.getElementById("fs1");
var as1 = document.getElementById("as1");

var o2 = document.getElementById("o2");
var fg2 = document.getElementById("fg2");
var fs2 = document.getElementById("fs2");
var as2 = document.getElementById("as2");

var o3 = document.getElementById("o3");
var fg3 = document.getElementById("fg3");
var fs3 = document.getElementById("fs3");
var as3 = document.getElementById("as3");

var o4 = document.getElementById("o4");
var fg4 = document.getElementById("fg4");
var fs4 = document.getElementById("fs4");

var as4 = document.getElementById("as4");

//
var boxarray = [[o1, fg1, fs1, as1], [o2, fg2, fs2, as2], [o3, fg3, fs3, as3], [o4, fg4, fs4, as4]];
var boxclassarray = [
    ["0", "order-1", "order-2", "order-3", "order-4", "order-first", "order-last"],
    ["0", "grow-0", "grow"],
    ["0", "shrink-0", "shrink"],
    ["0", "self-auto", "self-start", "self-end", "self-center", "self-stretch", "self-baseline"]];                                           

var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');
var b4 = document.getElementById('b4');
var box = [b1, b2, b3, b4];


var flexDirection = ["0","flex-row","flex-row-reverse","flex-col","flex-col-reverse"];
var JustifyContent = ["0", "justify-start", "justify-end", "justify-center", "justify-between", "justify-around","justify-evenly"];
var flexwrap = ["0", "flex-wrap", "flex-nowrap", "flex-wrap-reverse"];
var alignitems = ["0","items-start","items-end","items-center","items-baseline","items-stretch"]
var aligncontent = ["0","content-center","content-start","content-end","content-between","content-around","content-evenly","content-baseline"]

var flexbox = [0, flexDirection, JustifyContent, flexwrap, alignitems, aligncontent];


var bodysubcontaint = document.getElementById("bodyhide");
var block1 = document.getElementById("block1hide");
var block2 = document.getElementById("block2hide");
var block3 = document.getElementById("block3hide");
var block4 = document.getElementById("block4hide");


var hidearray = [bodysubcontaint, block1, block2, block3, block4];
var counter = [0, 0, 0, 0, 0];

for (var i = 0; i < 5; i++){
    hide(i);
}


//body hide function 
function hide(e){
    counter[e]++;
    var t = e;
    if(counter[e]% 2 == 0){
        hidearray[e].style.display = "block";
        rotatefun(t, 0);
    }else {
        hidearray[e].style.display = "none";
        rotatefun(t, 1);
    }
}

function rotatefun(e,i) {
    if (e == 0) {
        if (i == 0) { document.getElementById('i0').setAttribute("style", "transform:rotate(90deg);"); }
        else { document.getElementById('i0').setAttribute("style", "transform:rotate(0deg);"); }
    }
    else if (e == 1) {
        if (i == 0) { document.getElementById('i1').setAttribute("style", "transform:rotate(90deg);"); }
        else { document.getElementById('i1').setAttribute("style", "transform:rotate(0deg);"); }
    }
    else if (e == 2) {
        if (i == 0) { document.getElementById('i2').setAttribute("style", "transform:rotate(90deg);"); }
        else { document.getElementById('i2').setAttribute("style", "transform:rotate(0deg);"); }
    }
    else if (e == 3) {
        if (i == 0) { document.getElementById('i3').setAttribute("style", "transform:rotate(90deg);"); }
        else { document.getElementById('i3').setAttribute("style", "transform:rotate(0deg);"); }
    }
    else {
        if (i == 0) { document.getElementById('i4').setAttribute("style", "transform:rotate(90deg);"); }
        else { document.getElementById('i4').setAttribute("style", "transform:rotate(0deg);"); }
    }
}



submit.onclick = (e) => {// main function

    for (let i = 1; i < 6; i++){
        removeclass(i);
    }

    if(poo.value=="0"){
        bodys.classList.remove("flex");
    }else{
        bodys.classList.add("flex");
    }
    
    if(poi.value!="0"){
        bodys.classList.add(flexDirection[poi.value]);
    }
    if(pot.value!="0"){
        bodys.classList.add(JustifyContent[pot.value]);
    }
    if(poe.value!="0"){
        bodys.classList.add(flexwrap[poe.value]);
    }
    if(por.value!="0"){
        bodys.classList.add(alignitems[por.value]);
    }
    if(pof.value!="0"){
        bodys.classList.add(aligncontent[pof.value]);
    }

    for (let i = 0; i < 4; i++){
        let temp = boxarray[0][i].value;
        let check = boxclassarray[i][temp];
        removeclassforbox(0,i); 
        if (temp != "0") {
            b1.classList.add(check);
            console.log(boxclassarray[i][temp]);
        }
    }
    for (let i = 0; i < 4; i++){
        let temp = boxarray[1][i].value;
        let check = boxclassarray[i][temp];
        removeclassforbox(1,i); 
        if (temp != "0") {
            b2.classList.add(check);
            console.log(boxclassarray[i][temp]);
        }
    }
    for (let i = 0; i < 4; i++){
        let temp = boxarray[2][i].value;
        let check = boxclassarray[i][temp];
        removeclassforbox(2,i); 
        if (temp != "0") {
            b3.classList.add(check);
            console.log(boxclassarray[i][temp]);
        }
    }
    for (let i = 0; i < 4; i++){
        let temp = boxarray[3][i].value;
        let check = boxclassarray[i][temp];
        removeclassforbox(3,i); 
        if (temp != "0") {
            b4.classList.add(check);
            console.log(boxclassarray[i][temp]);
        }
    }



}
//flexbasis

//combine function to remove class
function removeclass(e) {
    for (let i = 1; i < 10; i++){
        bodys.classList.remove(flexbox[e][i]);
    }
}



function removeclassforbox(a, b) {
    for (let i = 1; i < 10; i++){
        if (boxclassarray[b][i]) {
           box[a].classList.remove(boxclassarray[b][i]); 
        }
    }
}

let a = 0, b = 0, c = 0;
let x = 0, y = 0, z = 0;
let p = 1, q = 1, r = 1;
setInterval(function () {
    randomy();
    b1.style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")";
    b1.style.color = "rgb(" + x + "," + y + "," + z + ")";
    randomy();
    b2.style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")";
    b2.style.color = "rgb(" + x + "," + y + "," + z + ")";
    randomy();
    b3.style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")";
    b3.style.color = "rgb(" + x + "," + y + "," + z + ")";
    randomy();
    b4.style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")";
    b4.style.color = "rgb(" + x + "," + y + "," + z + ")";
}, 300);

function randomy() {
    if (p == 1) {
        a = a + 5;
        if (a > 200) { p = 0; }
    } else {
        a = a - 4;
        if (a < 20) { p = 1; }
    }
    if (q == 1) {
        b = b + 4;
        if (b > 200) { q = 0; }
    } else {
        b = b - 3;
        if (b < 20) { q = 1; }
    }
    if (r == 1) {
        c = c + 3;
        if (c > 200) { r = 0; }
    } else {
        c = c - 2;
        if (c < 20) { r = 1; }
    }
    x = 255 - a;
    x = Math.abs(x);
    
    y = 255 - b;
    y = Math.abs(y);
    
    z = 255 - c;
    z = Math.abs(z);
}