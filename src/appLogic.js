import Project from "./project.js";
import Task from "./task.js";


function makeProject(name){
    let project = new Project(name);
    return project;
}

//make task

function makeToDo(title, description, duedate, priority){
    let task = new Task(title, description, duedate, priority);
    return task;
}

export {makeProject, makeToDo}