const btn = document.querySelector('#btn');
const s1 = document.querySelector('#card_type1')
const s2 = document.querySelector('#card_type2')
btn.onclick = (event) => {
    
    if(s1.selectedIndex==1&&s2.selectedIndex==2)
    {
        window.location.href = "http://127.0.0.1:5500/djren.html"
    }
    else if(s1.selectedIndex==0||s2.selectedIndex==0){
        alert("Please enter correct choice!!!");
    }
    else{
        alert("books for these section are not uploaded yet, please check after some time");
    }
};