import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControlls/FormsControls";
import {requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {AllStateType} from "../../Redux/redux-store";
import { Navigate } from 'react-router-dom';
import styles from '../../components/common/FormsControlls/FormControls.module.css'

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
                    <Field placeholder={"password"} name={"password"} validate={[requiredField]} component={Input}
                    type={'password'}
                    />
                </div>
                <div>
                    <Field type="checkbox" name={"rememberMe"} component={Input} /> remember me
                </div>
                {
                    props.error &&  <div className={styles.formSummaryError}>
                        {props.error}
                    </div>
                }
                <div>
                    <button>Login</button>
                </div>
            </form>

    )
}
export const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)
const Login = (props:any) => {
    const onSubmit = (formData:FormDataType) => {
        props.login(formData.login , formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
    let mapStateToProps = (state: AllStateType) => {
        return {
            isAuth:state.auth.isAuth
        }
    }
export default connect(mapStateToProps, {login})(Login)
