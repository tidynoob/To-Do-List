import project from './project';

// project list

let list = [];

let addProject = (name) => {
    let id = list.length;
    let addedProject = new project(id, name);
    list.push(addedProject);
    return addedProject;
}

let removeProject = (id) => {
    list = list.filter(project => project.id !== id);
}

export {list, addProject, removeProject};