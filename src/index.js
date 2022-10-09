require('./mystyles.scss');
// import project from './js/project';
// import task from './js/task';
import { list as projectList, addProject, removeProject } from './js/projectList';



// display

addProject('test project');
console.log(projectList);
projectList[0].addTask('test task');
console.log(projectList);
removeProject(0);
console.log(projectList);