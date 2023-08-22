//א
//new object
const one = new Object();
one.id ='213554687';
one.name ='Daniel';
one.nickename='Dani';
one.bornData ='12-04-2002';

//function
function child(id, name, nickname, bornDate){
    this.id = id;
    this.name = name;
    this.nickname = nickname;
    this.bornDate = bornDate;
}
//מופע
const two = new child('214557689', 'Menachem', 'Meni', '06-10-2010');

//literal 
const three = {
    id: '12345678',
    name: 'David',
    nickname: 'Dodi',
    bornDate: '21-08-2019'
};

//ב
const childrenArr = [one, two, three];

//ג
child.prototype.printObj = function(){
    return `
    id: ${this.id}\n
    name: ${this.name}\n
    nickname: ${this.nickname}\n
    born date: ${this.bornDate}`

};
//ד

document.body.innerHTML =
`<table border="1">
<thead>
        <th>Id</th>
        <th>Name</th>
        <th>NickName</th>
        <th>BornDate</th>
</thead>
<tbody></tbody>
</table>`;
childrenArr.forEach(child => {
        document.querySelector("tbody").insertAdjacentHTML('afterbegin',
       `<tr>
        <td>${child.id}</td>
        <td>${child.name}</td>
        <td>${child.nickname}</td>
        <td>${child.bornDate}</td>
        </tr>`);
    });
