const todoInput = document.querySelector('.todo-input')
const todoDiv = document.querySelector('.todos')
const button = document.querySelector('button')
const form = document.querySelector("form")
const msg = document.querySelector('.msg')
const showMsg = document.querySelector('.message')
const selBox = document.querySelector(".select")

form.addEventListener("submit", addTodo )
todoDiv.addEventListener("click", updateTodo)


function addTodo (e) {
    e.preventDefault()
        if(todoInput.value === ""){
            msg.style.display = "flex"
            msg.style.background = "white"
            msg.style.color = "red"

            setTimeout(() => {
            msg.style.display = "none"
            }, 3000);

            showMsg.innerText = "User can't submit an empty field!"
        }   
        else{
            const myTodo = document.createElement('div')
            myTodo.classList.add("list") 
            myTodo.innerText = todoInput.value
            
            // ADD TODOS TO LOCALSTORAGE
          localDatabase(todoInput.value)
            const icon = document.createElement('li')
            icon.classList.add('icons')
            icon.innerHTML = `<ion-icon class="check" name="checkmark-outline"></ion-icon>
            <ion-icon class="delete" name="close-outline"></ion-icon>`
            myTodo.appendChild(icon)
            todoDiv.appendChild(myTodo)
            todoInput.value = ""
        
        }
}

function updateTodo(e){
   const element = e.target 
   if(element.classList[0] === "delete"){
        const parentEl = element.parentElement.parentElement;
        parentEl.remove()
        RemoveTodo(parentEl)  
    }
    if(element.classList[0] === "check"){
        const parentEl = element.parentElement.parentElement;
        parentEl.classList.toggle('completed')
       msg.style.display = "flex"
       msg.style.background = "white"
       msg.style.color = "red"
       setTimeout(()=>{
        msg.style.display = "none"
       }, 3000);
       showMsg.innerText = "You have successfully added a Todo!"
       element.style.display = "none";
    }
}



selBox.addEventListener("click", searchTodos)


function searchTodos (e){
    
    const selector = e.target.value
    const todos = todoDiv.childNodes
    todos.forEach(todo=>{
        console.log(todo);
        switch (selector) {
            case "all":
            todo.style.display = "flex"
                break;
            case "successful":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex"
                } else{
                    todo.style.display = "none"
                }
                break;
            case "Uncompleted":
                if (!todo.classList.contains("completed")){
                    todo.style.display = "flex"
                }  
                else{
                    todo.style.display = "none"
                }     
                break;
        }
    })
}


const localDatabase = (localTodo)=>{
    let todos;
    if(localStorage.getItem("Todos") === null){
        todos = []
    } else{
        todos = JSON.parse(localStorage.getItem("Todos"))
     
    }
    todos.push(localTodo)
    localStorage.setItem("Todos", JSON.stringify(todos))
}


const displayTodo = ()=>{
    let todos ;
    if(localStorage.getItem("Todos") === null ){
        todos = []
    }
    else{
        todos = JSON.parse(localStorage.getItem("Todos"))
    }
    todos.map((todo)=>{
        const myTodo = document.createElement('div')
        myTodo.classList.add("list") 
        myTodo.innerText = todo
        
        const icon = document.createElement('li')
        icon.classList.add('icons')
        icon.innerHTML = `<ion-icon class="check" name="checkmark-outline"></ion-icon>
        <ion-icon class="delete" name="close-outline"></ion-icon>`
        myTodo.appendChild(icon)
        todoDiv.appendChild(myTodo)
        
    
    })
}

document.addEventListener("DOMContentLoaded", displayTodo)


const RemoveTodo = (todo)=>{
    let todos ;
    if(localStorage.getItem("Todos") === null ){
        todos = []
    }
    else{
        todos = JSON.parse(localStorage.getItem("Todos"))
    }
    const targetTodo = todo.innerText
    todos.splice(todos.indexOf(targetTodo), 1)
    localStorage.setItem("Todos", JSON.stringify(todos))
} 


const array = ["A", "b", "c"]

console.log(array.splice(array.indexOf("b"),1));
console.log(array);








// const newDive = document.querySelector(".test")

 
// newDive.addEventListener("click", newD)

// function newD(e){
//     console.log(e.target);
//     const newE = e.target
//     if(newE.innerHTML == newE.innerHTML){
//         alert(`You clicked ${newE.innerHTML}`)
//     }
//     return
// }




// function matD (a, b, c, d){
//     const matt =  c + d
//     console.log(matt);
// }

// matD(2, 4, 4, 9)

// function matM (x, y, t, r){
//     const mult = x*r*y
//     console.log(mult);
// }
// matM(3,9,2,4)





// function words(){
//     const firstWord = "Java"
//     const lastWord = "Script"
//     javaS(firstWord, lastWord)
// }

// words()




// const numbers = [1,2,3,4,5,6]

// const sum = numbers.reduce((number, sum)=>{
//     return number+sum
// },0)

