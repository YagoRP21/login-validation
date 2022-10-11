import React from "react";
import { Control } from "react-hook-form";


export interface IFormLogin {
    email: string;
    password: string;
}

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    control: Control<IFormLogin, any>;
    name: "email" | "password";
    errorMessage?: string;
}


export const defaultValues: IFormLogin = {
    email: '',
    password: ''
}

