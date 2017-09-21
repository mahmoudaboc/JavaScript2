const myList = 'Make homework. Brush teeth. Buy a pony. Call my mother. Make a todo list.'
const listSp = myList.split(".").slice(0, -1)
console.log(listSp);

let mainList = document.createElement("ul")
document.body.appendChild(mainList)


for ( i in listSp) {
    let listChild = document.createElement("li")
    mainList.appendChild(listChild);
    listChild.innerHTML = listChild.innerHTML + listSp[i]
     
}