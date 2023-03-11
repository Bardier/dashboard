import {FC, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import {ErrorMessage, Formik,} from 'formik';
import * as yup from 'yup';
import {useSignUp} from "@/hooks";
import {ISignUpInputData} from "@/types";
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

export const SignUpForm: FC = () => {
    const {mutate: signUp, data, isLoading, isError} = useSignUp();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (data) {
            switch (data.status) {
                case 403:
                    alert(data.message);
                    break;
                case 200:
                    alert(data.message + ' and now you may login!');
                    navigate('/sign-in')
                    break;
            }
        }
    }, [data])

    useEffect(() => {
        isError && alert('Something went wrong!')
    }, [isError])

    const handleSubmit = (values: ISignUpInputData) => {
        signUp(values);
    };

    const validationSchema = yup.object({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().required(''),
    });
    const initialValues: ISignUpInputData = {name: '', email: '', password: ''};

    return <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
    >
        {() => (
            <CustomForm>
                <FormTitle>
                    Welcome
                </FormTitle>
                <FormSubTitle>
                    Welcome! Please enter your details
                </FormSubTitle>

                <FormFieldList>
                    <FormFieldItem>
                        <FormField name="name" placeholder='Name'/>
                        <FormErrorMessageWrapper>
                            <ErrorMessage name="name"/>
                        </FormErrorMessageWrapper>
                    </FormFieldItem>

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

                <FormConfirmBtn type="submit">{isLoading ? 'Creating account...' : 'Create account'}</FormConfirmBtn>

                <FormFooter>
                    Or
                    <Link to='/sign-in'>Log in</Link>
                </FormFooter>
            </CustomForm>
        )}
    </Formik>
}