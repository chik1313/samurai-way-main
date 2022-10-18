import React, {ChangeEvent} from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AllStateType} from "../../../Redux/redux-store";


type DispatchPropsType = {
    addPost: () => void,
    onPostChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const mapStateToProps = (state:AllStateType) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText:state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch:Dispatch):DispatchPropsType => {
    return {
        addPost: () => {

            dispatch(addPostActionCreator())
        },
        onPostChange: (e: ChangeEvent<HTMLTextAreaElement>) => {
            let text = e.currentTarget.value
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}
export type MyPostsPropsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;


