import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControlls/FormsControls";
import {requiredField} from "../../utils/validators/validators";

type FormDataType = {
    login:string,
    password:string,
    rememberMe: boolean
}

export const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Login"} name={"login"} validate={[requiredField]} component={Input}/>
                </div>
                <div>
                    <Field placeholder={"password"} name={"password"} validate={[requiredField]} component={Input}/>
                </div>
                <div>
                    <Field type="checkbox" name={"rememberMe"} component={Input} /> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>

    )
}
export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)
export const Login = () => {
    const onSubmit = (formData:FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
