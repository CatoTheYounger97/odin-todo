import { setupDom } from "./dom";
import { Project } from "./project";
import { Task } from "./task";

// SETUP 
export const gProjectList = [];
gProjectList.push(new Project('Example Project'));

const exampleTask = new Task('Example Task');
exampleTask.description = 'This is an example to task.';
exampleTask.dueDate = '2099-01-01';
exampleTask.priority = 'low';

gProjectList[0].addTask( exampleTask );

setupDom();
