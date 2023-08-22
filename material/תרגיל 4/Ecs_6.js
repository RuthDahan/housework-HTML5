let start = end = theEnd = 0;
let arr = [];

function ReadFiles(e) {
    let imgs = e.target.files;
    let myimg = imgs[0];
    let reader = new FileReader();
    if (myimg.type.match("image*")) {
        reader.onload = function (e) {
            if ((end - start) <= 7) {
                let newImg = document.createElement("img");
                newImg.src = e.target.result; 
                newImg.addEventListener("click", () => document.getElementById("bigImg").src = newImg.src);
                document.getElementById("sec1").appendChild(newImg);
                end++;
            }
            arr[theEnd] = e.target.result;
            theEnd++;
        }
        
    }
    else{
        alert("This file isn't an image")
}
reader.readAsDataURL(myimg);
}



function Next() {
    if (end < theEnd) {
        end++;
        start++;
        for (let index = start, child = 0 ; index < end; index++, child++) {
            document.getElementById("sec1").children[child].src = arr[index];            
        }
    }
    else{
        alert("There are no additional pictures!");
    }
}

function Previous() {
    if (start != 0) {
        start--;
        end--;
        for (let index = start, child = 0 ; index < end; index++, child++) {
            document.getElementById("sec1").children[child].src = arr[index];            
        }
    }
    else{
        alert("No previous pictures!");
    }
}
