// Selecting the Add-Items
const input = document.getElementById("input");




// Selecting the List
const list = document.getElementById("list");

function addToDo() {
    const newToDo = `<li class="item">
    <i class="p-2 fa fa-check-square fa-1" aria-hidden="true" job="checked"></i>
    <i class="p-2 fa fa-trash fa-1" aria-hidden="true" job="delete"></i> 
    <p class="text">${toDo}</p>   
    </li>`
    
    const position = "afterbegin";
    
    list.insertAdjacentHTML(position, newToDo);
}
addToDo("Hello");

document.addEventListener("keyup", function(event) {
    if(event.keyCode == 13) {
        const toDo = input.value;
        if(toDo) {
            addToDo(toDo);
            input.value = "";
        }
    }
})





// let editTitle = document.getElementById('listTitle');
// editTitle.ondblclick = function(){
//   this.removeAttribute('readonly');
// };

// let addItemButton = document.getElementById('addItemButton');
// let addItemInput = document.getElementById('addItemInput');

// addItemButton.addEventListener("click", (event) => {
//   if (addItemInput.value === "") {
//     alert("Cannot add empty item!");
//   }
//   else {
//     document.getElementById("insertItem").innerHTML += `<div class="row">
//     <div class="col-2 border align-middle d-flex justify-content-center">
//     <i class="p-2 fa fa-check-square fa-1" aria-hidden="true"></i>
//     <i class="p-2 fa fa-trash fa-1" aria-hidden="true"></i>    
//     </div>
//     <div class="col-10 border align-middle" id="editItem">${addItemInput.value}</div></div>`;

//     document.getElementById('addItemInput').value = "";
//   }      
// });

// let editItem = document.getElementById('editItem');

// editItem.addEventListener("click", () => {

// }