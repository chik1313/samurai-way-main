import React, {ChangeEvent, useContext} from "react";

import {ActionTypes, PostsDataType, StoreType} from "../../../types";

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../StoreContext";


type PropsType = {
    store: StoreType
    postsData: Array<PostsDataType>
    newPostText: string
    dispatch: (action: ActionTypes) => void
}


let MyPostsContainer = (props: PropsType) => {
    const store = useContext(StoreContext)

    let addPost = () => {
        let text = props.newPostText
        props.store.dispatch(addPostActionCreator(text))
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.store.dispatch(updateNewPostTextActionCreator(text))
    }
    // let addPost = () => {
    //     let text = props.newPostText
    //     props.store.dispatch(addPostActionCreator(text))
    // }
    // let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
    //     let text = e.currentTarget.value
    //     props.store.dispatch(updateNewPostTextActionCreator(text))
    //
    // }
    return <StoreContext.Consumer>
        {(store: StoreType) => {
            return <MyPosts postsData={props.postsData} newPostText={props.newPostText} addPost={addPost} onPostChange={onPostChange}/>
        }}
    </StoreContext.Consumer>


}

export default MyPostsContainer;


