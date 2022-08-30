import React from "react";
import s from './Post.module.css';
import {message} from "antd";

type MessageType = {
    message: string
}

let Post:React.FC<MessageType> = (props) => {

    return (
        <div className={s.item}>
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ec/Soccer_ball.svg/2048px-Soccer_ball.svg.png"
                 alt=""/>
            {props.message}
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}

export default Post;
