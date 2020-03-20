import React from 'react';
import DialogTest from './DialogsTest/DialogsTest';





const FirstList = (props) => {

    let testDialogMap = props.DialogTestMessage
    .map ( (test)=> <DialogTest name ={test.names} id={test.id}/> )

    return (
        <div> First list
            {testDialogMap}
        </div>
    )
}

export default FirstList;