import React, {ComponentPropsWithoutRef, FC} from 'react';
import {WrappedFieldProps} from "redux-form/lib/Field";
import styles from "./FormControls.module.css"

type TextareaPropsType = WrappedFieldProps  & ComponentPropsWithoutRef<'textarea'>
type InputPropsType = WrappedFieldProps  & ComponentPropsWithoutRef<'input'>

const Textarea: FC<TextareaPropsType> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <textarea {...input} {...props} />
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    );
};
export const Input: FC<InputPropsType> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <input {...input} {...props} />
            </div>
            { hasError && <span>{meta.error}</span> }
        </div>
    );
};

export default Textarea;
