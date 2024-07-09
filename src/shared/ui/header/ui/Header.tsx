import React, {ChangeEvent} from 'react';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';
import {RootState, useAppDispatch} from "../../../redux/store.ts";
import {useSelector} from "react-redux";
import {changeSearchString,changePage} from "../../../redux/slices/charactersSlice.ts";
import {Link} from "react-router-dom";

const SearchInput = styled(InputBase)`
    color: inherit;
    padding: 10px;
    width: 200px; /* Set initial width */
`;

export const Header: React.FC = () => {
    const dispatch = useAppDispatch();
    const { searchString } = useSelector((state: RootState) => state.characters);

    const handleChange = (ev:ChangeEvent<HTMLInputElement>)=>{
        dispatch(changePage(1))
        dispatch(changeSearchString(ev.target.value))
    }
    return (
        <header className='bg-swGold flex justify-around px-15 py-2 max-h-[70px]'>
            <Link to='/'>
                <img width={100}
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX6MK34zw_YfhT1F26_4dFyF5Rc8v8_ZexPg&s"
                     alt="Logo"/>
            </Link>
            <div className="flex">
                <SearchInput value={searchString || ''} onChange={handleChange} placeholder="Search..." startAdornment={<SearchIcon />} />
                </div>
        </header>
    );
};

