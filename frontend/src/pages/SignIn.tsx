import { ISignInForm } from "../utilities/interfaces/auth.interface";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import signInSchema from "../utilities/schemas/sign-in";
import AuthContainer from "../components/containers/AuthContainer";
import PageContainer from "../components/containers/PageContainer";
import TextFieldInput from "../components/handlers/TextFieldInput";
import Button from "../components/handlers/Button";

const SignIn = () => {
    const methods = useForm<ISignInForm>({
        mode: "onChange",
        criteriaMode: "all",
        shouldFocusError: true,
        reValidateMode: "onChange",
        resolver: yupResolver(signInSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const { handleSubmit, formState } = methods;

    const handleUserSubmit = (form: ISignInForm) => {
        console.log(form)
    }

    return (
        <PageContainer title="">
            <AuthContainer title="Sign in to your account">
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <FormProvider {...methods} >
                        <form className="space-y-6" onSubmit={handleSubmit(handleUserSubmit)}>
                            <TextFieldInput name="email" label="Email" variant="outlined" />
                            <TextFieldInput name="password" label="Password" type="password" variant="outlined" />
                            <div>
                                <Button disabled={!formState.isValid} type="submit">Sign In</Button>
                            </div>
                        </form>
                    </FormProvider>
                </div>
            </AuthContainer>
        </PageContainer>
    )
}

export default SignIn;