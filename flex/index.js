const bodys = document.getElementById('right');
const submit = document.querySelector("#submit");

const poo = document.querySelector('#p00');
const poi = document.querySelector('#p01');
const pot = document.querySelector('#p02');
const poe = document.querySelector("#p03");
const por = document.querySelector("#p04");
const pof = document.querySelector("#p05");

const boxarray = [
    [document.getElementById("o1"), document.getElementById("fg1"), document.getElementById("fs1"), document.getElementById("as1")],
    [document.getElementById("o2"), document.getElementById("fg2"), document.getElementById("fs2"), document.getElementById("as2")],
    [document.getElementById("o3"), document.getElementById("fg3"), document.getElementById("fs3"), document.getElementById("as3")],
    [document.getElementById("o4"), document.getElementById("fg4"), document.getElementById("fs4"), document.getElementById("as4")]
];

const boxclassarray = [
    ["0","order-1","order-2","order-3","order-4","order-first","order-last"],
    ["0","grow-0","grow"],
    ["0","shrink-0","shrink"],
    ["0","self-auto","self-start","self-end","self-center","self-stretch","self-baseline"]
];

const box = [
    document.getElementById('b1'),
    document.getElementById('b2'),
    document.getElementById('b3'),
    document.getElementById('b4')
];

const flexDirection = ["0","flex-row","flex-row-reverse","flex-col","flex-col-reverse"];
const JustifyContent = ["0","justify-start","justify-end","justify-center","justify-between","justify-around","justify-evenly"];
const flexwrap = ["0","flex-wrap","flex-nowrap","flex-wrap-reverse"];
const alignitems = ["0","items-start","items-end","items-center","items-baseline","items-stretch"];
const aligncontent = ["0","content-center","content-start","content-end","content-between","content-around","content-evenly","content-baseline"];

const flexbox = [0, flexDirection, JustifyContent, flexwrap, alignitems, aligncontent];

const hidearray = [
    document.getElementById("bodyhide"),
    document.getElementById("block1hide"),
    document.getElementById("block2hide"),
    document.getElementById("block3hide"),
    document.getElementById("block4hide")
];

let counter = [0,0,0,0,0];

for (let i = 0; i < 5; i++) hide(i);

function hide(e){
    counter[e]++;
    if(counter[e] % 2 === 0){
        hidearray[e].style.display = "block";
        rotatefun(e,0);
    } else {
        hidearray[e].style.display = "none";
        rotatefun(e,1);
    }
}

function rotatefun(e,i){
    const icon = document.getElementById(`i${e}`);
    icon.style.transform = i === 0 ? "rotate(90deg)" : "rotate(0deg)";
}

submit.onclick = () => {

    for (let i = 1; i < 6; i++) removeclass(i);

    if(poo.value === "0") bodys.classList.remove("flex");
    else bodys.classList.add("flex");

    if(poi.value !== "0") bodys.classList.add(flexDirection[poi.value]);
    if(pot.value !== "0") bodys.classList.add(JustifyContent[pot.value]);
    if(poe.value !== "0") bodys.classList.add(flexwrap[poe.value]);
    if(por.value !== "0") bodys.classList.add(alignitems[por.value]);
    if(pof.value !== "0") bodys.classList.add(aligncontent[pof.value]);

    for (let i = 0; i < 4; i++){
        for (let j = 0; j < 4; j++){
            let temp = boxarray[i][j].value;
            let cls = boxclassarray[j][temp];
            removeclassforbox(i,j);
            if(temp !== "0") box[i].classList.add(cls);
        }
    }
}

function removeclass(e){
    for (let i = 1; i < 10; i++){
        bodys.classList.remove(flexbox[e][i]);
    }
}

function removeclassforbox(a,b){
    for (let i = 1; i < 10; i++){
        if(boxclassarray[b][i]){
            box[a].classList.remove(boxclassarray[b][i]);
        }
    }
}



