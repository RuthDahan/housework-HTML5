
 function drag(ev) { 
    ev.dataTransfer.setData("Text", ev.target.id); 
    ev.dataTransfer.effectAllowed = "move"; 
    ev.srcElement.style.top = ev.y + "px"; 
    ev.srcElement.style.left = ev.x + "px"; 
    } 

 function allowDrop(ev) { 
    ev.preventDefault(); 
    } 

let count =0;
 
 function drop(ev) { 
    ev.preventDefault(); 
    let data = ev.dataTransfer.getData("Text"); 
   if(document.getElementById(data).dataset.pazel == ev.target.id){
    ev.target.appendChild(document.getElementById(data));
    count++;
   }

    if(count==9){
        document.getElementById("win").play();
        document.getElementById("h").innerHTML="very good!!!!";
        }
 }

 