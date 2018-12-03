import { Runnable } from "../aliases";

export interface IJob {
    name: String;
    tasks: Array<Runnable>;
}

export class SimpleJob implements IJob {
    public static For(name: String, ...tasks: Array<Runnable>): SimpleJob {
        return new SimpleJob(name, tasks);
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
