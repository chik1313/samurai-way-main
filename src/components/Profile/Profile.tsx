import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./My posts/MyPosts";
import {ActionTypes, addMessageType, PostsDataType} from "../../types";

type PropsType = {
    postsData: Array<PostsDataType>,
    newPostText:string
    dispatch: (action:ActionTypes) => void
}

let Profile = (props: PropsType) => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
             <MyPosts  postsData={props.postsData} dispatch={props.dispatch} newPostText={props.newPostText} />
        </div>);
}

export default Profile;


