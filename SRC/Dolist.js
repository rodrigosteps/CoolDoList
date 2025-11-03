

const AddNewTask = document.getElementById("AddTask");//Task const
const getTask = document.getElementById("TaskInput");//take the user input 
const NoTaskAlert = document.getElementById("NoTask")// If no task is add show an alert

function NewTask() {//main function
  //Verify if input is empty
  if (getTask.value !== "") {
    //Create a element for new task
    const tasks = document.createElement("ul");
    tasks.classList.add("Tasklist")
    document.getElementById("Tasks").appendChild(tasks)

    const taskText = document.createElement("li")
    taskText.innerText = getTask.value;
    tasks.appendChild(taskText);

    const doneBtn = document.createElement("button")
    doneBtn.id = "doneCheck";
    doneBtn.textContent = "✔";
    tasks.appendChild(doneBtn);

    const removeBtn = document.createElement("button")
    removeBtn.id = "removeCheck";
    removeBtn.textContent = "X";
    tasks.appendChild(removeBtn);

    //clear input field after add new task
    getTask.value = "";

    //Line to clear no task alert
    NoTaskAlert.textContent = "";

    //function to revome task already done
    function taskRemove() {
      tasks.remove();
    }

    removeBtn.addEventListener('click', taskRemove)

    function taskDone() {
      tasks.classList.toggle('TaskDone')
    }

    doneBtn.addEventListener('click', taskDone)

  }

  else {
    // If no task is add show an alert
    NoTaskAlert.textContent = "Add a New task!";
  }
}

//Trigger Event
AddNewTask.addEventListener("click", NewTask);

//Keyboard function
getTask.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    NewTask();
  }
})
