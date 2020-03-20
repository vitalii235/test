import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = (props) => {

  let newPostElement = React.createRef ();

  let addPost = () => {
    props.addPost ()
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText (text)
  }

  let postElements = props.postsData
  .map((p) => <Post message={p.message} likes={p.likes}/>)

  return (
    <div>
      My post
      <div>
        New Post
        </div>
      <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
      <button onClick={addPost}>Add button</button>
      <div>

        {postElements}

      </div>
    </div>
  );
}


export default MyPosts;