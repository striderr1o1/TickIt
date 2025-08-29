import "./styles/DOM.css"


function Dom(title, app){
    let apptitle = title;

    const loadTasks = (project) =>{
        let tasks = project.tasks;
        
        let taskdiv = document.querySelector('.taskdiv');
        let heading = document.querySelector('.projheading');
        heading.textContent = project.Name;
        taskdiv.innerHTML = "";
        for(let i = 0; i < tasks.length; i++){
            
            let todo = document.createElement("div");
            todo.className = "todo";
            taskdiv.appendChild(todo);

            //title
            let title = document.createElement('div');
            title.textContent = "Title: " + tasks[i].Title;
            todo.appendChild(title);
            //desc
            let description = document.createElement('div');
            description.textContent ="Description: " + tasks[i].Desc;
            todo.appendChild(description);
            //dueDate
            let duedate = document.createElement('div');
            duedate.textContent = "dueDate: " + tasks[i].due_date;
            todo.appendChild(duedate);
            //priority
            let priority = document.createElement('div');
            priority.textContent = "Priority: "+ tasks[i].Priority;
            todo.appendChild(priority);

            
        }
    }

    const StartProject = (sidediv) => {
        let parent = document.querySelector('.parentDiv');
        step1(parent, sidediv);

        
    }
    const step1 = (parent, sidediv) => {
        let form = document.createElement('form');
        form.className = "projectForm";
        parent.appendChild(form);

        let label = document.createElement('label');
        label.textContent = "Name: ";
        let input = document.createElement('input');
        input.type = "text";
        form.appendChild(label);
        label.appendChild(input);

        let submitButton = document.createElement('button');
        submitButton.className = "prjSubmButton";
        form.appendChild(submitButton);
        submitButton.textContent = "ok";

        submitButton.addEventListener('click', function(event){
            event.preventDefault();
            form.style.display = "none";
            let inputValue = input.value;
            step2(inputValue)
            
            
        })
    }

    const step2 = (inputvalue) => {
        

        let project = app.createNewProject(inputvalue);
        let projectsList = app.getProjects();
        let projDOMlist = document.querySelector('.ProjlistDiv');
        //clean all projects 
        projDOMlist.innerHTML = "";

        for(let i = 0; i < projectsList.length; i++){
            let div = document.createElement('div');
            div.dataset.indexNumber = i;
            
            div.className = "projectDiv";
            div.textContent = projectsList[i].Name;
            projDOMlist.appendChild(div);
            let project = projectsList[i];
            
            
            div.addEventListener('click', function(){
                let id = div.dataset.indexNumber;
                console.log(id);
                app.setActive(id);
                step3(app.getActive());
            })
        }

        
        
    }

    const step3 = (project) => {
        loadTasks(project)
        
        let addTaskButton = document.querySelector('.task-button');
            addTaskButton.addEventListener('click', function(){
                step4(app.getActive())
            })

    }

    const step4 = (project) => {
        let parent = document.querySelector('.parentDiv');
        
        //removing all existing forms
        let allforms = document.getElementsByClassName('taskForm');
        console.log("Forms: " + allforms)
        for(let i = 0; i < allforms.length; i++){
            allforms[i].remove();
            console.log("removing " + allforms[i])
        }
        //creating forms
        let form = document.createElement('form');
        form.className = "taskForm";
        parent.appendChild(form);
        

        //title
        let ptitle = document.createElement('p');
        ptitle.className = "taskformPara";
        let titleLabel = document.createElement('label');
        titleLabel.textContent = "Title: ";
        titleLabel.className = "tasklabels titleLabel";
        titleLabel.htmlFor = "titleinpt"
        let titleInput = document.createElement('input');
        titleInput.type = "text";
        titleInput.name = "titleinput";
        titleInput.id = "titleinpt";
        titleInput.className = "input";
        titleLabel.appendChild(titleInput);
        ptitle.appendChild(titleLabel);
        form.appendChild(ptitle);
        //description
        let descP = document.createElement('p');
        descP.className = "taskformPara descP";
        let DescLabel = document.createElement('label');
        DescLabel.textContent = "Description: ";
        DescLabel.className = "tasklabels descLabel";
        DescLabel.htmlFor = "descinpt"
        let DescInput = document.createElement('textarea');
        DescInput.id = "descinpt";
        DescInput.className = "input";
        // DescLabel.appendChild(DescInput);
        descP.appendChild(DescLabel);
        descP.appendChild(DescInput);
        form.appendChild(descP);
        //dueDate
        let DateP = document.createElement('p');
        DateP.className = "taskformPara";
        let dateLabel = document.createElement('label');
        dateLabel.textContent = "DueDate: ";
        dateLabel.className = "taskLabels duedateLabel";
        dateLabel.htmlFor = "dueDateInput";
        let dueDateInput = document.createElement('input');
        dueDateInput.type = "date";
        dueDateInput.name = "duedateinput";
        dueDateInput.id = "dueDateInput";
        dueDateInput.className = "input";
        dateLabel.appendChild(dueDateInput);
        DateP.appendChild(dateLabel);
        form.appendChild(DateP);;
        //priority
        let priorityP = document.createElement('p');
        priorityP.className = "taskformPara";
        let priorityLabel = document.createElement('label');
        priorityLabel.textContent = "Priority: ";
        priorityLabel.className = "tasklabels priorityLabel";
        priorityLabel.htmlFor = "priorityinput";
        let priorityInput = document.createElement('input');
        priorityInput.type = "checkbox";
        priorityInput.name = "priorityinput";
        priorityInput.id = "priorityinput";
        priorityInput.className = "input";
        priorityLabel.appendChild(priorityInput);
        priorityP.appendChild(priorityLabel);
        form.appendChild(priorityP);

        //submit button
        let submitButton = document.createElement('button');
        let buttonDiv = document.createElement('div');
        buttonDiv.className = "taskSubmitDiv";
        submitButton.className = "submitTaskButton";
        submitButton.textContent = "Ok";
        buttonDiv.appendChild(submitButton);
        form.appendChild(buttonDiv);

        
        submitButton.addEventListener('click', function(event){
            let title = titleInput.value;
            let desc = DescInput.value;
            let due_date = dueDateInput.value;
            let priority = priorityInput.value;
            allforms[allforms.length-1].remove();
            step5(project, title, desc, due_date, priority);
            event.preventDefault();
        })

    }

    const step5 = (project, title, description, duedate, priority) => {
        project.createTask(title, description, duedate, priority);
        loadTasks(project);
    }
    


//##########################################################################################
    const createParent =() => {
        let parent = document.createElement('div');
        parent.className = "parentDiv";
        document.body.appendChild(parent);
        return parent;
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
         return div;
    }

    const createSideBar = (parent, title)=>{
        let div = document.createElement('div');
        div.className = "sidebar";
        parent.appendChild(div);

        let Title = document.createElement('h1');
        Title.className = "title";
        Title.textContent = title;
        div.appendChild(Title);

        let prioritizedTaskDiv = document.createElement('div');
        prioritizedTaskDiv.className = "PriorityHeadDiv";
        div.appendChild(prioritizedTaskDiv);
        prioritizedTaskDiv.textContent = "Priority";

        

        //create Project add button
        let addProjectButton = document.createElement('button');
        addProjectButton.className = "addProjButton";
        addProjectButton.textContent = "New Project";
        div.appendChild(addProjectButton);
        
        return div;
        
    }

    

    

    const MainFactory = () => {
    
        let parent = createParent();
        let sidebar = createSideBar(parent, apptitle);
        let main = createMainBar(parent);

        let prioritizedTaskDiv = document.querySelector('.PriorityHeadDiv');
        prioritizedTaskDiv.addEventListener('click', function(){
            console.log('clicked');
        })

        let addProjectButton = document.querySelector('.addProjButton');
        addProjectButton.addEventListener("click", function(){
            StartProject(sidebar);//passing sidediv
            
        });

        let projectsListDiv = document.createElement('div');
        projectsListDiv.className = "ProjlistDiv";
        sidebar.appendChild(projectsListDiv);

    }
    return {MainFactory};
}

export default Dom;

//need to add delete, complete, prioritize, local storage etc