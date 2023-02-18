import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import {TextField} from "@mui/material";
import s from './ProfileStatus.module.css'

type PropsType = {
    status: string
    updateStatus: (status: any) => void
}
const ProfileStatus = (props: PropsType) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newStatus = e.currentTarget.value
        setStatus(newStatus)

    }
    const activateEditMode = () => {
        setEditMode(true)
    }
    const reActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onKeyPressActivateEditMode = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            setEditMode(false)
            props.updateStatus(status)
        }
    }

    return (
        <div className={s.status}>
            {!editMode ?
                <div>
                    <b style={{color:"black"}}>Status : </b><span onDoubleClick={activateEditMode}>{props.status || "no status"}</span>
                </div>

                : <div>
                    <TextField type="text"
                           autoFocus={true}
                           onBlur={reActivateEditMode}
                           onKeyPress={onKeyPressActivateEditMode}
                           onChange={onChangeHandler}
                           value={status}
                    />

                </div>
            }
        </div>
    );
};

export default ProfileStatus;
