import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Posts/Post";
import {ActionTypes, addMessageType, PostsDataType} from "../../../types";
import {text} from "stream/consumers";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/state";


type PropsType = {
    postsData: Array<PostsDataType>
    newPostText:string
    dispatch: (action:ActionTypes) => void
}



let MyPosts = (props: PropsType) => {
    let postsElement = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>);


    let addPost = () => {
        // props.addPost();
        let text = props.newPostText
        props.dispatch(addPostActionCreator(text))
    }
    let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.dispatch(updateNewPostTextActionCreator(text))

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


