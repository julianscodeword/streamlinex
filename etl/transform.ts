export interface ITransformer<TInput, TOutput> {
    (input: TInput): TOutput;
}
