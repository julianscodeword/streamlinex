export interface ITransaction {
    start(): void;
    commit(): void;
    rollback(): void;
}
