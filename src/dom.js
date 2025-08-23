import "./styles/DOM.css"

function Dom(title){
    let apptitle = title;

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
    }

    

    const MainFactory = () => {
        let parent = createParent();
        let sidebar = createSideBar(parent, apptitle);
        let main = createMainBar(parent);
    }
    return {MainFactory};
}

export default Dom;