import { gProjectList } from ".";
import { Project } from "./project";

export function saveStorage() 
{
    localStorage.setItem('save', JSON.stringify(gProjectList));
}

export function loadStorage()
{
    if (localStorage.getItem('save')) {
        const saveArray = JSON.parse(localStorage.getItem('save'));
        gProjectList.length = 0;
    
        for (const save of saveArray) 
        {
            const project = new Project();
            project.name = save.name;
            project.timestamp = save.timestamp;
            project.list = save.list;
    
            gProjectList.push(project);
        }

        return true;
    } else {
        return false;
    }
}