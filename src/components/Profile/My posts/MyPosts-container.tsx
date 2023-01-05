import React from "react";
import {addPostActionCreator} from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AllStateType} from "../../../Redux/redux-store";


type DispatchPropsType = {
    addPost: (newPostText:string) => void,

}

const mapStateToProps = (state:AllStateType) => {
    return {
        postsData: state.profilePage.postsData,
        /*newPostText:state.profilePage.newPostText*/
    }
}
const mapDispatchToProps = (dispatch:Dispatch):DispatchPropsType => {
    return {
        addPost: (newPostText:string) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}
export type MyPostsPropsType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;


