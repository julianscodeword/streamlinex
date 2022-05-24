export class Job {
    constructor(name, tasks) {
        this.name = name;
        this.tasks = tasks;
    }
    static For(name, ...tasks) {
        return new Job(name, tasks);
    }
}
export class JobRunners {
}
JobRunners.Sequential = (job) => {
    for (let task of job.tasks) {
        task();
    }
};
