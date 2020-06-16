let editTitle = document.getElementById('listTitle');
editTitle.ondblclick = function(){
  this.removeAttribute('readonly');
};

let addItemButton = document.getElementById('addItemButton');
let addItemInput = document.getElementById('addItemInput');

addItemButton.addEventListener("click", (event) => {
  if (addItemInput.value === "") {
    alert("Cannot add empty item!");
  }
  else {
    document.getElementById("insertItem").innerHTML += `<div class="row">
    <div class="col-2 border align-middle">"icons go here"</div>
    <div class="col-10 border align-middle">${addItemInput.value}</div></div>`;
  }      
});