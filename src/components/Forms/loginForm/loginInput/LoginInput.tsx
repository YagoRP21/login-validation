import { IInputProps } from "../types";
import { Controller } from "react-hook-form";

const Input = ({ control, name, errorMessage, ...rest}: IInputProps) => {
    return (
        <>
            <div>
                <Controller control={control} name={name} render={({ field: { onChange, onBlur, value, ref} }) => (
                    <input {...rest} onChange={onChange} onBlur={onBlur} value={value} ref={ref}  />
                )}
                />
            </div>
            {errorMessage ? <p className="form__input--error-message">{errorMessage}</p>: null}
        </>
    )
}

export default Input