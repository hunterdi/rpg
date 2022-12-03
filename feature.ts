import { BaseAttribute } from './base-attribute';
import { Formula } from './formula';

export abstract class Feature {
    public name!: string;
    public baseAttribute!: BaseAttribute;
    public formulas?: Formula[];
}