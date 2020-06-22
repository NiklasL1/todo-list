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
    const deleteTodo = document.querySelector(".deleteTodo");
    let node = document.createElement("LI");        
    node.insertAdjacentHTML("afterbegin",
      `<div class= "container row">
      <div class="col-2 bg-light border d-flex align-middle justify-content-center">
          <i class="p-2 fa fa-check-square markAsDone" aria-hidden="true"></i>
          <i class="p-2 fa fa-trash deleteTodo" aria-hidden="true"></i>
          <i class="p-2 fa fa-pencil" aria-hidden="true"></i>
        </div>
        <div class="col-10 bg-light border align-middle todoItem">
          ${addItemInput.value}
        </div>
        </div>`);    
    insertItem.appendChild(node);

    deleteTodo.addEventListener("click", () => {
      alert("test");
    
    console.log(deleteTodo);
    });

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
