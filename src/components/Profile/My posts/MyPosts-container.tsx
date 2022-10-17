import React, {ChangeEvent, useContext} from "react";

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AllStateType} from "../../../Redux/redux-store";


type DispatchPropsType = {
    addPost: () => void,
    onPostChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}


// let MyPostsContainer = (props: PropsType) => {
//     const store = useContext(StoreContext)
//
//     let addPost = () => {
//         let text = props.newPostText
//         props.store.dispatch(addPostActionCreator(text))
//     }
//     let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
//         let text = e.currentTarget.value
//         props.store.dispatch(updateNewPostTextActionCreator(text))
//     }
//
//     return <StoreContext.Consumer>
//         {(store: StoreType) => {
//             return <MyPosts postsData={props.postsData} newPostText={props.newPostText} addPost={addPost} onPostChange={onPostChange}/>
//         }}
//     </StoreContext.Consumer>
// }


const mapStateToProps = (state:AllStateType) => {
    return {
        postsData: state.profileReducer.postsData,
        newPostText:state.profileReducer.newPostText
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


