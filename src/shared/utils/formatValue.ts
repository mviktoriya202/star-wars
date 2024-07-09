import {CardType} from "../types/types.ts";

export  const formatValue = (key: keyof CardType, value: string | string[] | [],arrayFields:string[]): string => {
    if (arrayFields.includes(key)) {
        if (Array.isArray(value)) {
            return value.join(', ');
        }
        return value.toString();
    }
    return value.toString();
};