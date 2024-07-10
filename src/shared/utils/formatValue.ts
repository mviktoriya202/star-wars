import {CardType} from "../types/types.ts";

interface IProps {
    key:keyof CardType;
    value: string | string[] | [],
    arrayFields:string[]
}

export  const formatValue = ({key, value, arrayFields}:IProps): string => {
    if (arrayFields.includes(key)) {
        if (Array.isArray(value)) {
            return value.join(', ');
        }
        return value.toString();
    }
    return value.toString();
};