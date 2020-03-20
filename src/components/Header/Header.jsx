import React from 'react';
import s from './Header.module.css';


const Header = () =>{
    return(
     <header className={s.app__header}>
        <img src="https://cdn.worldvectorlogo.com/logos/puma-logo.svg" />
     </header>
    );
}

export default Header;