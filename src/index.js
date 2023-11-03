import { setupDom } from "./dom";
import { Project } from "./project";

// SETUP 
export const gProjectList = [];
gProjectList.push(new Project('task-default'));

setupDom();
