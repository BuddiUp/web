import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Form, useField } from 'formik';
import * as yup from 'yup';
import { authLogin } from '../../store/actions/action.auth';
import {
    FormContainer,
    FormInput,
    FormButton,
    FormMsg,
    FormLink,
    FormError
} from '../globalUI/GlobalUI';

const validationSchema = yup.object().shape({
    email: yup
        .string()
        .email('You must use a valid email')
        .required('Email is required!'),
    password: yup
        .string()
        .min(6, 'Password must be atleast 6 characters')
        .max(50, 'Password cannot exceed 50 characters')
        .required('Password is required!')
});

const TextField = ({ placeholder, isDateType, ...props }) => {
    const [field, meta] = useField(props);
    const errText = meta.error && meta.touched ? meta.error : '';
    return (
        <>
            {isDateType ? null : <FormError>{errText}</FormError>}
            <FormInput placeholder={placeholder} {...field} {...props} error={errText} />
        </>
    );
};

const handleEnter = (e) => {
    e.stopPropagation();
};

const AuthLogin = () => {
    const dispatch = useDispatch();

    // Weird fix to prevent LastPass error
    useEffect(() => {
        document.addEventListener('keydown', handleEnter, true);

        return () => {
            document.removeEventListener('keydown', handleEnter, true);
        };
    }, []);

    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(data) => {
                dispatch(authLogin(data));
            }}
        >
            {() => (
                <Form>
                    <FormContainer>
                        <TextField
                            name='email'
                            type='text'
                            placeholder='Enter your email'
                            as={FormInput}
                        />

                        <TextField
                            name='password'
                            type='password'
                            placeholder='Enter your password'
                            as={FormInput}
                        />
                        <FormButton type='submit' onClick={(e) => handleEnter(e)}>
                            Login
                        </FormButton>
                    </FormContainer>

                    <FormMsg>
                        New to
                        <span>
                            <FormLink to='/register'> BuddiUp</FormLink>
                        </span>
                        ?
                    </FormMsg>
                    <FormMsg>
                        Forgot your
                        <span>
                            <FormLink to='/'> email </FormLink>
                        </span>
                        or
                        <span>
                            <FormLink to='/'> password</FormLink>
                        </span>
                        ?
                    </FormMsg>
                </Form>
            )}
        </Formik>
    );
};

TextField.propTypes = {
    placeholder: PropTypes.string,
    isDateType: PropTypes.bool
};

TextField.defaultProps = {
    placeholder: '',
    isDateType: false
};

export default AuthLogin;
