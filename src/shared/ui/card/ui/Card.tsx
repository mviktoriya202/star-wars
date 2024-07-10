import React from 'react';
import { Card as MUICard, CardContent, CardActions, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import {CharacterCardProps} from "../../../types";
import {Link} from "react-router-dom";
import {details} from "../lib/consts.ts";

const StyledCard = styled(MUICard)`
  background-color: #7e7863; 
  color: white;
  margin: 16px;
  max-width: 300px;
`;

const StyledButton = styled(Button)`
  background-color: #ad7d37; 
  color: white;
  &:hover {
    background-color: #8a642b; 
  }
`;


export const Card: React.FC<CharacterCardProps> = ({ name,id,...detailsProps }) => {

    return (
        <StyledCard className='min-w-[300px] my-2 '>
            <CardContent>
                <Typography variant="h5" component="div" className="text-white mb-2">
                    {name}
                </Typography>
                {details.map(({ label, key }) => (
                    <Typography key={key} variant="body2" className="text-white">
                        {label}: {detailsProps[key as keyof typeof detailsProps]}
                    </Typography>
                ))}
            </CardContent>
            <CardActions>
                <StyledButton size="small">
                    <Link to={`/${id}`}>See More</Link>
                </StyledButton>
            </CardActions>
        </StyledCard>
    );
};

