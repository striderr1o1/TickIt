import "./styles/DOM.css"
import { makeProject, makeToDo } from "./appLogic.js";
import Project from "./project.js";

function Dom(title){
    let apptitle = title;
//create forms
    // const createFormforProject = () => {
    //     let form = document.createElement('form');
    //     form.className = "projectForm";
    // }

    const createParent =() => {
        let parent = document.createElement('div');
        parent.className = "parentDiv";
        document.body.appendChild(parent);
        return parent;
    }

    const createTask = (title, description, duedate, priority, maindiv) => {
        let task = makeToDo(title, description, duedate, priority);
        let todo = document.createElement('div');
        todo.className = "todo";
        //set inner things
        maindiv.appendChild(todo);
    }

    const createProject = (Sidediv) => {
        //create form and take name
        let project = makeProject("P1");
        let projectDiv = document.createElement('div');
        projectDiv.className = "projectDiv";
        projectDiv.textContent = project.Name;
        Sidediv.appendChild(projectDiv);
        projectDiv.addEventListener("click", function(){
            let heading = document.querySelector('.projheading');
            heading.textContent = project.Name;
            let taskbutton = document.querySelector('.task-button');
            taskbutton.addEventListener('click', function(){
                //create task form
                let maindiv = document.querySelector('.taskdiv');
                createTask("Temp", "temp", "temp", "temp", maindiv);
            })

        })


    }

    const createMainBar = (parent) => {
        //main div
        let div = document.createElement('div');
        div.className = 'maindiv';
        parent.appendChild(div);
        //head
         let projectHeading = document.createElement('h1');
         projectHeading.className = "projheading";
         projectHeading.textContent = "Default"
          div.appendChild(projectHeading);

         //tasks div
         let taskdiv = document.createElement('div');
         taskdiv.className = "taskdiv";
         div.appendChild(taskdiv);

         //create button
         let button = document.createElement('button');
         button.className = "task-button";
         button.textContent = "+";
         div.appendChild(button);
    }

    const createSideBar = (parent, title)=>{
        let div = document.createElement('div');
        div.className = "sidebar";
        parent.appendChild(div);

        let Title = document.createElement('h1');
        Title.className = "title";
        Title.textContent = title;
        div.appendChild(Title);

        //create Project add button
        let addProjectButton = document.createElement('button');
        addProjectButton.className = "addProjButton";
        addProjectButton.textContent = "New Project";
        div.appendChild(addProjectButton);
        
        addProjectButton.addEventListener("click", function(){
            createProject(div)
        });
    }

    

    

    const MainFactory = () => {
    
        let parent = createParent();
        let sidebar = createSideBar(parent, apptitle);
        let main = createMainBar(parent);
    }
    return {MainFactory};
}

export default Dom;

//need to make functionality of creating new projects and also seperate app logic from dom