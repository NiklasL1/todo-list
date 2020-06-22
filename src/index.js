let editTitle = document.getElementById('listTitle');
editTitle.ondblclick = function () {
  this.removeAttribute('readonly');
};

const addItemButton = document.getElementById('addItemButton');

addItemButton.addEventListener("click", () => {  
  const addItemInput = document.getElementById('addItemInput');
  let newTodo = new todoItem(addItemInput);
  TodoList1.addTodo(newTodo);
  console.log(TodoList1);
});

class todoItem {
  constructor (content, index) {
    this.content = content;
    this.index = TodoList1.todoArray[index];
    this.highPriority = false;
  }
};

class todoList {
  constructor (title, todoArray = []) {
    this.todoArray = todoArray;
    this.title = title;
  }

  addTodo(content) {
  this.todoArray.unshift(new todoItem(content));
  if (addItemInput.value === "") {
    alert("Cannot add empty item!");
  }
  else {
    const insertItem = document.getElementById("insertItem");
            
    insertItem.insertAdjacentHTML("afterbegin",
      `<li class= "container row">
      <div class="col-2 bg-light border d-flex align-middle justify-content-center">   
        </div>
        <div class="col-10 bg-light border align-middle todoItem">
          ${addItemInput.value}
        </div>
        </li>`); 
        
    let node = document.createElement("SPAN");     
    node.addEventListener("click", () => {
      const removal = document.getElementById("removal")
      removal.parentNode.parentNode.parentNode.parentNode.removeChild(removal.parentNode.parentNode.parentNode);      
    });
    node.insertAdjacentHTML("afterbegin",
    `<i class="p-2 fa fa-trash" id="removal" aria-hidden="true"></i>`);      
    document.querySelector(".col-2").appendChild(node);
    
    let node2 = document.createElement("SPAN");    
    node2.addEventListener("click", () => {
      alert("check");      
    });
    node2.insertAdjacentHTML("afterbegin",
    `<i class="p-2 fa fa-check-square" aria-hidden="true"></i>`);      
    document.querySelector(".col-2").appendChild(node2);
    
    let node3 = document.createElement("SPAN");    
    node3.addEventListener("click", () => {
      alert("edit");      
    });
    node3.insertAdjacentHTML("afterbegin",
    `<i class="p-2 fa fa-pencil" aria-hidden="true"></i>`);      
    document.querySelector(".col-2").appendChild(node3); 

    document.getElementById('addItemInput').value = "";
  }
  }

  deleteTodo(index) {
  this.todoArray.splice(index, 1)
  }

  editTodo(index, content) {  
  this.todoArray[index] = content
  }
  
};

let TodoList1 = new todoList("TodoList1")