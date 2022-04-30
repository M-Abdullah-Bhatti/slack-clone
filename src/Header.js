import React from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { AccessTime } from '@material-ui/icons';
import { HelpOutline } from '@material-ui/icons';
import { useStateValue } from './StateProvider';

function Header() {
    const [{user}]=useStateValue();
    return (
        <div className='header'>
            <div className='header__left'>
                {/* Avatar for logged in user */}
                <Avatar className='header__avatar' 
                alt={user?.displayName}
                src={user?.photoURL}
                />
                {/* Time icon */}
                <AccessTime />

            </div>
            <div className='header__search'>
                {/* Search icon */}
                <Search />
                {/* Input */}
                <input placeholder='Search from here...' type="text"></input>
            </div>
            <div className='header__right'>
                {/* Help Icon */}
                <HelpOutline />
            </div>

        </div>

    )
}

export default Header