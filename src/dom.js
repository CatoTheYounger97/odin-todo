// build page, header, main, footer
export function buildPage() 
{
    const page = document.createElement('div');
    page.setAttribute('id', 'page');
    
    document.body.appendChild(page);
    page.appendChild( buildTaskButton() );
}


function buildTaskButton() 
{
    const button = document.createElement('button');
    button.textContent = 'create';

    button.addEventListener('click', (b) => {
        // function for generating the class
        console.log('click');
    });

    return button;
}


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