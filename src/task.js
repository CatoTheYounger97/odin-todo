
export class Task {
    constructor(name) {
        this.name = name;
        this.description;
        this.dueDate;
        this.priority;
        this.timestamp = Date.now();
    }
}