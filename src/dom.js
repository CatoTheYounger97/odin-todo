import { gProjectList } from ".";
import { Project } from "./project";
import { Task } from "./task";

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
    
    gProjectList.forEach((p) => {
        parent.appendChild( buildProject(p) );
    });

    parent.appendChild(newProjectButton);
}


function buildProject(project) 
{
    const projectName = document.createElement('p');
    projectName.textContent = project.name;

    const editButton = createButton('edit', () => {
        options.remove();
        addTask.remove();
        projectCard.appendChild( buildProjectForm(project) );

    });

    const rmvButton = createButton('X', () => {
        gProjectList.splice(gProjectList.indexOf(project), 1);
        projectCard.remove();
    });

    const addTask = createButton('+Task', () => {
        projectCard.appendChild( buildTaskForm('new', project) );
        addTask.style.display = 'none';
    });

    const options = document.createElement('div');
    options.appendChild(projectName);
    options.appendChild(editButton);
    options.appendChild(rmvButton);
    
    const taskCard = document.createElement('div');
    
    displayTask(project, taskCard);
    
    const projectCard = document.createElement('div');
    projectCard.setAttribute('id', 'id'+project.timestamp);
    projectCard.appendChild(options);
    projectCard.appendChild(taskCard);
    projectCard.appendChild(addTask);

    return projectCard;
}

function buildProjectForm(project) 
{
    const input = document.createElement('input');
    input.type = 'text';
    if (project === 'new') {
        input.value = 'New Project';
    } else {
        input.value = project.name;
    }

    const button = createButton('save', (e)=> {
        e.preventDefault();
        if (project === 'new') {
            const newProject = new Project('New Project');
            newProject.name = input.value;

            gProjectList.push(newProject);
            console.log(gProjectList);
        } else {
            project.name = input.value;
        }

        form.remove();
        displayProject();
    });

    const cancelBtn = createButton('cancel', () => {
        displayProject();
    });
    
    const form = document.createElement('form');
    form.appendChild(input);
    form.appendChild(button);
    form.appendChild(cancelBtn);

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

function buildTaskForm(task, project) 
{
    const input = document.createElement('input');
    input.type = 'text';
    if (task === 'new') {
        input.value = 'New Task';
    } else {
        input.value = task.name;
    }

    const button = createButton('save', (e)=> {
        e.preventDefault();
        if (task === 'new') {
            const newTask = new Task(input.value);
            project.addTask(newTask);
        } else {
            task.name = input.value;
        }

        form.remove();
        displayProject();
    });

    const cancelBtn = createButton('cancel', () => {
        displayProject();
    });
    
    const form = document.createElement('form');
    form.appendChild(input);
    form.appendChild(button);
    form.appendChild(cancelBtn);

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