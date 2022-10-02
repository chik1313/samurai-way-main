import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Posts/Post";
import {PostsDataType} from "../../../types";


type PropsType = {
    postsData: Array<PostsDataType>
    newPostText:string
    addPost:()=>void
    onPostChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void
}

let MyPosts = (props: PropsType) => {
    let postsElement = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let addPost = () => {
        props.addPost();
    }
    let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.onPostChange(e);
    }
    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;


