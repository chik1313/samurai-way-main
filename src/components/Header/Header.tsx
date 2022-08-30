import React from 'react';
import s from './Header.module.css'

let Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Logo_of_the_National_Council_of_Ukraine_on_Television_and_Radio_Broadcasting.svg"
                alt=""/>
        </header>
    )
}

export default Header;
