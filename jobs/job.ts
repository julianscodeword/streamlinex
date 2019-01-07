import { Runnable } from "../aliases";

export interface IJob {
    name: String;
    tasks: Array<Runnable>;
}

export class Job implements IJob {
    public static For(name: String, ...tasks: Array<Runnable>): Job {
        return new Job(name, tasks);
    }

    public constructor(
        public readonly name: String,
        public readonly tasks: Array<Runnable>
    ) {}
}

export interface IJobRunner {
    (job: IJob): void;
}

export class JobRunners {
    public static Sequential: IJobRunner = (job) => {
        for (let task of job.tasks) {
            task();
        }
    }
}
