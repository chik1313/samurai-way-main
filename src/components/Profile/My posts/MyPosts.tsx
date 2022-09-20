import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Posts/Post";
import {addMessageType, PostsDataType} from "../../../types";


type PropsType = addMessageType & {
    postsData: Array<PostsDataType>
    newPostText:string
}

let MyPosts = (props: PropsType) => {
    let postsElement = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

   // // const [text,setText] = useState<string>('');
   //
   // const changeText = (e:ChangeEvent<HTMLTextAreaElement>) => {
   //     setText(e.currentTarget.value)
   // }

    let addPost = () => {
        props.addPost();
    }
    let onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        // setText(e.currentTarget.value);
        props.updateNewPostText(e.currentTarget.value)

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


