
export class Task {
    constructor(name) {
        this.name = name;
        this.description = '';
        this.dueDate = '';
        this.priority = '';
        this.status = false; // task completion status 
        this.timestamp = Date.now();
    }
}