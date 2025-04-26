const taskName = document.querySelector('#task') // input field for task name
const errorTask = document.querySelector('.err-task') // error msg of task name 
const taskTime = document.querySelector('#time') // input field for time
const errorTime = document.querySelector('.err-time') // error msg of time
const addTaskBtn = document.querySelector('.add-task-btn') // task adding button 
const taskSection = document.querySelector('.task-section') // task appending section

tasks = [] // task holding array of objects 


addTaskBtn.addEventListener('click', function() {
    // check for validity 
    if (!taskName.value) {
        errorTask.textContent = "Task Name can't be empty";
        return;
    }
    if (!taskTime.value) {
        errorTime.textContent = "Time can't be empty";
        return;
    }
    // create elements 
    const task = document.createElement('div')
    const name = document.createElement('p')
    const time = document.createElement('p')
    const removeBtn = document.createElement('button')
    // set class for parent 
    task.classList.add('all-task')
    // set text content for the elements 
    name.textContent = `Task Name: ${taskName.value}`
    time.textContent = `Time: ${taskTime.value}`
    removeBtn.textContent = '×'
    
    tasks.push({
        'taskName': taskName.value,
        'taskTime': taskTime.value
    }) // add task to the array 
    taskSection.appendChild(task) // append the wrapper in the task section 
    // append all elements to the parent
    task.appendChild(name)
    task.appendChild(time)
    task.appendChild(removeBtn)
    
    // clear error message if valid 
    errorTask.textContent = '';
    errorTime.textContent = '';
    console.log(tasks)
    
    // remove task
    removeBtn.addEventListener('click', (e) => e.target.parentElement.remove())
})