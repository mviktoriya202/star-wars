import React, { ChangeEvent, useState } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button
} from '@mui/material';
import { CardType } from "../../../types";
import {getCardsDataFromLocalStorage, formatDate, formatValue} from "../../../utils";

interface CardTableProps extends CardType {
    id: string;
    disabledFields: string[];
    arrayFields: string[];
    dateFields: string[];
}
interface ICell {
    key: keyof CardType,
    value: string | string[]
}

export const CardTable: React.FC<CardTableProps> = ({ disabledFields, dateFields, arrayFields, ...props }) => {
    const [data, setData] = useState<CardType>(() => {
        const savedData = getCardsDataFromLocalStorage();
        if (savedData.length > 0) {
            const existingCard = savedData.find(card => card.id === props.id);
            return existingCard ? existingCard : props;
        }
        return props;
    });
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = () => {
        const cards = getCardsDataFromLocalStorage();
        const existingCardIndex = cards.findIndex(card => card.id === props.id);
        if (existingCardIndex >= 0) {
            cards[existingCardIndex] = data;
        } else {
            cards.push(data);
        }
        localStorage.setItem('cardsData', JSON.stringify(cards));
        setIsEditing(false);
    };

    const formatCellValue = ({key, value}:ICell): string => {
        if (dateFields.includes(key) && typeof value === 'string') {
            return formatDate(value);
        } else if (arrayFields.includes(key)) {
            formatValue({key, value, arrayFields})
        }
        return value.toString();
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Property</TableCell>
                        <TableCell>Value</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.keys(data).map((key) => {
                        const isFieldDisabled = disabledFields.includes(key);
                        return (
                            <TableRow key={key}>
                                <TableCell>{key.replace('_', ' ')}</TableCell>
                                <TableCell>
                                    {isEditing ? (
                                        <TextField
                                            name={key}
                                            value={data[key as keyof CardType]}
                                            onChange={handleChange}
                                            fullWidth
                                            disabled={isFieldDisabled}
                                        />
                                    ) : (
                                        formatCellValue({key:key as keyof CardType, value:data[key as keyof CardType]})
                                    )}
                                </TableCell>
                            </TableRow>
                        );
                    })}
                    <TableRow>
                        <TableCell colSpan={2}>
                            <Button onClick={toggleEdit} variant="contained" color="primary">
                                {isEditing ? 'Cancel' : 'Edit'}
                            </Button>
                            {isEditing && (
                                <Button onClick={handleSave} variant="contained" color="secondary" style={{ marginLeft: '10px' }}>
                                    Save
                                </Button>
                            )}
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};
