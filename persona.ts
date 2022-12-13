import { Attribute } from './attribute';
import { Damage } from './damage';
import { Personality } from './personality';
import { Specialization } from './skill';

export class Persona {
    public name!: string;
    public attributes!: Attribute[];
    public personalities!: Personality[];
    public specializations!: Specialization[];
    public damages: Damage[];    
}