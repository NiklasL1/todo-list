let editTitle = document.getElementById('listTitle');
editTitle.ondblclick = function(){
  this.removeAttribute('readonly');
};

let addItemButton = document.getElementById('addItemButton');
let addItemInput = document.getElementById('addItemInput');
let mainGrid = document.getElementById('mainGrid');

addItemButton.addEventListener("click", (event) => {
    event.preventDefault; 
    let addItem = addItemInput.value;
    mainGrid.insertAdjacentHTML("beforeend", '<div class="row"><div class="col-2 border align-middle"></div><div id="insertItem" class="col-10 border align-middle"></div></div>'); 
    document.getElementById("insertItem").innerHTML = addItem;
    return false;       
});