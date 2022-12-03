import { Parameter } from "./parameter";

export abstract class Description {
    public key!: string;
    public input?: string;
    public value!: string;
    public configuration!: DescriptionConfiguration;
    public params?: Parameter[];
    public result?: number;
}

export class DescriptionConfiguration {
    public key!: string;
    public type!: type;
}

export enum type {
    STRING  = "STRING",
    INTEGER = "INTEGER",
    FLOAT = "FLOAT",
    JSON = "JSON",
    OPTION = "OPTION"
}

export enum formula {
    SUM = "SUM",
    SUBTRACT = "SUBTRACT",
    MULTIPLICATION = "MULTIPLICATION",
    DIVISION = "DIVISION",
    PERCENTAGE = "PERCENTAGE",
}

export enum keyConfiguration {
    ATTR = "ATTR",
    SKILL = "SKILL",
    FORMULA = "FORMULA",
    RESPONSE = "RESPONSE",
    INPUT = "INPUT",
    BASE = "BASE",
}

