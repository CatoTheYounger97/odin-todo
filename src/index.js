import { setupDom } from "./dom";

export class Task {
    constructor(name) {
        this.name = name;
        this.timestamp = Date.now();
    }
}

export class Project {
    constructor(name) {
        this.name = name;
        this.timestamp = Date.now();
        this.list = [];
    }
    addTask(task) {
        this.list.push(task);
        console.log(this.list);

    }
    removeTask(task) {
        this.list = this.list.filter((t) => t !== task);
        console.log(this.list);
    }
    editTask(task) {
        task.name = prompt('new name');
        console.log(this.list);
    }
}


// TEST 
export const gProjectList = [];
export const gDefaultProject = new Project('task-default');
gProjectList.push(gDefaultProject); // maybe dont push the default project, see how sorting project works

setupDom();
