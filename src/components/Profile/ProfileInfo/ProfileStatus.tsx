import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type PropsType = {
    status: string
    updateStatus: (status: any) => void
}
const ProfileStatus = (props: PropsType) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

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
        <>
            {!editMode ?
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "no status"}</span>
                </div>

                : <div>
                    <input type="text"
                           autoFocus={true}
                           onBlur={reActivateEditMode}
                           onKeyPress={onKeyPressActivateEditMode}
                           onChange={onChangeHandler}
                           value={status}
                    />

                </div>
            }
        </>
    );
};

export default ProfileStatus;
