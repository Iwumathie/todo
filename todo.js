const todoInput = document.querySelector('.todo-input')
const todoDiv = document.querySelector('.todos')
const button = document.querySelector('button')
const form = document.querySelector("form")
const msg = document.querySelector('.msg')
const showMsg = document.querySelector('.message')

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
       element.style.display = "none"
    }
}





