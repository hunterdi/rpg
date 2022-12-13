import { BaseAttribute } from './base-attribute';
import { Expression } from './expression';

export abstract class Feature {
    public name!: string;
    public baseAttribute!: BaseAttribute;
    public expressions?: Expression[];
}