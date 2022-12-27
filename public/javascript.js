let i = 0;
const newtext = "";
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
    
    document.querySelector(".date").textContent = day;
    document.querySelector(".month").textContent = month;
    document.querySelector(".year").textContent = year;
    document.querySelector(".weekday").textContent = week;
}
let count = 0;
function addlist(){
    const a = document.querySelector(".textinput");
    if(a.value != ""){
        count++;
        //const list = "<label class='container'><p class='list'>"+ a.value +"</p><input type='checkbox' checked><div class='checkmark'></div></label>";
        const list = "<div class='list' id='"+count+"'><input type='checkbox' id='check' onclick='deletethis(this.value)' value='"+count+"' class='form-check-input'><label for='check'>"+ a.value +"</label></div>";
        document.querySelector(".container-input").innerHTML += list;
        a.value = "";
    }else{
        alert("Please input!")
    }
}

function deletethis(a){
    const divs = document.getElementById(a);
    divs.remove();
}