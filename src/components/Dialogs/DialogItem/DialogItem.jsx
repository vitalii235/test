import React from 'react';
import s from './DialogeItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/Dialogs/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>

    )
}



export default DialogItem;
