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
    const name = document.createElement('p');
    name.textContent = task.name;
    const description = document.createElement('p');
    description.textContent = task.description;

    const editButton = createButton('edit', () => {
        options.remove();
        taskCard.appendChild( buildTaskForm(task) );

    });

    const rmvButton = createButton('X', () => {
        project.removeTask(task);
        taskCard.remove();
    });

    const options = document.createElement('div');
    options.appendChild(name);
    options.appendChild(editButton);
    options.appendChild(rmvButton);

    const taskCard = document.createElement('div');
    taskCard.setAttribute('id', 'id'+project.timestamp);
    taskCard.appendChild(options);

    return taskCard;
}

function buildTaskForm(task, project) 
{
    const nodes = createTaskFormNodes();

    if (task === 'new') {
        nodes.name.input.value = 'New Task';
    } else {
        nodes.name.input.value = task.name;
        nodes.desc.input.value = task.description;
        nodes.date.input.value = task.dueDate;
        nodes.prio.input.value = task.priority;

    }

    const saveBtn = createButton('save', (e)=> {
        e.preventDefault();
        if (task === 'new') {
            const newTask = new Task(nodes.name.input.value);
            newTask.description = nodes.desc.input.value;
            newTask.dueDate = nodes.date.input.value ;
            newTask.priority = nodes.prio.input.value ;

            project.addTask(newTask);
        } else {
            task.name = nodes.name.input.value;
            task.description = nodes.desc.input.value;
            task.dueDate = nodes.date.input.value ;
            task.priority = nodes.prio.input.value ;
        }

        form.remove();
        displayProject();
    });

    const cancelBtn = createButton('cancel', () => {
        displayProject();
    });
    
    const formInputs = document.createElement('div');
    for (let n in nodes )
    {
        formInputs.appendChild(nodes[n].label);
        formInputs.appendChild(nodes[n].input);
    }
    
    const form = document.createElement('form');
    form.appendChild(formInputs);
    form.appendChild(saveBtn);
    form.appendChild(cancelBtn);

    return form;
}

function createTaskFormNodes()
{
    // task name
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Name:';
    nameLabel.setAttribute('for', 'name');
    const nameInput = document.createElement('input');
    nameInput.setAttribute('id', 'name');
    nameInput.type = 'text';
    const name = { 
        input: nameInput, 
        label: nameLabel, 
    };

    // task description 
    const descLabel = document.createElement('label');
    descLabel.textContent = 'Description:';
    descLabel.setAttribute('for', 'description');    
    const descTextArea = document.createElement('textarea');
    descTextArea.setAttribute('id', 'description');
    const desc = { 
        input: descTextArea, 
        label: descLabel, 
    };
    // task due date
    const dateLabel = document.createElement('label');
    dateLabel.textContent = 'Date:';
    dateLabel.setAttribute('for', 'date');
    const dateInput = document.createElement('input');
    dateInput.setAttribute('id', 'date');
    dateInput.type = 'date';
    const date = { 
        input: dateInput, 
        label: dateLabel, 
    };

    // task piority 
    const prioLabel = document.createElement('label');
    prioLabel.textContent = 'Priority:';
    prioLabel.setAttribute('for', 'priority');
    const prioInput = document.createElement('select');
    prioInput.setAttribute('id', 'priority');

    const options = ['low', 'medium', 'high'];
    options.forEach((o) => {
        const node = document.createElement('option');
        node.value = o;
        node.textContent = o;
        prioInput.appendChild(node);
    });

    const prio = { 
        input: prioInput, 
        label: prioLabel, 
    };

    return { name, desc, date, prio };
}

// HELPER FUNCS
function createButton(text, func) 
{
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', func);

    return button;
}