import React, {FC} from "react";
import s from "./ProfileInfo.module.css";

type ContactPropsType = {
    contactTitle: string,
    contactValue: any
}
export const Contact: FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contacts}>
            <b>{contactTitle}</b>:{contactValue}
        </div>
    )
}
