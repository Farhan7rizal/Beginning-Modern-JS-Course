//! ------------------------------------------------------------------------------
//*! LOCAL AND SESSION STORAGE
    //* Local storage will stay until you manually clear it out n your setting or through your program 
    //* Session storage will leave once your browser is closed or session end

//*? Set local storage item with key value pair
// localStorage.setItem('name', 'john')
// localStorage.setItem('age', '30')

//*? Set session storage item with key value pair
// sessionStorage.setItem('name', 'Meryl')

//*? Remove from storage
// localStorage.removeItem('name');

//*? Get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

//*? Clear local storage
// localStorage.clear();
// console.log(name, age);

document.querySelector('form').addEventListener('submit', function(e){
    const task = document.getElementById('task').value;

    //*? Create an array of tasks and store that as a string
    let tasks;

    //*? Check if there is something (pull it out) or not (set tasks to an empty array and add to it)
    
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
        //* the issue is, this is gonna be a string, so we just parse into a json/object that we can use (JSON.parse()), but in this case not going to be object, because we just storing one value an array of string, usually we will store an array of json objects.
    }
    //*? Push the task that coming through the form 
    tasks.push(task); 
    //*? We need to reset the local storage tasks with this added value and stored as a string
    localStorage.setItem('tasks', JSON.stringify(tasks)); 
    //* The value is string ( ["value","value2"] ), but formatted as an array

    // localStorage.setItem('task', task); 
    //* with only this we just can save one (without if ...)
    alert('Task Saved');



    e.preventDefault();
});

//*? trying to pull with for each
const tasks = JSON.parse(localStorage.getItem('tasks'));
//* Because this is an array , but we called it with only store a strings, so we need to parse it to JSON.parse()
tasks.forEach(function(task){
    console.log(task)
});




//! ------------------------------------------------------------------------------