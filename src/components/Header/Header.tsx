import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
type HeaderPropsType = {
    isAuth:boolean;
    login:string|null
}
let Header = (props:HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Logo_of_the_National_Council_of_Ukraine_on_Television_and_Radio_Broadcasting.svg"
                alt=""/>
            <div className={s.loginBlock}>
                { props.isAuth
                    ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;
