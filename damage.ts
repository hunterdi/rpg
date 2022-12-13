import { DiceType } from "./dice";
import { Feature } from "./feature";

export class Damage extends Feature {
    type: typeDamage;
    duration: string;
    dice: DiceType;
    target: Target;
}

export enum typeDamage {
    PHISIC = 0,
    MAGIC = 1,
    ELEMENTAL = 2,
    PSIONICO = 3
}

export enum Target {
    AREA = 0,
    PARSIVE = 1,
    ATIVE = 3,
    MULTIPLE = 4
}

export enum StatusDamage {
    PARALYZED = 0,
    FROZEN = 1,
    WET = 2,
    BURNED = 3,
    BLIND = 4,
    CONFUSED = 5,
    FEAR = 6,
    ANGRY = 7,
    ELECTROCUTED = 8,
    BUFFED = 9,
    DEBUFED = 10,
    STUNED = 11,
    PETRIFIED = 12,
}