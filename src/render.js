import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost} from './Redux/state';
import {addMessage} from './Redux/state';
import {updateNewPostText} from './Redux/state';
import {updateNewMessageText} from './Redux/state';
import {addText} from './Redux/state';
import {updateNewTestText} from './Redux/state';



export let renderEntireTree = (state) => {
    ReactDOM.render(<App state={state} addPost={addPost} addMessage={addMessage} addText={addText} updateNewTestText={updateNewTestText} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText}/>, 
        document.getElementById('root'));
}


