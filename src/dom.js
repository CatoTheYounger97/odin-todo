import { Project, gDefaultProject, gProjectList } from ".";
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
    parent = document.querySelector('#container');
    parent.innerHTML = '';

    const newProjectButton = createButton('+Project', () => {
        parent.appendChild(buildProjectForm('new'));
        newProjectButton.style.display = 'none';
    });
    newProjectButton.setAttribute('id', 'new-project');
    parent.appendChild(newProjectButton);
    
    gProjectList.forEach((p) => {
        parent.appendChild( buildProject(p) );
    });
}


function buildProject(project) 
{
    const projectName = document.createElement('p');
    projectName.textContent = project.name;

    const editButton = createButton('edit', () => {
        options.remove();
        projectCard.appendChild( buildProjectForm(project) );

    });

    const rmvButton = createButton('X', () => {
        gProjectList.splice(gProjectList.indexOf(project), 1);
        projectCard.remove();
    });

    const addTask = createButton('+Task', () => {
        createTask(project);
    });

    const options = document.createElement('div');
    options.appendChild(projectName);
    options.appendChild(editButton);
    options.appendChild(rmvButton);
    options.appendChild(addTask);

    const taskCard = document.createElement('div');
    displayTask(project, taskCard);

    const projectCard = document.createElement('div');
    projectCard.setAttribute('id', 'id'+project.timestamp);
    projectCard.appendChild(options);
    projectCard.appendChild(taskCard);

    return projectCard;
}

function buildProjectForm(project) 
{
    const input = document.createElement('input');
    input.type = 'text';
    if (project !== 'new') {
        input.value = project.name;
    }

    const button = createButton('save', (e)=> {
        e.preventDefault();
        if (project === 'new') {
            const newProject = new Project('New Project');
            newProject.name = input.value;

            gProjectList.push(newProject);
        } else {
            project.name = input.value;
        }

        form.remove();
        displayProject();
    });
    
    const form = document.createElement('form');
    form.appendChild(input);
    form.appendChild(button);

    return form;
}

// DISPLAY TASK
function displayTask(project, taskCard)
{
    project.list.forEach((task) => {
        taskCard.appendChild( buildTask(task, project) );
    });
}


function buildTask(task, project) 
{
    const taskName = document.createElement('p');
    taskName.textContent = task.name;

    const editButton = createButton('edit', () => {
        options.remove();
        taskCard.appendChild( buildTaskForm(task) );

    });

    const rmvButton = createButton('X', () => {
        project.removeTask(task);
        taskCard.remove();
    });

    const options = document.createElement('div');
    options.appendChild(taskName);
    options.appendChild(editButton);
    options.appendChild(rmvButton);

    const taskCard = document.createElement('div');
    taskCard.setAttribute('id', 'id'+project.timestamp);
    taskCard.appendChild(options);

    return taskCard;
}

function buildTaskForm(task) 
{
    const input = document.createElement('input');
    input.type = 'text';
    input.value = task.name;
    const button = createButton('save', (e)=> {
        e.preventDefault();
        task.name = input.value;
        form.remove();

        displayProject();
    });
    
    const form = document.createElement('form');
    form.appendChild(input);
    form.appendChild(button);

    return form;
}

// HELPER FUNCS
function createButton(text, func) 
{
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', func);

    return button;
}