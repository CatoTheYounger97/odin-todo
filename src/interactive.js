// Task Submit Button

export function createTask(project) 
{
    const newTask = new Task('New Task');
    project.addTask(newTask);
    displayProject();
}

// Task Delete Button 

// Task Edit Button 