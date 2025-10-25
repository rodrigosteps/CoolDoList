
const AddNewTask = document.getElementById("AddTask");//Task const
const getTask = document.getElementById("TaskInput");//take the user input 
const NoTaskAlert = document.getElementById("NoTask")// If no task is add show an alert

function NewTask(){//main function

if (getTask.value !== "" ){ //Verify if input is empty

    const TaskIn = document.createElement("li")//Create a element for new task
    
    document.getElementById('Tasklist').appendChild(TaskIn)
    TaskIn.textContent = getTask.value;
    getTask.value="";//clear input field after add new task
    NoTaskAlert.textContent="";//clear no task alert
}

else{
    NoTaskAlert.textContent="Add a New task!";// If no task is add show an alert
}
}

//Trigger Event
AddNewTask.addEventListener("click",NewTask);

//Keyboard function
getTask.addEventListener('keydown',function(event){
    if(event.key === 'Enter'){
        event.preventDefault();
        NewTask();
    }
})