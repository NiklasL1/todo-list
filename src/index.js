let editTitle = document.getElementById('listTitle');
editTitle.ondblclick = function () {
  this.removeAttribute('readonly');
};

let addItemButton = document.getElementById('addItemButton');
let addItemInput = document.getElementById('addItemInput');

addItemButton.addEventListener("click", () => {
  if (addItemInput.value === "") {
    alert("Cannot add empty item!");
  }
  else {
    document.getElementById("insertItem").insertAdjacentHTML("afterbegin",
      `<li class="container row">    
        <div class="col-2 bg-light border d-flex align-middle justify-content-center">
          <i class="p-2 fa fa-check-square markAsDone" aria-hidden="true"></i>
          <i class="p-2 fa fa-trash" aria-hidden="true"></i>
          <i class="p-2 fa fa-pencil" aria-hidden="true"></i>
        </div>
        <div class="col-10 bg-light border align-middle todoItem">
        ${addItemInput.value}
        </div>
      </li>`);

    document.getElementById('addItemInput').value = "";
  }
});

let markAsDone = document.querySelector(".markAsDone")

if (markAsDone) {
  markAsDone.addEventListener("click", () => {
    alert("test");
  });

}