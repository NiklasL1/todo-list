let editTitle = document.getElementById('listTitle');
editTitle.ondblclick = function () {
  this.removeAttribute('readonly');
};

const addItemButton = document.getElementById('addItemButton');

addItemButton.addEventListener("click", () => {  
  const addItemInput = document.getElementById('addItemInput');
  let newTodo = new todoItem(addItemInput);
  TodoList1.addTodo(newTodo);
  //console.log(TodoList1);
});

//Class for individual todo items

class todoItem {
  constructor (content, index) {
    this.content = content;
    this.index = TodoList1.todoArray[index];
    this.highPriority = false;
  }
};

//Class for the whole todo list

class todoList {
  constructor (title, todoArray = []) {
    this.todoArray = todoArray;
    this.title = title;
  }
  
//Adding a Todo Item

  addTodo(content) {
  this.todoArray.unshift(new todoItem(content));
  
  //Checking that the input field is not empty
  
  if (addItemInput.value === "") {
    alert("Cannot add empty item!");
  }
  else {

    //Inserting a list item with two columns: the icons and the
    //content of the input field

    const insertItem = document.getElementById("insertItem");
            
    insertItem.insertAdjacentHTML("afterbegin",
      `<li class= "container row">      
      <div class="col-2 bg-light border d-flex align-middle justify-content-center">   
        </div>
        <div class="col-10 bg-light border align-middle todoItem">
          ${addItemInput.value}
        </div>        
        </li>
        `);                     
    
    //Creating a node for the delete button

    let node = document.createElement("SPAN");     
    
    node.insertAdjacentHTML("afterbegin",
    `<i class="p-2 fa fa-trash" id="removal" id="removetodo" aria-hidden="true"></i>`);      
    document.querySelector(".col-2").appendChild(node);
    
    let removal = document.getElementById("removal");
    console.log(removal); 

    //Adding an event listener to delete the parent row of the delete
    //button when it is clicked

    removal.addEventListener("click", function(e){
      TodoList1.deleteTodo(e.target.parentElement.parentElement.parentElement);
    });      
    
    //Creating a node for the check button

    let node2 = document.createElement("SPAN");    
    
    node2.insertAdjacentHTML("afterbegin",
    `<i class="p-2 fa fa-check-square" id="check" aria-hidden="true"></i>`);      
    document.querySelector(".col-2").appendChild(node2);
    

    let check = document.getElementById("check");
    console.log(check); 

    //Adding an event listener to change the style of the parent row
    //when it is clicked
    check.addEventListener("click", (e) => {
      TodoList1.checkTodo(e.target.parentElement.parentElement.parentElement);      
    });
    
    
    //Creating a node for the edit button

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

  //Method to delete a todo item

  deleteTodo(todoItem) {
  //this.todoArray.splice(index, 1)
  console.log(todoItem);
  todoItem.remove();
}

  //Method to edit a todo item

  editTodo(index, content) {  
  //this.todoArray[index] = content
  }

  //Method to check a todo item
  checkTodo(todoItem) {
    console.log(todoItem);
    todoItem.style.color = "#a7b5cc";
    todoItem.style.textDecoration = "line-through";
  }


};

let TodoList1 = new todoList("TodoList1")
