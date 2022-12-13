import { Percentage, Sum } from './command';
import { Description, Command, KeyType } from './description';
import { Feature } from './feature';
import { Persona } from './persona';

export class Calculator {
    constructor(private readonly _persona: Persona) { }

    public Process(): void {
        this._persona.specializations.forEach(s => this._execute(s));
        this._persona.attributes.forEach(a => this._execute(a));
        this._persona.personalities.forEach(p => this._execute(p));
        this._persona.damages.forEach(d => this._execute(d));
    }

    private _execute(feature: Feature): void {
        if (feature.expressions?.length > 0) {
            feature.expressions.forEach(f => this._expression(f));
        }
    }

    private _expression(description: Description): void {
        if (description.params?.length > 0) {
            const inputs: number[] = [];
            description.params.forEach(p => {
                let value = 0;
                switch (p.key) {
                    case KeyType.SPECIALIZATION:
                        const skill = this._persona.specializations.find(s => s.name === p.value);
                        value = Number(skill?.baseAttribute.value);
                        break;
                    case KeyType.BASE:
                        value = Number(p.value);
                        break;
                    case KeyType.ATTR:
                        const attr = this._persona.attributes.find(a => a.name === p.value);
                        value = Number(attr?.baseAttribute.value);
                        break;
                    case KeyType.EXPRESSION:
                        this._expression(p);
                        value = Number(p.result);
                        break;
                }
                inputs.push(value);
            });
            description.result = this._command(description.value as Command, inputs, inputs.length);
        }
    }

    private _command(command: Command, arr: number[], n: number): number {
        let result = 0;
        switch (command) {
            case Command.SUM:
                result = (new Sum()).execute(arr, n);
                break;
            case Command.PERCENTAGE:
                result = (new Percentage()).execute(arr, n);
                break;
        }
        return result;
    }
}