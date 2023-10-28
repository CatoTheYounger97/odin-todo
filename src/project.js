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
    removeTask(task) {
        this.taskList = this.taskList.filter((item) => item.timestamp != task.timestamp);
    }
    // get/set

}

