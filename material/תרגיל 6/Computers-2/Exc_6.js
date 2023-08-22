class Computer {
    constructor(id, model, company, cpuType, cpuSpeed, storage, installedSoftware, price) {
         this.id = id;
         this.model = model;
         this.company = company;
         this.cpuSpeed = cpuSpeed;
         this.cpuType = cpuType;
         this.storage = storage;
         this.installedSoftware = installedSoftware;
         this.price = price;
    }


    Print() {
        return `About Computer: <br>
        Id: ${this.id}
        Model: ${this.model}
        Company: ${this.company}
        CPU Speed: ${this.cpuSpeed}
        CPU Type: ${this.cpuType}
        storage: ${this.storage}
        Install Software: ${this.installedSoftware}
        Price: ${this.price}`;
    }


    static BestSpeed(comp1, comp2) {
        return comp1.cpuSpeed > comp2.cpuSpeed ?
         speed1.model : speed2.model;
    }
    
    static Beststorage(comp1, comp2) {
        return comp1.storage > comp2.storage? 
        comp1.model : comp2.model;
    }
    
    EmptyStorage(fullstorage) {
        return this.storage - fullstorage >=0?
        this.storage - fullstorage:  alert("Error!!");
    }

}

class Laptop extends Computer {
    constructor(id, model, company, cpuType, cpuSpeed, storage, installedSoftware, price, size, isTouchScreen) {
        super(id, model, company, cpuType, cpuSpeed, storage, installedSoftware, price)
        this.size = size;
        this.isTouchScreen = isTouchScreen;
        //this.priceCalculation());
    }
    
    Print() {
        return `${super.Print()} 
        Size: ${this.size}
        Touch Screen: ${this.isTouchScreen}`;
    }

    priceCalculation(){
        return this.isTouchScreen? this.price * 1.05: this.price;
    }

}
const cpuType = ["i3" ,"i5", "i7", "i9"];
const size = [15, 17, 19];

let Computers = [];
Computers[0] = new Computer(1, "modelA", "Lenovo", cpuType[3], 40, 500, [" Offic", " Netbeans", " PyCharm", " Visul Studio 2022"], 2000);
Computers[1] = new Computer(2, "modelB", "HP", cpuType[2], 60, 300, [" PyCharm", " Visul Studio 2022"], 3000);
Computers[2] = new Computer(3, "modelD", "Lenovo", cpuType[0], 40, 500, [" Offic", " PyCharm", " Visul Studio 2022"], 5000);
Computers[3] = new Laptop(4, "modelC", "Lenovo", cpuType[1], 50, 400, [" Offic", " Netbeans", " PyCharm"], 4000, size[1], true);
Computers[4] = new Laptop(5, "modelE", "Dell", cpuType[3], 50, 200, [" Offic", " Netbeans", " Visul Studio 2022"],3000, size[2], false);


//מציב ראש
 document.body.innerHTML += `<div id="links"></div>`
//כפתור
document.body.innerHTML += `<button id="sort" onClick ="Sort()">Sort</button>`;
//תוכן
 document.body.innerHTML += `<div id="computers-details"></div>`;



 function ShowLinks(){
    for (let i = 0; i < Computers.length; i++) {
    let link = document.createElement("a");
    link.text = `${Computers[i].model}`;
    link.dataset.index = i;
    link.href = `Javascript:PrintDetails(${link.dataset.index})`;
    link.addEventListener("mouseover", ()=>{link.style.color = "red"});
    link.addEventListener("mouseout", ()=>{link.style.color = "blue"});
    let div = document.createElement("div");
    div.appendChild(link);
    document.getElementById("links").appendChild(div);
    document.getElementById("links").appendChild(document.createElement("br"));
   
}}

function PrintDetails(i){
    document.getElementById("computers-details").innerHTML = `<p>${Computers[i].Print()}</p>`;
}

function Sort(){
    let l10nHE = new Intl.Collator("he");
    Computers.sort((a,b) => l10nHE.compare(a.company, b.company))
    console.log(Computers);
    document.getElementById("links").innerHTML = "";
    ShowLinks();
}
ShowLinks();

 



//lesson 5
// for (let i = 0; i < Computers.length; i++) {
//     let link = document.createElement("a");
//     let br = document.createElement("br");
//     link.text = Computers[i].model;
//     link.dataset.index = i;
//     link.href = `Javascript:PrintDetails(${link.dataset.index})`
//     document.getElementById("links").appendChild(link);
//     document.getElementById("links").appendChild(br);
   
// }

// function PrintDetails(i){
//     document.getElementById("computers-details").innerHTML = `<p>${Computers[i].Print()}</p>`;
// }


