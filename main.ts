import { baseAttributes } from "./attribute";
import { Calculator } from "./calculator";
import { DescriptionConfiguration, formula, keyConfiguration, type } from "./description";
import { Persona } from "./Persona";
import { baseSkill } from "./skill";

const attrInteger: DescriptionConfiguration = {
    key: keyConfiguration.ATTR,
    type: type.INTEGER,
};

const persona = new Persona();
persona.name = "JD Hunter";
persona.attributes = [
    {
        name: baseAttributes.STRONG,
        baseAttribute: {
            key: keyConfiguration.ATTR,
            value: "0",
            configuration: attrInteger
        }
    },
    {
        name: baseAttributes.DEFENSE,
        baseAttribute: {
            key: keyConfiguration.ATTR,
            value: "0",
            configuration: attrInteger
        }
    },
    {
        name: baseAttributes.STAMINA,
        baseAttribute: {
            key: keyConfiguration.ATTR,
            value: "0",
            configuration: attrInteger
        }
    },
    {
        name: baseAttributes.AGILITY,
        baseAttribute: {
            key: keyConfiguration.ATTR,
            value: "0",
            configuration: attrInteger
        }
    },
    {
        name: baseAttributes.MENTAL,
        baseAttribute: {
            key: keyConfiguration.ATTR,
            value: "0",
            configuration: attrInteger
        }
    },
    {
        name: baseAttributes.WISDOM,
        baseAttribute: {
            key: keyConfiguration.ATTR,
            value: "0",
            configuration: attrInteger
        }
    },
    {
        name: baseAttributes.INTELLIGENCE,
        baseAttribute: {
            key: keyConfiguration.ATTR,
            value: "0",
            configuration: attrInteger
        }
    },
    {
        name: baseAttributes.CHARISM,
        baseAttribute: {
            key: keyConfiguration.ATTR,
            value: "0",
            configuration: attrInteger
        }
    },
    {
        name: baseAttributes.CONSTITUTION,
        baseAttribute: {
            key: keyConfiguration.ATTR,
            value: "0",
            configuration: attrInteger
        }
    },
];
persona.skills = [
    {
        name: baseSkill.COMBAT_MELEE,
        baseAttribute: {
            key: keyConfiguration.SKILL,
            value: "1",
            configuration: {
                key: keyConfiguration.SKILL,
                type: type.INTEGER,
            }
        },
        formulas: [
            {
                key: keyConfiguration.FORMULA,
                value: formula.SUM,
                params: [
                    {
                        key: keyConfiguration.ATTR,
                        value: baseAttributes.CONSTITUTION,
                        configuration: attrInteger
                    },
                    {
                        key: keyConfiguration.FORMULA,
                        value: formula.PERCENTAGE,
                        params: [
                            {
                                key: keyConfiguration.SKILL,
                                value: baseSkill.COMBAT_MELEE,
                                configuration: {
                                    key: keyConfiguration.SKILL,
                                    type: type.INTEGER,
                                }
                            },
                            {
                                key: keyConfiguration.BASE,
                                value: "1",
                                configuration: {
                                    key: keyConfiguration.BASE,
                                    type: type.FLOAT,
                                }
                            },
                        ],
                        configuration: {
                            key: formula.PERCENTAGE,
                            type: type.FLOAT,
                        }
                    }
                ],
                configuration: {
                    key: keyConfiguration.SKILL,
                    type: type.INTEGER,
                }
            },
        ]
    }
];

const calc = new Calculator(persona);
calc.Process();
console.log(persona);