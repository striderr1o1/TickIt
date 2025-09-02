import Project from "./project.js"
import Task from "./task.js"


export default function App(){
let projects = []
let completed_projects = []
let priority_tasks = []
let projectCount = projects.length
let completed_tasks = []
let active;

const createNewProject = (Name) => {
    let id = projectCount;
    let newProject = new Project(Name, id);
    projects.push(newProject)
    projectCount = projects.length;
    return newProject;
}

const completeProject = (project) => {
    completed_projects.push(project);
    let projectID = project.id;
    projects.splice(projectID, 1);
}



const deleteProject = (project) => {
    let projectID = project.id;
    projects.splice(projectID, 1);
}

const createTask = (project, title, description, duedate, priority) => {
    project.createTask(title, description, duedate,priority);
}

const PrioritizeTask = (project, id) => {
    let task = project.getSpecificTask(id);
    priority_tasks.push(task)

}
const getProjects = () =>{
    return projects;
}

const getSpecificProject = (id) =>{
    return projects[id];
}

const setActive = (id) =>{
     active = getSpecificProject(id);
}
const getActive = () => {
    return active;
}


const display = () => {
    console.log(projects);
    console.log(completed_projects)
    console.log(priority_tasks)
    
}


return {createNewProject,setActive,getActive,getSpecificProject, completeProject, display, createTask, deleteProject, PrioritizeTask, getProjects}
}

