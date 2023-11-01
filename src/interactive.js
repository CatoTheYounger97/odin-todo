import { Project, Task, gProjectList } from ".";
import { displayProject } from "./dom";

// add new Project
export function createProject() 
{
    const newProject = new Project('New Project');
    gProjectList.push(newProject);
    displayProject();
}

// Task Submit Button

export function createTask(project) 
{
    const newTask = new Task('New Task');
    project.addTask(newTask);
    displayProject();
}

// Task Delete Button 

// Task Edit Button 