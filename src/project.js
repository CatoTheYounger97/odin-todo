// object: task groups (project)
// function: create, add/remove tasks, edit, delete

export class Project {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.taskList = [];

    }

    printTask() {
        console.log(this.taskList);
    }
    
    // add task
    addTask(task) {
        this.taskList.push(task);
    }
    // remove task
    // get/set

}
