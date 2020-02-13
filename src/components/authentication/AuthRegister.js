import React from 'react';
import { Formik, Form, useField } from 'formik';
import * as yup from 'yup';

import {
    FormContainer,
    FormInput,
    FormButton,
    FormLink,
    FormMsg,
    FormError
} from './AuthStyles';

const validationSchema = yup.object().shape({
    email: yup
        .string()
        .email('You must use a valid email')
        .required('Email is required!'),
    password: yup
        .string()
        .min(6, 'Password must be atleast 6 characters')
        .max(50, 'Password cannot exceed 50 characters')
        .required('Password is required!'),
    firstName: yup.string().required('Please enter your first name'),
    lastName: yup.string().required('Please enter your last name')
});

const TextField = ({ placeholder, ...props }) => {
    const [field, meta] = useField(props);
    const errText = meta.error && meta.touched ? meta.error : '';
    return (
        <>
            <FormInput placeholder={placeholder} {...field} {...props} error={errText} />
            {!errText ? null : <FormError>{errText}</FormError>}
        </>
    );
};

const AuthRegister = () => {
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                dobDay: '',
                dobMonth: 0,
                dobYear: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(data, { setSubmitting }) => {
                setSubmitting(true);
                // Make async call to API
                console.log(data);
                setSubmitting(false);
            }}
        >
            {({ values, errors }) => (
                <Form>
                    <FormContainer>
                        <TextField
                            name='email'
                            type='email'
                            placeholder='Enter your email'
                            as={FormInput}
                        />
                        <TextField
                            name='password'
                            type='password'
                            placeholder='Enter your password'
                            as={FormInput}
                        />
                        <TextField
                            name='firstName'
                            type='text'
                            placeholder='Enter your first name'
                            as={FormInput}
                        />
                        <TextField
                            name='lastName'
                            type='text'
                            placeholder='Enter your last name'
                            as={FormInput}
                        />

                        <FormButton type='submit'>Next</FormButton>
                    </FormContainer>

                    <FormMsg>
                        Already have an
                        <span>
                            <FormLink to='/login'> account</FormLink>
                        </span>
                        ?
                    </FormMsg>
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                    <pre>{JSON.stringify(errors, null, 2)}</pre>
                </Form>
            )}
        </Formik>
    );
};

export default AuthRegister;
