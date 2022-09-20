import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./My posts/MyPosts";
import {addMessageType, PostsDataType} from "../../types";

type PropsType = addMessageType & {
    postsData: Array<PostsDataType>,
    newPostText:string
}

let Profile = (props: PropsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
             <MyPosts  postsData={props.postsData} addPost={props.addPost} newPostText={props.newPostText} updateNewPostText={props.updateNewPostText}/>
        </div>);
}

export default Profile;


