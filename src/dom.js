import { createTask } from "./task";

// build page, header, main, footer
export function setupDom() 
{
    // Create the page container
    const newPage = document.createElement('div');
    newPage.setAttribute('id', 'page');
    document.body.appendChild(newPage);
    // create the new task button
    const newTaskButton = createButon('new', createTask);
    newPage.appendChild( newTaskButton );
}


export function addTaskToDom(task) 
{
    const input = document.createElement('input');
    input.setAttribute('type', 'text');

    const removeButton = createButon('X', () => {
        console.log('remove button');
    });
    
    const taskNode = document.createElement('div');
    taskNode.className = 'task';
    taskNode.appendChild(input);
    taskNode.appendChild(removeButton);

    const parent = document.querySelector('#page');
    parent.appendChild(taskNode);
}

function removeTaskFromDom(task)
{
    
}

function createButon(text, func) 
{
    const button = document.createElement('button');
    button.textContent = text;

    button.addEventListener('click', func);

    return button;
}
// function deleteNode()
// {
//     document.deleteNode();

// }

// DEMO CODE FOR DOM FORM GENERATION
// function createFormInput(name)
// {
//     const input = document.createElement('input');
//     label.setAttribute('id', name);
//     label.setAttribute('type', 'text');
//     label.textContent = name;

//     const label = document.createElement('label');
//     label.setAttribute('for', name);
//     label.textContent = name;

//     return {input, label};
// }