import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Posts/Post";
import {PostsDataType} from "../../../types";
import {MyPostsPropsType} from "./MyPosts-container";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type PropsType = {
    postsData: Array<PostsDataType>
    newPostText:string
    addPost:()=>void
    onPostChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void
}

let MyPosts = (props: MyPostsPropsType) => {
    let postsElement = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let addPost = (values:TextAreaType) => {
        props.addPost(values.newPostText);
    }
 /*   let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.onPostChange(e);
    }*/
    return (
        <div className={s.postsBlock}>
            <h3>my posts</h3>
            <AddNewPostFormRedux onSubmit={addPost}/>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
}
type TextAreaType = {
    newPostText:string
}
const AddNewPostForm:React.FC<InjectedFormProps<TextAreaType>> = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newPostText" component="textarea"/>
        </div>
        <div>
            <button >Add post</button>
        </div>
    </form>
    )
}

const AddNewPostFormRedux = reduxForm<TextAreaType>({form:"ProfileAddNewPostForm"})(AddNewPostForm)
export default MyPosts;


