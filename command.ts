export abstract class Command {
    public abstract execute(arr: number[], n: number): void;
}

export class Sum extends Command {
    public execute(arr: number[], n: number): number {
        if (n <= 0) {
            return 0;
        }
        return this.execute(arr, (n - 1)) + arr[(n - 1)];
    }
}

export class Percentage extends Command {
    public execute(arr: number[], n: number): number {
        if (n <= 0) {
            return 0;
        }
        return this.execute(arr, (n - 1)) * arr[(n - 1)];
    }
}