import { gProjectList } from ".";
import { Project } from "./project";
import { saveStorage } from "./storage";
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
    saveStorage();

    const parent = document.querySelector('#container');
    parent.innerHTML = '';

    const newProjectButton = createButton('+Project', () => {
        parent.insertBefore( buildProjectForm('new'), parent.firstElementChild );
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
        projectTitle.remove();
        addTask.remove();
        projectCard.insertBefore( buildProjectForm(project), projectCard.firstElementChild );

    });

    const rmvButton = createButton('delete', () => {
        gProjectList.splice(gProjectList.indexOf(project), 1);
        projectCard.remove();

        displayProject();
    });

    const addTask = createButton('+Task', () => {
        taskCard.insertBefore( buildTaskForm('new', project), taskCard.firstElementChild ); 
        addTask.style.display = 'none';
    });

    
    const options = document.createElement('div');
    options.appendChild(editButton);
    options.appendChild(addTask);
    options.appendChild(rmvButton);
    options.classList.add('ProjectOptions');
    
    const projectTitle = document.createElement('div');
    projectTitle.appendChild(projectName);
    projectTitle.appendChild(options);

    const taskCard = document.createElement('div');
    
    displayTask(project, taskCard);
    
    const projectCard = document.createElement('div');
    // projectCard.setAttribute('id', 'id'+project.timestamp);
    projectCard.classList.add('ProjectCard');
    projectCard.appendChild(projectTitle);
    projectCard.appendChild(taskCard);

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

            gProjectList.unshift(newProject);
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

    const options = document.createElement('div');
    options.appendChild(button);
    options.appendChild(cancelBtn);
    
    const form = document.createElement('form');
    form.classList.add('ProjectForm');
    form.appendChild(input);
    form.appendChild(options);

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
    description.textContent = `Notes: ${task.description}`;
    const dueDate = document.createElement('p');
    dueDate.textContent = `Due: ${task.dueDate}`;
    const priority = document.createElement('p');
    priority.textContent = `Priority: ${task.priority}`;

    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    if (task.status)
        checkBox.setAttribute('checked', true);
    checkBox.addEventListener('click', () => {
        task.status = task.status ? false : true;
        displayProject();
    });

    const editButton = createButton('edit', () => {
        info.remove();
        taskCard.appendChild( buildTaskForm(task) );

    });
    editButton.classList.add('EditTaskButton');

    const rmvButton = createButton('delete', () => {
        project.removeTask(task);
        taskCard.remove();

        displayProject();
    });
    rmvButton.classList.add('DeleteTaskButton');

    // to expand task card to show more info
    const moreButton = createButton('more', () => {
        extraInfo.style.display = 'block';
        moreButton.style.display = 'none';
        lessButton.style.display = 'inline';
    });
    moreButton.classList.add('MoreButton');
    
    // to hide extra task info
    const lessButton = createButton('less', () => {
        extraInfo.style.display = 'none';
        lessButton.style.display = 'none';
        moreButton.style.display = 'inline';
    });
    lessButton.style.display = 'none';
    lessButton.classList.add('LessButton');

    // option buttons
    const options = document.createElement('div');
    options.appendChild(moreButton);
    options.appendChild(lessButton);
    options.appendChild(editButton);
    options.appendChild(rmvButton);
    options.classList.add('Options');
    // task header
    const taskHeader = document.createElement('div');
    taskHeader.appendChild(checkBox);
    taskHeader.appendChild(name);
    taskHeader.classList.add('TaskHeader');

    // standard info 
    const standardInfo = document.createElement('div');
    standardInfo.appendChild(dueDate);
    standardInfo.appendChild(priority);
    standardInfo.classList.add('StandardInfo');

    // extra info 
    const extraInfo = document.createElement('div');
    extraInfo.appendChild(description);
    extraInfo.style.display = 'none';
    extraInfo.classList.add('ExtraInfo');
    
    // Task info container 
    const info = document.createElement('div');
    info.appendChild( taskHeader );
    info.appendChild( standardInfo );
    info.appendChild( options );
    info.appendChild( extraInfo );
    
    const taskCard = document.createElement('div');
    // taskCard.setAttribute('id', 'id'+project.timestamp);
    taskCard.classList.add('TaskCard');
    taskCard.appendChild( info );

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
    saveBtn.classList.add('TaskFormSave');

    const cancelBtn = createButton('cancel', () => {
        displayProject();
    });
    cancelBtn.classList.add('TaskFormCancel');
    
    const formInputs = document.createElement('div');
    for (let n in nodes )
    {
        const nodeDiv = document.createElement('div');
        nodeDiv.appendChild(nodes[n].label);
        nodeDiv.appendChild(nodes[n].input);

        formInputs.appendChild(nodeDiv);
    }

    const option = document.createElement('div');
    option.appendChild(saveBtn);
    option.appendChild(cancelBtn);
    option.classList.add('TaskFormOption');

    
    const form = document.createElement('form');
    form.classList.add('TaskForm');
    form.appendChild(formInputs);
    form.appendChild(option);

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
    descLabel.textContent = 'Notes:';
    descLabel.setAttribute('for', 'notes');    
    const descTextArea = document.createElement('textarea');
    descTextArea.setAttribute('id', 'notes');
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

    return { name, date, prio, desc };
}

// HELPER FUNCS
function createButton(text, func) 
{
    const button = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', func);

    return button;
}