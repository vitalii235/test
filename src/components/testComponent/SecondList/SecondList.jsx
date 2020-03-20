import React from 'react';
import MessageTest from './MessageTest/MessageTest';




const SecondList = (props) => {

    let MessageTestMap = props.MessageTestList
    .map ((test) =><MessageTest message={test.message} />)

    return (
        <div> Second List
            {MessageTestMap}
        </div>
    )
}

export default SecondList; 