import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';

// let c1 = 'item';
// let c2 = 'active';
// let classes = c1 + "" + c2;
// let classesNew = `${s.item} ${s.active}`;

let Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/Profile' className={({isActive}) => isActive ? s.activeLink : ""}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/Dialogs' className={({isActive}) => isActive ? s.activeLink : ""}>Messages</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/Users' className={({isActive}) => isActive ? s.activeLink : ""}>Users</NavLink>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Nav;
