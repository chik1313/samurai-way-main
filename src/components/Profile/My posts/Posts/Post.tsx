import React from "react";
import s from './Post.module.css';


type MessageType = {
    message: string
    likesCount: number
}

let Post:React.FC<MessageType> = (props) => {

    return (
        <div className={s.item}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"
                 alt=""/>
            {props.message}
            <div>
                <span>like:{props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;
