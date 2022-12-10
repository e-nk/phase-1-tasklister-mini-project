document.addEventListener("DOMContentLoaded", () => {
  // your code here

  //get html form and lists
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks")

  //form submit event
  form.addEventListener("submit", addTask);

  //delete event
  taskList.addEventListener("click", removeTask);

  //function to add task
  function addTask(e) {
    e.preventDefault();

    //getting user input
    const descriptionInput = document.getElementById("new-task-description");
    console.log(descriptionInput);

    //create a li element
    const li = document.createElement("li");

    //adding text input
    li.appendChild(document.createTextNode(descriptionInput));

    //creating a delete button
    const deleteButton = document.createElement("button")

    //add text to delete button
    deleteButton.appendChild(document.createTextNode("X"));

    //add button to li
    taskList.appendChild(deleteButton);

    //add li to list
    taskList.appendChild(li);
  
  }

  //removing task function
  function removeTask(e) {
    if(e.target.nodeName === "BUTTON") {
      if(confirm("Are you sure you want to delete?")) {
        let li = e.target.parentElement;
        taskList.removeChild(li);
      }

    }
  }

});