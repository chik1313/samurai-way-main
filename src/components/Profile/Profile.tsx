import React from "react";
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes , PostsDataType, StoreType} from "../../types";
import MyPostsContainer from "./My posts/MyPosts-container";

type PropsType = {
    store:StoreType
    postsData: Array<PostsDataType>,
    newPostText:string
    dispatch: (action:ActionTypes) => void

}

let Profile = () => {

    return (
        <div className={s.content}>
            <ProfileInfo/>
             <MyPostsContainer />
        </div>);
}

export default Profile;


