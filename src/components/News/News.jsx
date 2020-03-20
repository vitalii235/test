import React from 'react';
import s from './News.module.css';


const News =(props) => {
    return(
       <div className={s.item}>
           <img src='https://tinyjpg.com/images/social/website.jpg'/>
       </div>
    );
}

export default News;