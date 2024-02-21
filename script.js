const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

const todos = JSON.parse(localstorage.getItem('todos'))

if(todos){
    todos.forEach(todo => addTodo(todo))}
    form.addEventListener('submit',(e)=>{e.preventDefault()
    addTodo()
  })

function addTodo(todo){
    let todoText=input.value
    if (todoText){
        const todoE1=document.createElement('li')}
    if (todo && todo.completed){    
        todoE1.classlist.add('completed') }}

todoE1.innerText=todoText  
todoE1.addEventListener('click' ,()=>{todoE1.classlist.toggle('completed')
updateLS()
    })

todoE1.addEventListener('contextmenu',(e)=>{e.preventDefault()
todoE1.remove()
updateLS()
})

function updateLS() {
    todoE1=document.querySelectorAll('li')
    const todo =[]
    todosE1.forEach(todoE1 =>{todos.push({text : todoE1.innerText , completed: todoE1.classlist.contains('completed')})})

localStorage.setItem('todos' , JSON.stringify(todos))
}
