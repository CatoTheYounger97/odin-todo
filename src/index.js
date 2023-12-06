import './style.css';

import { setupDom } from "./dom";
import { Project } from "./project";
import { Task } from "./task";
import { loadStorage, saveStorage } from './storage';

// SETUP 
export const gProjectList = [];

if (loadStorage() === false) {
    // example load data
    
    for (let i = 0; i < 3; ++i) 
    {
        gProjectList.push(new Project('Example Project'));
        for (let j = 0; j <= i; ++j) 
        {
            const exampleTask = new Task('Example Task');
            exampleTask.description = 'This is an example task.';
            exampleTask.dueDate = '2099-01-01';
            exampleTask.priority = 'low';
            gProjectList[i].addTask( exampleTask );
        }
    }
}

setupDom();
