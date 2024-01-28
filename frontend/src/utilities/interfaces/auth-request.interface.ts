interface IAuth {
    email: string;
    password: string;
}

export interface ISignInForm extends IAuth { }

export interface ISignUpForm extends IAuth {
    name: string;
}
