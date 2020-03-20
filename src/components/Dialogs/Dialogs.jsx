import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';


const Dialogs = (props) => {

    let newDialogElement = React.createRef ();

    let addMessage = () => {
        let text = newDialogElement.current.value;
        props.addMessage(text);
    }

    let onMessageChange =()=>{
        let text = props.updateNewMessageText(newDialogElement.current.value);  
       
    }


    // Маплю
    let dialogsElement = props.state.dialogsData
        .map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = props.state.messagesData
        .map((message) => <Messages message={message.message} />);

    return (
            <div className={s.dialogs}>
                <div className={s.dialogs_items}>
                    {dialogsElement}
                    
                    <textarea onChange={onMessageChange} ref={newDialogElement} value={props.state.newMessageText}/>
                    <button onClick={addMessage}>Hi world</button>
                </div>
                <div className={s.messages}>
                    {messagesElements}
                    
                </div>
                
            </div>
    );
}

export default Dialogs;