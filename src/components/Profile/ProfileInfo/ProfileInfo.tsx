import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <>
            <div>
                <img
                    src="https://vetstreet.brightspotcdn.com/dims4/default/a655372/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fef%2Fce8f70a81b11e0a0d50050568d634f%2Ffile%2FShiba-Inu-4-645mk070111.jpg"
                    alt=""/>
            </div>
            <div className={s.DescriptionBlock}>
                ava + desription
            </div>
        </>
    )
}

export default ProfileInfo;
