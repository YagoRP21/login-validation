import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { defaultValues, IFormLogin } from "./types"
import Input from "./loginInput/LoginInput";


const schema = yup
    .object({
        email: yup.string().email("Invalid E-mail").required("Required Field"),
        password: yup.string().min(6, "Your password must have at least 6 characters").required("Required Field")
    })
    .required();


const LoginForm = () => {

    const { control, formState: { errors, isValid } } = useForm<IFormLogin>({
        resolver: yupResolver(schema),
        mode: "onBlur",
        defaultValues,
        reValidateMode: "onChange"
    });

    

    return (
        <>
            <form className="lform" id="login"> 
                <h1 className="form__title">Login</h1>
                
                <div className="form__input-group">
                    <label className="hidden">Email</label>
                    <Input name="email" control={control} errorMessage={errors?.email?.message} className="form__input" placeholder="Email" />
                </div>

                <div className="form__input-group">
                    <label className="hidden">Password</label>
                    <Input name="password" type="password" control={control} errorMessage={errors?.password?.message} className="form__input" placeholder="Password" />
                </div>

                <button className="form__button" type="submit">Login</button>
                
                <p className="form__text">
                    <a className="form__link" href="./" id="linkCreateAccount">Don't have an account? Register</a>
                </p>
                <p className="form__text">
                    <a className="form__link" href="./" id="linkForgotPassword">Forgot your password?</a>
                </p>
            </form>
        </>
    )
}

export default LoginForm