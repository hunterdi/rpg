export abstract class Command {
    public abstract execute(arr: number[], index: number): void;
}

export class Sum extends Command {
    public execute(arr: number[], index: number): number {
        if (index <= 0) {
            return 0;
        }
        return this.execute(arr, (index - 1)) + arr[(index - 1)];
    }
}

export class Percentage extends Command {
    public execute(arr: number[], index: number): number {
        if (index === 0) {
            return arr[0];
        }
        const result = this.execute(arr, (index - 1)) * arr[(index - 1)];
        return result;
    }
}