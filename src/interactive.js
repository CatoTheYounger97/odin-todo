import { Project, gProjectList } from ".";
import { displayProject } from "./dom-setup";

// add new Project
export function createProject() 
{
    const newProject = new Project('New Project');
    gProjectList.push(newProject);
    displayProject( newProject );
}
// submit new project


// Task Submit Button

// Task Delete Button 

// Task Edit Button 