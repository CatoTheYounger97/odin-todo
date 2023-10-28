import { addTaskToDom, removeTaskFromDom } from "./dom";
import { Project } from "./project";
// object: task object
// function: create, edit, delete

export class Task {
    constructor(timestamp) {
        this.timestamp = timestamp;
        this.title = 'untitled';
        this.description = 'none'; 
        this.dueDate = 'none';
        this.status = 'created';
    }

    print() {
        console.log(this.title);
    }
}

export function createTask()
{
    const task = new Task(Date.now());
    gTaskList.addTask(task);
    addTaskToDom(task);
    console.log(gTaskList);

}


export function removeTask(task) 
{
    gTaskList.removeTask(task);
    removeTaskFromDom(task);
    console.log(gTaskList);
}

// Project object for tracking all tasks 
export const gTaskList = new Project('default');