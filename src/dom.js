import { gDefaultProject, gProjectList } from ".";
import { createProject, createTask } from "./interactive";

// INITIAL DOM SETUP
export function setupDom()
{
    const container = document.createElement('div');
    container.setAttribute('id', 'container');
    
    document.body.appendChild(container);
    
    displayProject();
}

// DISPLAY PROJECT
export function displayProject()
{
    const parent = document.querySelector('#container');
    parent.innerHTML = '';

    const newProjectButton = createButton('+Project', createProject );
    container.appendChild(newProjectButton);
    
    gProjectList.forEach((p) => {
        parent.appendChild( buildProject(p) );
    });
}


function buildProject(project) 
{
    const projectName = document.createElement('p');
    projectName.textContent = project.name;

    // draw each task in the project
    // button for new Task within a project (trigers the form);
    const editButton = createButton('edit', () => {
        options.remove();
        projectCard.appendChild( buildProjectForm(project) );

    });

    const rmvButton = createButton('X', () => {
        gProjectList.splice(gProjectList.indexOf(project), 1);
        projectCard.remove();
    });

    const options = document.createElement('div');
    options.appendChild(projectName);
    options.appendChild(editButton);
    options.appendChild(rmvButton);

    const projectCard = document.createElement('div');
    projectCard.setAttribute('id', 'id'+project.timestamp);
    projectCard.appendChild(options);


    // display tasks


    return projectCard;
}

function buildProjectForm(project) 
{
    const input = document.createElement('input');
    input.type = 'text';
    input.value = project.name;
    const button = createButton('save', (e)=> {
        e.preventDefault();
        project.name = input.value;
        form.remove();

        displayProject();
    });
    
    const form = document.createElement('form');
    form.appendChild(input);
    form.appendChild(button);

    return form;
}

// DISPLAY TASK

// HELPER FUNCS
function createButton(text, func) 
{
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', func);

    return button;
}