import { baseAttributes as BaseAttributes } from "./attribute";
import { Calculator } from "./calculator";
import { DescriptionConfiguration, Command, KeyType, Type } from "./description";
import { Dice } from "./dice";
import { Persona } from "./persona";
import { TypeSpecialization } from "./skill";

const attrInteger: DescriptionConfiguration = {
    key: KeyType.ATTR,
    type: Type.INTEGER,
};

const persona = new Persona();
persona.name = "JD Hunter";
persona.attributes = [
    {
        name: BaseAttributes.STRONG,
        baseAttribute: {
            key: KeyType.ATTR,
            value: (new Dice(10).getValue()).toString(),
            configuration: attrInteger
        }
    },
    {
        name: BaseAttributes.DEFENSE,
        baseAttribute: {
            key: KeyType.ATTR,
            value: (new Dice(10).getValue()).toString(),
            configuration: attrInteger
        }
    },
    {
        name: BaseAttributes.STAMINA,
        baseAttribute: {
            key: KeyType.ATTR,
            value: (new Dice(10).getValue()).toString(),            
            configuration: attrInteger
        }
    },
    {
        name: BaseAttributes.AGILITY,
        baseAttribute: {
            key: KeyType.ATTR,
            value: (new Dice(10).getValue()).toString(),
            configuration: attrInteger
        }
    },
    {
        name: BaseAttributes.MENTAL,
        baseAttribute: {
            key: KeyType.ATTR,
            value: (new Dice(10).getValue()).toString(),
            configuration: attrInteger
        }
    },
    {
        name: BaseAttributes.WISDOM,
        baseAttribute: {
            key: KeyType.ATTR,
            value: (new Dice(10).getValue()).toString(),
            configuration: attrInteger
        }
    },
    {
        name: BaseAttributes.INTELLIGENCE,
        baseAttribute: {
            key: KeyType.ATTR,
            value: (new Dice(10).getValue()).toString(),
            configuration: attrInteger
        }
    },
    {
        name: BaseAttributes.CHARISM,
        baseAttribute: {
            key: KeyType.ATTR,
            value: (new Dice(10).getValue()).toString(),
            configuration: attrInteger
        }
    },
    {
        name: BaseAttributes.CONSTITUTION,
        baseAttribute: {
            key: KeyType.ATTR,
            value: (new Dice(10).getValue()).toString(),
            configuration: attrInteger
        }
    },
];
persona.specializations = [
    {
        name: TypeSpecialization.COMBAT_MELEE,
        baseAttribute: {
            key: KeyType.SPECIALIZATION,
            value: (new Dice(4).getValue()).toString(),
            configuration: {
                key: KeyType.SPECIALIZATION,
                type: Type.INTEGER,
            }
        },
        expressions: [
            {
                key: KeyType.EXPRESSION,
                value: Command.SUM,
                params: [
                    {
                        key: KeyType.ATTR,
                        value: BaseAttributes.STRONG,
                        configuration: attrInteger
                    },
                    {
                        key: KeyType.EXPRESSION,
                        value: Command.PERCENTAGE,
                        params: [
                            {
                                key: KeyType.SPECIALIZATION,
                                value: TypeSpecialization.COMBAT_MELEE,
                                configuration: {
                                    key: KeyType.SPECIALIZATION,
                                    type: Type.INTEGER,
                                }
                            },
                            {
                                key: KeyType.BASE,
                                value: "1",
                                configuration: {
                                    key: KeyType.BASE,
                                    type: Type.FLOAT,
                                }
                            },
                        ],
                        configuration: {
                            key: Command.PERCENTAGE,
                            type: Type.FLOAT,
                        }
                    }
                ],
                configuration: {
                    key: KeyType.SPECIALIZATION,
                    type: Type.INTEGER,
                }
            },
        ]
    }
];

const calc = new Calculator(persona);
calc.Process();
console.log(JSON.stringify(persona));