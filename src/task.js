export default class Task{
    constructor(title, description, dueDate, priority, id){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = id;
    }

    get Title(){
        return this.title;
    }
    set Title(title){
        this.title = title;
    }

    get Desc(){
        return this.description;
    }
    set Desc(description){
        this.description = description;
    }

    get due_date(){
        return this.dueDate;
    }
    set due_date(date){
        this.dueDate = date;
    }

    get Priority(){
        return this.priority;
    }
    set Priority(p){
        this.priority = p;
    }
}

