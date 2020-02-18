import React from 'react';
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
} from './AuthStyles';

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(3, 'Username must be longer than 3 characters')
        .max(14, "Username can't exceed 12 characters")
        .required('Username is required!'),
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

const AuthLogin = () => {
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                username: '',
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
                            name='username'
                            type='text'
                            placeholder='Enter your username'
                            as={FormInput}
                        />

                        <TextField
                            name='password'
                            type='password'
                            placeholder='Enter your password'
                            as={FormInput}
                        />
                        <FormButton type='submit'>Login</FormButton>
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
