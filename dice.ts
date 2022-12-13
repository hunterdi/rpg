export class Dice {
    private _side: number;

    constructor(side: number) {
        this._side = side;
    }

    public getValue(): number {
        return Math.floor(Math.random() * this._side);
    }
}

export enum DiceType {
    D12 = 0,
    D10 = 1,
    D9 = 2,
    D8 = 3,
    D6 = 4,
    D4 = 5
}