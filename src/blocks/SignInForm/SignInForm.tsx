import {FC, useContext, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {ErrorMessage, Formik,} from 'formik';
import * as yup from 'yup';
import {UserContext} from "@/context";
import {useSignIn} from "@/hooks";
import {ISignInInputData} from "@/types";
import {
    CustomForm,
    FormTitle,
    FormSubTitle,
    FormFieldList,
    FormFieldItem,
    FormField,
    FormErrorMessageWrapper,
    FormConfirmBtn,
    FormFooter
} from "@/ui";

export const SignInForm: FC = () => {
    const {setUserToken} = useContext(UserContext);
    const {mutate: signIn, data, isLoading, isError} = useSignIn();
    const navigate = useNavigate();

    useEffect(() => {
        if (data) {
            if (data.status === 403) {
                alert(data.message)
            } else if (data.token) {
                localStorage.setItem('userToken', data.token)
                setUserToken(data.token);
                navigate('/')
            }
        }
    }, [data])

    useEffect(() => {
        isError && alert('Something went wrong!')
    }, [isError])

    const handleSubmit = (values: ISignInInputData) => {
        signIn(values);
    };

    const validationSchema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(),
    });
    const initialValues: ISignInInputData = {email: 'byefar@i.ua', password: '12345'};

    return <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    >
        {() => (
            <CustomForm>
                <FormTitle>
                    Welcome back
                </FormTitle>
                <FormSubTitle>
                    Welcome back! Please enter your details
                </FormSubTitle>

                <FormFieldList>
                    <FormFieldItem>
                        <FormField name="email" placeholder='Email'/>
                        <FormErrorMessageWrapper>
                            <ErrorMessage name="email"/>
                        </FormErrorMessageWrapper>
                    </FormFieldItem>
                    <FormFieldItem>
                        <FormField name="password" placeholder='Password' type='password'/>
                        <FormErrorMessageWrapper>
                            <ErrorMessage name="password"/>
                        </FormErrorMessageWrapper>
                    </FormFieldItem>
                </FormFieldList>

                <FormConfirmBtn type="submit">{isLoading ? 'Log in...' : 'Log in'}</FormConfirmBtn>

                <FormFooter>
                    Or
                    <Link to='/sign-up'>Sign up</Link>
                </FormFooter>
            </CustomForm>
        )}
    </Formik>
}