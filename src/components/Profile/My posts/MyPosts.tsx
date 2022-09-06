import React from "react";
import s from './MyPosts.module.css'
import Post from "./Posts/Post";
import {PostsDataType} from "../../../types";

type PropsType = {
    postsData:Array<PostsDataType>
}

let MyPosts = (props:PropsType) => {
    let postsElement = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
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
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;


