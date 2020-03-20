import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route, BrowserRouter } from "react-router-dom";
import News from './components/News/News';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import TestComponent from './components/testComponent/testComponent';



 
const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          
          <Route path='/news' render={ () => <News />} />
          <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogPage} addMessage={props.addMessage} updateNewMessageText={props.updateNewMessageText}/>} />
          <Route path='/profile' render={ () => <Profile profilePage={props.state.postPage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>} />
          <Route path='/music' render = { () => <Music />} />
          <Route path='/test' render={ () => <TestComponent state={props.state.testPage} addText={props.addText} updateNewTestText={props.updateNewTestText}/>} />

        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
