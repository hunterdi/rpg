import { Dice, DiceType } from "./dice";
import { Parameter } from "./parameter";

export abstract class Description {
    public key!: string;
    public input?: string;
    public value!: string;
    public configuration!: DescriptionConfiguration;
    public dice?: DiceType;
    public params?: Parameter[];
    public result?: number;
}

export class DescriptionConfiguration {
    public key!: string;
    public type!: Type;
}

export enum Type {
    STRING = "STRING",
    INTEGER = "INTEGER",
    FLOAT = "FLOAT",
    JSON = "JSON",
    OPTION = "OPTION"
}

export enum Command {
    SUM = "SUM",
    SUBTRACT = "SUBTRACT",
    MULTIPLICATION = "MULTIPLICATION",
    DIVISION = "DIVISION",
    PERCENTAGE = "PERCENTAGE",
}

export enum KeyType {
    ATTR = "ATTR",
    SPECIALIZATION = "SPECIALIZATION",
    EXPRESSION = "EXPRESSION",
    RESPONSE = "RESPONSE",
    INPUT = "INPUT",
    BASE = "BASE",
    SKILL = "SKILL"
}

