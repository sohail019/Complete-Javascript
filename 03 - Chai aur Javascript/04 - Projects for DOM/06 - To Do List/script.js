const addButton = document.querySelector('#add')  
const tasks = document.querySelector('#tasks')

addButton.addEventListener('click', function(e) {
  if (document.querySelector('#newTask input').value.length == 0) { // checks if the input field for a new task is empty
    alert('Please Enter The Task') // if empty alert a message
  } else { 
    // if not empty, add HTML elements (a task item and a delete button) to the 'tasks' container
    tasks.innerHTML += `
      <div class="task">
        <li id="taskName"><i class="bi bi-arrow-right"></i>
          ${document.querySelector('#newTask input').value}
        </li>
        <button class="delete">
          <i class="bi bi-trash" style="color:red; font-size: 16px"></i>
        </button>
      </div>
    `
  }

  // Delete Button Functionality
  const deleteButton = document.querySelectorAll(".delete") // selects all the elements with a class

  for (let i = 0; i < deleteButton.length; i++) { // setup loop that goes through each of these elements one by one.
    deleteButton[i].onclick = function() { 
      this.parentNode.remove()
    }
  }

  // Task Completed
  const task = document.querySelectorAll('.task')

  for (let i = 0; i < task.length; i++) {
    task[i].onclick = function() {
      this.classList.toggle('completed')
    }
  }

  const deleteAll = document.querySelector('#deleteAll')

  deleteAll.addEventListener('click', function() {
    tasks.innerHTML = ''
  })
})

