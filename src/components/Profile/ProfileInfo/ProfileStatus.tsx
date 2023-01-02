import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
type PropsType = {
    status:string
    updateStatus: (status:any)=> void
}
const ProfileStatus = (props:PropsType) => {
    let [editMode,setEditMode] = useState(false)
    let [status,setStatus ] = useState(props.status)

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        const newStatus = e.currentTarget.value
        setStatus(newStatus)

    }
    const activateEditMode = ()=> {
        setEditMode(true)
    }
    const reActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
   /* let reActivateEditMode;
    useEffect(()=>{
        reActivateEditMode = () => {
            setEditMode(false)
            props.updateStatus(status)
        }
    },[status])*/
   const onKeyPressActivateEditMode = (e:KeyboardEvent<HTMLInputElement>) => {
        if(e.charCode === 13) {
            setEditMode(false)
            props.updateStatus(status)
        }
    }


    return (
        <>
            {!editMode ?
                <div>
                    <span onDoubleClick={activateEditMode} >{ props.status || "no status"}</span>
                </div>

             :   <div>
                    <input type="text"
                           autoFocus={true}
                           onBlur={reActivateEditMode}
                           onKeyPress={onKeyPressActivateEditMode}
                           onChange={onChangeHandler}/>
                </div>
            }
        </>
    );
};

export default ProfileStatus;
