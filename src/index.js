import { setupDom } from "./dom";
import { Project } from "./project";
import { Task } from "./task";

// SETUP 
export const gProjectList = [];
gProjectList.push(new Project('Example Project'));
gProjectList[0].addTask( new Task('Example Task'));

setupDom();
