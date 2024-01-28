import { FormProvider, useForm } from "react-hook-form";
import { ISignUpForm } from "../utilities/interfaces/auth-request.interface";
import { yupResolver } from "@hookform/resolvers/yup";
import signUpSchema from "../utilities/schemas/sign-up";
import PageContainer from "../components/containers/PageContainer";
import AuthContainer from "../components/containers/AuthContainer";
import TextFieldInput from "../components/handlers/TextFieldInput";
import Button from "../components/handlers/Button";
import { Link, useNavigate } from "react-router-dom";
import { signUpAsyncAction } from "../store/reducers/user.reducer";
import { useAppDispatch } from "../store/hooks";

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const methods = useForm<ISignUpForm>({
        mode: "onChange",
        criteriaMode: "all",
        shouldFocusError: true,
        reValidateMode: "onChange",
        resolver: yupResolver(signUpSchema),
        defaultValues: {
            email: "",
            password: "",
            name: ""
        }
    })

    const { handleSubmit, formState } = methods;

    const handleUserSubmit = (form: ISignUpForm) => {
        dispatch(signUpAsyncAction(form))
            .then((data) => {
                if (data.meta.requestStatus === "fulfilled") {
                    navigate("/")
                }
            })
    }

    return (
        <PageContainer title="">
            <AuthContainer title="Create an account">
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <FormProvider {...methods} >
                        <form className="space-y-6" onSubmit={handleSubmit(handleUserSubmit)}>
                            <TextFieldInput name="name" label="Name" variant="outlined" />
                            <TextFieldInput name="email" label="Email" variant="outlined" />
                            <TextFieldInput name="password" label="Password" type="password" variant="outlined" />
                            <div>
                                <Button disabled={!formState.isValid} type="submit">Sign Up</Button>
                            </div>
                        </form>
                    </FormProvider>
                </div>

                <p className="text-sm font-light my-4 text-gray-500 dark:text-gray-400">
                    Already have an account? <Link to="/sign-in" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign In</Link>
                </p>
            </AuthContainer>
        </PageContainer>
    )
}

export default SignUp;