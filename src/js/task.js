// task class

export default class task {
    constructor (id, name) {
        this.id = id;
        this.name = name;
        this.project = null;
        this.completed = false;
        this.dueDate = null;
    }

    adjustCompletion () {
        this.completed = !this.completed;
    }

    adjustProject (project) {
        this.project = project;
    }

    adjustDueDate (date) {
        this.dueDate = date;
    }
}