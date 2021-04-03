import React from 'react';
import {NavLink} from 'react-router-dom';
import './Button.css';

export function Button({name, path}) {
    return (
        <>
            <NavLink activeClassName="active"
                     className='button'
                     to={path}>
                {name}
            </NavLink>
        </>
    );
}
