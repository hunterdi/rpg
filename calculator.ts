import { Percentage, Sum } from './command';
import { Description, formula, keyConfiguration } from './description';
import { Feature } from './feature';
import { Persona } from './persona';

export class Calculator {
    constructor(private readonly _persona: Persona) { }

    public Process(): void {
        this._persona.skills.forEach(s => this._execute(s));
    }

    private _execute(feature: Feature): void {
        if (feature.formulas) {
            feature.formulas.forEach(f => this._formula(f));
        }
    }

    private _formula(description: Description): void {
        if (description.params) {
            const inputs: number[] = [];
            description.params.forEach(p => {
                let value = 0;
                switch (p.key) {
                    case keyConfiguration.SKILL:
                        const skill = this._persona.skills.find(s => s.name === p.value);
                        value = Number(skill?.baseAttribute.value);
                        break;
                    case keyConfiguration.BASE:
                        value = Number(p.value);
                        break;
                    case keyConfiguration.ATTR:
                        const attr = this._persona.attributes.find(a => a.name === p.value);
                        value = Number(attr?.baseAttribute.value);
                        break;
                    case keyConfiguration.FORMULA:
                        this._formula(p);
                        value = Number(p.result);
                        break;
                }
                inputs.push(value);
            });
            description.result = this._command(description.value as formula, inputs, inputs.length);
        }
    }

    private _command(command: formula, arr: number[], n: number): number {
        let result = 0;
        switch (command) {
            case formula.SUM:
                result = (new Sum()).execute(arr, n);
                break;
            case formula.PERCENTAGE:
                result = (new Percentage()).execute(arr, n);
                break;
        }
        return result;
    }
}