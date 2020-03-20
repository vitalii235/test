import React from 'react';

import { NavLink } from 'react-router-dom';




const Messages = (props) => {
    return (
        <div >
            {props.message}
        </div>
    )
}

export default Messages;