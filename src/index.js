import { Project } from "./project";
import { Task } from "./task";




// MAIN
const task = new Task('task 1');
task.print();
const project = new Project('project 1');
project.addTask(task);
project.printTask();