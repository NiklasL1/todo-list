let editTitle = document.getElementById('listTitle');
editTitle.ondblclick = function () {
  this.removeAttribute('readonly');
};

let d = new Date();
let hours = d.getHours();
let seconds = d.getSeconds();
let minutes = d.getMinutes();
let month = d.getMonth() + 1;
let day = d.getDate();
let year = d.getFullYear();

console.log(`time: ${hours}:${seconds}`);
console.log(`day: ${month}/${day}`);
document.getElementById("date").insertAdjacentHTML("afterbegin", `${day}/${month}/${year}, ${hours}:${minutes}`);

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
      <div class="col-2 transparent border d-flex justify-content-center">   
        </div>

        <div class="col-10 bg-light border align-middle" id="inherit">
          <input class="bg-light "id="todoText" "type="text" value="${addItemInput.value}" />

        </div>        
        </li>
        `);
        
        document.getElementById('addItemInput').value = "";
    
    //Creating a node for the delete button

    let node = document.createElement("SPAN");     
    
    node.insertAdjacentHTML("afterbegin",
    `<i class="p-2 fa fa-trash fa-2x" id="removal" aria-hidden="true"></i>`);      
    document.querySelector(".col-2").appendChild(node);
    
    let removal = document.getElementById("removal");
    console.log(removal); 

    //Adding an event listener to delete the parent row of the delete
    //button when it is clicked

    removal.addEventListener("click", function(e){      
      let r = confirm("Delete item?");
      if (r == true) {
        TodoList1.deleteTodo(e.target.parentElement.parentElement.parentElement);
      };      
    });      
    
    //Creating a node for the check button

    let node2 = document.createElement("SPAN");    
    
    node2.insertAdjacentHTML("afterbegin",
    `<i class="p-2 fa fa-check-square fa-2x" id="check" aria-hidden="true"></i>`);      
    document.querySelector(".col-2").appendChild(node2);
    

    let check = document.getElementById("check");    

    //Adding an event listener to change the style of the parent row
    //when it is clicked
    check.addEventListener("click", (e) => {
      if (check.style.color != "lightgreen") {
      TodoList1.checkTodo(e.target.parentElement.parentElement.parentElement);      
      check.style.color = "lightgreen";
      removal.style.color = "lightcoral";      
    } else if (check.style.color = "lightgreen") {
      TodoList1.uncheckTodo(e.target.parentElement.parentElement.parentElement);
      check.style.color = "green";
      removal.style.color = "red"; 
    }   
    });      

    //Creating a node for the edit button

    // let node3 = document.createElement("SPAN");    
    // node3.addEventListener("click", () => {
    //   const addItemInput = document.getElementById('addItemInput').value; 
    //  node3.parentElement.parentElement.childNodes[3].innerHTML=addItemInput;
    //  document.getElementById('addItemInput').value = "";     
    // });
    // node3.insertAdjacentHTML("afterbegin",
    // `<i class="p-2 fa fa-pencil fa-2x" id="edit" aria-hidden="true"></i>`);      
    // document.querySelector(".col-2").appendChild(node3); 
    
  }
  
  }
  //Method to delete a todo item

  deleteTodo(todoItem) {  
  console.log(todoItem);
  todoItem.remove();
}

  //Method to edit a todo item

  // editTodo(index, content) {  
  // //this.todoArray[index] = content
  // console.log(todoItem);
  // todoItem.edit()
  // }

  //Method to check a todo item
  checkTodo(todoItem) {
    console.log(todoItem);
    todoItem.style.color = "#a7b5cc";
    todoItem.style.textDecoration = "line-through";
  }

  //Method to uncheck a todo item

  uncheckTodo(todoItem) {
    console.log(todoItem);
    todoItem.style.color = "#000000";
    todoItem.style.textDecoration = "none";
  }


};

let TodoList1 = new todoList("TodoList1")