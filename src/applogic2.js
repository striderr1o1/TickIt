import Project from "./project.js"
import Task from "./task.js"


function App(){
let projects = []
let completed_projects = []
let priority_tasks = []
let projectIDs = 0;

const createNewProject = (Name) => {
    let id = projectIDs;
    let newProject = new Project(Name, id);
    projects.push(newProject)
    projectIDs++;
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
    let id = project.tasksCount
    let task = new Task(title, description, duedate, priority, id)
    project.createTask(task);
}

const PrioritizeTask = (project, id) => {
    let task = project.getSpecificTask(id);
    priority_tasks.push(task)

}



const display = () => {
    console.log(projects);
    console.log(completed_projects)
    console.log(priority_tasks)
}
return {createNewProject, completeProject, display, createTask, deleteProject, PrioritizeTask}
}

let app = App();
let project = app.createNewProject("P1");
app.completeProject(project)

app.createTask(project, "A", "B", "2025", "Imp")
app.display()
