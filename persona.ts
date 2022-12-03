import { Attribute } from './attribute';
import { Personality } from './personality';
import { Skill } from './skill';

export class Persona {
    public name!: string;
    public attributes!: Attribute[];
    public personalities!: Personality[];
    public skills!: Skill[];
}