import task from './task.js';
// project class

export default class project {
    constructor (id, name) {
        this.id = id;
        this.name = name;
        this.tasks = [];
    }

    addTask (name) {
        let id = this.tasks.length;
        let addedTask = new task(id, name);
        this.tasks.push(addedTask);
        return addedTask;
    }

    removeTask (id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

}
