import Task from "./task.js"

export default class Project{
    tasks = []
    tasksCount = 0;
    constructor(name, id){
        this.name = name;
        this.id = id;
    }
    createTask(title, desc, duedate, priority){
        let task = new Task(title, desc, duedate, priority,this.tasksCount);
        this.tasks.push(task);
        this.tasksCount++;
    }
    get Tasks(){
        return this.tasks;
    }
    getSpecificTask(id){
        return this.tasks[id]
    }
    set Tasks(tasks){
        this.tasks = tasks;
    }
    get Name(){
        return this.name;
    }
    get ID(){
        return this.id;
    }
    get tasksCount(){
        return this.tasksCount;
    }
}
