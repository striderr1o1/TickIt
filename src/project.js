import Task from "./task.js"

export default class Project{
    tasks = []
    completed = []
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
    get Name(){
        return this.name;
    }
}
