export default class state{
    projects = []
    addProject(project){
        this.projects.push(project)
    }
    deleteProject(index){
        this.projects.splice(index, 1)
    }
}