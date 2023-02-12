import React from "react";
import s from './Post.module.css';


type MessageType = {
    message: string
    likesCount: number
}

let Post:React.FC<MessageType> = (props) => {

    return (
        <div className={s.item}>
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Soccer_ball.svg/2048px-Soccer_ball.svg.png"
                 alt=""/>
            {props.message}
            <div>
                <span>like:{props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;
