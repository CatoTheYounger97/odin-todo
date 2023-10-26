// object: task object
// function: create, edit, delete

export class Task {
    constructor(title, description, dueDate) {
        this.title = title ?? 'untitled';
        this.description = description ?? 'none'; 
        this.dueDate = dueDate ?? 'none';
        this.status = 'created';
    }

    print() {
        console.log(this.title);
    }
}