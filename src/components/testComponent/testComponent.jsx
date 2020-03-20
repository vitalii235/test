import React from 'react';
import s from './testComponent.module.css';
import FirstList from './FirstList/FirstList';
import SecondList from './SecondList/SecondList';


const TestComponent =(props)=> {

let newTextElement = React.createRef();

let addText = () =>{
    props.addText ()
}
let onTextChange =()=>{
    let currentText = newTextElement.current.value;
    props.updateNewTestText(currentText)
}
    return (
        <div className={s.container}>
            <FirstList DialogTestMessage={props.state.DialogTestMessage}/>
            <SecondList MessageTestList={props.state.MessageTestList}/>  
            <textarea ref={newTextElement} onChange={onTextChange} value={props.state.messageTestText}/>
            <button onClick={addText}>Click here</button>
        </div>
    );
}



export default TestComponent;