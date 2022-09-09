var submit = document.getElementById('Addbutton');
var list = document.getElementById("list");
var tasks = document.getElementById("tasks");
var counter = 2;

submit.addEventListener("click", add);

function add(){
    var text = document.querySelector('input').value;
    if(text == ""){
        alert('empty task');
    }
    else{
        console.log(text);
        const nav = document.createElement("nav");
        nav.innerHTML = `<input type="checkbox" id="check"><div id="task-name" onclick="done(this)">`+text+`</div>
        <button id="delete-task" onclick="del(this)">X</button>`;
        list.append(nav);
    }
}

function del(x){
    x.parentNode.style.display='none';
}
 