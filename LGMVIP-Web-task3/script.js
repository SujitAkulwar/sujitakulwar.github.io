var gender = "";
var cpp="",python="",java="",img='';
var c1=0,c2=0,c3=0;
var right = document.getElementById("right");
var skill = "";

function setcpp(){
    c1++;
    if(c1%2==1){
        cpp="c++";
    }else{
        cpp="";
    }
}

function setjava(){
    c2++;
    if(c2%2==1){
        java="java";
    }else{
        java="";
    }
}

function setpython(){
    c3++;
    if(c3%2==1){
        python="python";
    }else{
        python="";
    }
}

function setgender(x){
    gender = x;
}
function formValidation(){
    console.log("hello");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var website = document.getElementById("website").value;
    img = document.getElementById("imglink").value;
    setSkill();
    console.log(name,email,website,gender,skill);
    if(name!=null && name!="" &&  email!=null && email!="" && website!=null && website!="" && gender!="" && gender!=null && skill!="  " && skill!="" && img!=""){
        ADDdata(name,email,website,gender,skill,img);
    }
    else{
        alert("fill complete form !")
    }
}

function ADDdata(name,email,website,gender,skill,img){
    const ul = document.createElement("ul");
    ul.innerHTML = 
    `<li>
        <p>Name : `+name+`</p>
        <p>Email : `+email+`</p>
        <p>website : `+website+`</p>
        <p>Gender : `+gender+`</p>
        <p>skill : `+skill+`</p>
    </li>
    <li>
        <img src="`+img+`" alt="">
    </li>`
    right.append(ul);
    resetValues();
}

function resetValues(){
    skill = "";
}

function setSkill(){
    if(cpp==""){
        if(java==""){
            if(python==""){
                //null value
            }else{
                skill = python;
            }
        }else{
            if(python==""){
                skill = java;
            }else{
                skill = java + ", " + python;
            }
        }
    }else{
        if(java==""){
            if(python==""){
                skill = cpp;
            }else{
                skill = cpp + ", " + python;
            }
        }else{
            if(python==""){
                skill = cpp + ", " + java;
            }else{
                skill = cpp + ", " + java + ", " + python;
            }
        }
    }
}