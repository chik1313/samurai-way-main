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
    rememberMe: boolean,
    captcha:string
}

export const LoginForm:React.FC<InjectedFormProps<FormDataType, {captchaUrl: string  | null}>& {captchaUrl: string | null} >  = ({handleSubmit,error,captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <p>To log in get registered
                <a href={'https://social-network.samuraijs.com/'}
                   target={'_blank'}> here
                </a>
            </p>
            <p>or use common test account credentials:</p>
            <p>Email: free@samuraijs.com</p>
            <p>Password: free</p>
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
            {captchaUrl && <img alt={'captcha'} src={captchaUrl}/> }
            {captchaUrl && <Field placeholder={"Symbols from image"} name={"captcha"} validate={[requiredField]} component={Input}

            /> }
            {
                error &&  <div className={styles.formSummaryError}>
                    {error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>

    )
}
export const LoginReduxForm = reduxForm<FormDataType ,{captchaUrl: string | null}>({
    form: 'login'
})(LoginForm)


const Login = (props:ReturnType<typeof mapStateToProps> & mapDispatchPropsType ) => {
    const onSubmit = (formData:FormDataType) => {
        props.login(formData.login , formData.password, formData.rememberMe , formData.captcha)
    }
    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}
let mapStateToProps = (state: AllStateType) => {
    return {
        isAuth:state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}
export type mapDispatchPropsType = {
    login:  (email: string, password: string, rememberMe: boolean, captcha: string) => void
}
export default connect(mapStateToProps, {login})(Login)
