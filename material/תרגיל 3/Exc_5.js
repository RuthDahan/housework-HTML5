Update();

function local(name) {
    localStorage.setItem(name, document.getElementById(name).value);
//    sessionStorage.setItem(name)=null;
}
function session(name) {
    sessionStorage.setItem(name, document.getElementById(name).value);
//    localStorage.setItem(name)=null;
}

function Update(){
    if (sessionStorage.getItem("background-color") != null) {
        document.body.style.backgroundColor = sessionStorage.getItem("background-color");
    }
    else if (localStorage.getItem("background-color") != null) {
        document.body.style.backgroundColor = localStorage.getItem("background-color");
    }
    if (sessionStorage.getItem("font-color") != null) {
        document.body.style.color = sessionStorage.getItem("font-color");
    }
    else if (localStorage.getItem("font-color") != null) {
        document.body.style.color = localStorage.getItem("font-color");
    }
    if (sessionStorage.getItem("font-size") != null) {
        document.body.style.fontSize = sessionStorage.getItem("font-size");
    }
    else if (localStorage.getItem("font-size") != null) {
        document.body.style.fontSize = localStorage.getItem("font-size");
    }
    if (sessionStorage.getItem("font-type") != null) {
        document.body.style.fontFamily = sessionStorage.getItem("font-type");
    }
    else if (localStorage.getItem("font-type") != null) {
        document.body.style.fontFamily = localStorage.getItem("font-type");
    }
} 


   
    



