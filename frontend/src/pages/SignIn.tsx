import { ISignInForm } from "../utilities/interfaces/auth.interface";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import signInSchema from "../utilities/schemas/sign-in";
import AuthContainer from "../components/containers/AuthContainer";
import PageContainer from "../components/containers/PageContainer";

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

    return (
        <PageContainer title="">
            <AuthContainer title="Sign in to your account">
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <FormProvider {...methods} >
                        <form className="space-y-6" >

                        </form>
                    </FormProvider>
                </div>
            </AuthContainer>
        </PageContainer>
    )
}

export default SignIn;