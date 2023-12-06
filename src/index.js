import './style.css';

import { setupDom } from "./dom";
import { Project } from "./project";
import { Task } from "./task";
import { loadStorage, saveStorage } from './storage';

// SETUP 
export const gProjectList = [];

if (loadStorage() === false) {
    gProjectList.push(new Project('Example Project'));
    const exampleTask = new Task('Example Task');
    exampleTask.description = 'This is an example task.';
    exampleTask.dueDate = '2099-01-01';
    exampleTask.priority = 'low';
    
    gProjectList[0].addTask( exampleTask );
    
    // fake data for styling purposes 
    
    for (let i = 1; i < 4; ++i) 
    {
        gProjectList.push(new Project('Example Project'));
        for (let j = 0; j < i; ++j) 
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
