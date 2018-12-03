# StreamlineX
A framework for writing ETL jobs that don't care how they are run.

## Write once; run wherever
Write your ETL jobs without worrying about the details of how they are run. Spend more time capturing your ETL logic—plain and simple.

## Getting started

Get a new stream factory:
```typescript
const streamFactory = Streams.Local;
```

Create custom data sources and data targets, or use the existing ones:
```typescript
const extractor = Extractors.Sequence(1, 10);
const loader = Loaders.ConsoleLoggingLoader(5);
```

Modify the stream by defining your ETL process:
```typescript
const stream = streamFactory
	.extract<number>(extractor)
	.transform(x => 10 * x)
    .load(loader);
```

Convert the stream into a runnable task:
```typescript
const job = SimpleJob.For("Print out some extracted data.", stream.run);
```

And then run the task with one of the provided job runners:
```typescript
JobRunners.Sequential(job);
```


## Streams and the StreamFactory
`StreamFactory` is the powerful abstraction that allows you to write your ETL processes without worrying how they will be run.

For now, the only available implementation is the `LocalStreamFactory`, which uses ReactiveX to run processes on your local machine but in the future there will be wrappers for Spark and other job processing frameworks.