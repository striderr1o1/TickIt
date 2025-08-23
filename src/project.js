import Task from "./task.js"

export default class Project{
    tasks = []

    constructor(name){
        this.name = name;
    }
    createTask(task){
        this.tasks.push(task);
    }
    get Tasks(){
        return this.tasks;
    }
    set Tasks(tasks){
        this.tasks = tasks;
    }
}
