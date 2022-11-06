let i = 0;
const newtext = "";
date();
function hover(){
    document.getElementById("s-box").style.transform = " scale(0.987, 0.97)";
    document.getElementById("c-box").style.boxShadow = " 0px 0px 30px 1px rgba(0, 255, 117, 0.30)";
}  
function out_hover(){
    document.getElementById("s-box").style.transform = " scale(1)";
    document.getElementById("c-box").style.boxShadow = "";
}

function date(){
    const date = new Date().toLocaleDateString('en-us',{weekday:"long", month:"long", day:"numeric", year:"numeric"});
    const week = new Date().toLocaleDateString('en-us',{weekday:"long"});
    const day = new Date().toLocaleDateString('en-us',{day:"numeric"});
    const month = new Date().toLocaleDateString('en-us',{month:"short"});
    const year = new Date().toLocaleDateString('en-us',{year:"numeric"});
    
    /*
    let month = date.getMonth();
    let day = date.getDay() - 1;
    let year = date.getFullYear();
    let days = date.getUTCDay();
    alert(month + "/" + day + "/" + year);
    document.querySelector(".text-time").innerHTML = date;*/
}

function Additem(){
    var item = document.getElementById("txt").value;

    const newChild = document.createElement('div');
    newChild.className = 'item';
    newChild.innerHTML = '<input type="checkbox" class="form-check-input" id="checkbox">' 
                        +'<p class="p2">'+item+'</p>'
                        + '<img src="pictures/delete-60.png" class="dltpic">';

    const newChild2 = document.createElement('div');
    newChild.className = 'del';
    newChild.innerHTML.appendChild(newChild);
    

    if(item != ""){
        i++;
        document.getElementById('taskbox').appendChild(newChild2);
    }
}