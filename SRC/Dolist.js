

const AddNewTask = document.getElementById("AddTask");//Task const
const getTask = document.getElementById("TaskInput");//take the user input 
const NoTaskAlert = document.getElementById("NoTask")// If no task is add show an alert


function NewTask(){//main function
    //Verify if input is empty
    if (getTask.value !== "" ){ 
        //Create a element for new task
        const taskIn = document.createElement("li");
        
        //Remove Task if done
        const taskRemove = document.createElement("button");
        taskRemove.textContent='X';

        //marker the task if done
        const taskMarked = document.createElement("button");
        taskMarked.textContent="Done"

        //Add the task on list
        document.getElementById('Tasklist').appendChild(taskIn)
        taskIn.textContent = getTask.value;
        taskIn.prepend(taskRemove);

        //clear input field after add new task
        getTask.value="";      

        //Line to clear no task alert
        NoTaskAlert.textContent="";
        
        //function to revome task already done
        function taskDone(){
            taskIn.remove();
        }
        taskRemove.addEventListener('click', taskDone)
    }
    
    else{
        // If no task is add show an alert
        NoTaskAlert.textContent="Add a New task!";
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