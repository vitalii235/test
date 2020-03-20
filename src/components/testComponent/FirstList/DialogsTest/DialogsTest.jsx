import React from 'react';
import {NavLink} from 'react-router-dom';


const DialogTest =(props)=> {
    return (
        <div>
            <NavLink to={'/test/' + props.id}>{props.name}</NavLink> 
        </div>
    )
}


export default DialogTest;