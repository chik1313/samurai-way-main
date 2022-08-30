import React from "react";
import s from './MyPosts.module.css'
import Post from "./Posts/Post";

let MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Hi,how are you?'/>
                <Post message="Hello,it's my first post!"/>
            </div>
        </div>
    );
}

export default MyPosts;
