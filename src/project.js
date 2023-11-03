
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
}