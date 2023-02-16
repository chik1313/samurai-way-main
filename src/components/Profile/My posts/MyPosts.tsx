import React from "react";
import s from './MyPosts.module.css'
import Post from "./Posts/Post";
import {MyPostsPropsType} from "./MyPosts-container";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import Textarea from "../../common/FormsControlls/FormsControls";
import {Button} from "@mui/material";


const MyPosts = React.memo(function (props: MyPostsPropsType) {

    let postsElement = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let addPost = (values: TextAreaType) => {
        props.addPost(values.newPostText);

    }
    return (
        <div className={s.postsBlock}>
            <div>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={addPost}/>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    );
});

type TextAreaType = {
    newPostText:string
}
const maxLength10 = maxLengthCreator(10)
const AddNewPostForm:React.FC<InjectedFormProps<TextAreaType>> = (props) => {
    return (
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newPostText" component={Textarea} validate={[requiredField , maxLength10]}/>
        </div>
        <div>
            <Button type='submit' variant='outlined' size='small'>Add post</Button>
        </div>
    </form>
    )
}

const AddNewPostFormRedux = reduxForm<TextAreaType>({form:"ProfileAddNewPostForm"})(AddNewPostForm)
export default MyPosts;


