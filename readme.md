# StreamlineX
A framework for writing ETL jobs that don't care how they are run.

## Write once; run wherever
Write your ETL jobs without worrying about the details of how they are run. Spend more time capturing your ETL logic—plain and simple.

## Getting started

Get a new stream factory:
```typescript
const streamFactory = Streams.Local;
```

Modify the stream by defining your ETL process:
```typescript
const stream = streamFactory
	.extract<number>(Iterable.range(0, 10))
	.transform(x => 10 * x)
	.forEach(console.log);
```

Convert the stream into a runnable task:
```typescript
const job = Job.For("Print out some extracted data.", stream.run);
```

And then run the task with one of the provided job runners:
```typescript
JobRunners.Sequential(job);
```

You can also create custom data sources and data targets which generate or consume data for some specification.

## Streams and the StreamFactory
`StreamFactory` is the powerful abstraction that allows you to write your ETL processes without worrying how they will be run.

For now, the only available implementation is the `LocalStreamFactory`, which uses ReactiveX to run processes on your local machine but in the future there will be wrappers for Spark and other job processing frameworks.
