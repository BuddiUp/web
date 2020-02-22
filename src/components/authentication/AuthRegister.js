import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Form, useField } from 'formik';
import * as yup from 'yup';
import { authSignUp } from '../../store/actions/action.auth';

import {
    FormContainer,
    FormHeader,
    FormInput,
    FormSelect,
    FormDate,
    FormButton,
    FormMsg,
    FormLink,
    FormError
} from './AuthStyles';

const td = new Date().getFullYear();

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
    password2: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('You must confirm your password'),
    zipCode: yup.number().required('Zip code is required!')
    // first_name: yup.string().required('Please enter your first name'),
    // last_name: yup.string().required('Please enter your last name'),
    // dobMonth: yup
    //     .number()
    //     .min(1, 'Invalid month')
    //     .max(12, 'Invalid month')
    //     .required('Month is required'),
    // dobDay: yup
    //     .number()
    //     .min(1, 'Invalid day')
    //     .max(31, 'Invalid day')
    //     .required('Day is required'),
    // dobYear: yup
    //     .number()
    //     .max(td, 'Invalid year')
    //     .required('Year is required')
});

// TODO: NEED A BETTER WAY TO DISPLAY THE ERRORS FOR THE DATE PICKER
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

const AuthRegister = () => {
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                password2: '',
                zipCode: ''
                // first_name: '',
                // last_name: '',
                // dobDay: '',
                // dobMonth: 0,
                // dobYear: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(data) => {
                // setSubmitting(true);
                dispatch(authSignUp(data));
            }}
        >
            {/*  Remove later */}
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
                            name='password2'
                            type='password'
                            placeholder='Confirm your password'
                            as={FormInput}
                        />
                        <TextField
                            name='zipCode'
                            type='number'
                            placeholder='Enter your zip code'
                            as={FormInput}
                        />

                        {/*  <TextField
                            name='first_name'
                            type='text'
                            placeholder='Enter your first name'
                            as={FormInput}
                        />
                        <TextField
                            name='last_name'
                            type='text'
                            placeholder='Enter your last name'
                            as={FormInput}
                        />
                        <FormHeader>Birthdate</FormHeader>
                        <FormDate>
                            <TextField name='dobMonth' isDateType as={FormSelect}>
                                <option value='0' disabled defaultValue='selected' hidden>
                                    Month
                                </option>
                                <option value='1'>January</option>
                                <option value='2'>February</option>
                                <option value='3'>March</option>
                                <option value='4'>April</option>
                                <option value='5'>May</option>
                                <option value='6'>June</option>
                                <option value='7'>July</option>
                                <option value='8'>August</option>
                                <option value='9'>September</option>
                                <option value='10'>October</option>
                                <option value='11'>November</option>
                                <option value='12'>December</option>
                            </TextField>

                            <TextField
                                isDateType
                                name='dobDay'
                                type='text'
                                placeholder='Day'
                                as={FormInput}
                            />
                            <TextField
                                isDateType
                                name='dobYear'
                                type='text'
                                placeholder='Year'
                                as={FormInput}
                            />
                        </FormDate>{' '}
                        */}
                        <FormButton type='submit'>Sign Up</FormButton>
                    </FormContainer>

                    <FormMsg>
                        Already have an
                        <span>
                            <FormLink to='/login'> account</FormLink>
                        </span>
                        ?
                    </FormMsg>
                    {/* <pre>{JSON.stringify(values, null, 2)}</pre>
                    <pre>{JSON.stringify(errors, null, 2)}</pre> */}
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

export default AuthRegister;
