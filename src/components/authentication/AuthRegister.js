import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Form, useField, Field } from 'formik';
import * as yup from 'yup';
import { authSignUp } from '../../store/actions/action.auth';
import {
    FormContainer,
    FormHeader,
    FormInput,
    FormSelect,
    FormLabel,
    FormRadio,
    FormDate,
    FormButton,
    FormMsg,
    FormLink,
    FormError
} from '../globalUI/GlobalUI';

const td = new Date().getFullYear();

const validationSchema = yup.object().shape({
    email: yup
        .string()
        .email('You must use a valid email')
        .required('Email is required!'),
    password: yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .max(50, 'Password cannot exceed 50 characters')
        .required('Password is required!'),
    password2: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('You must confirm your password'),
    zipcode: yup.number().required('Zip code is required!'),
    name: yup.string().required('Please enter your first name'),
    last_name: yup.string().required('Please enter your last name'),
    gender: yup.number().required('Please specify your gender'),
    birth_month: yup
        .number()
        .min(1, 'Invalid month')
        .max(12, 'Invalid month')
        .required('Month is required'),
    birth_day: yup
        .number()
        .min(1, 'Invalid day')
        .max(31, 'Invalid day')
        .required('Day is required'),
    birth_year: yup
        .number()
        .max(td, 'Invalid year')
        .required('Year is required')
});

const TextField = ({ placeholder, noErrMsg, ...props }) => {
    const [field, meta] = useField(props);
    const errText = meta.error && meta.touched ? meta.error : '';
    return (
        <>
            {noErrMsg ? null : <FormError>{errText}</FormError>}
            <FormInput placeholder={placeholder} {...field} {...props} error={errText} />
        </>
    );
};

const handleEnter = (e) => {
    e.stopPropagation();
};

const AuthRegister = () => {
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
                password: '',
                password2: '',
                zipcode: '',
                name: '',
                last_name: '',
                gender: '',
                birth_day: '',
                birth_month: '',
                birth_year: ''
            }}
            validationSchema={validationSchema}
            // TODO: Add spinner
            onSubmit={(data, { setSubmitting }) => {
                setSubmitting(true);
                dispatch(authSignUp(data));
                setSubmitting(false);
            }}
        >
            {({ errors }) => (
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
                            name='name'
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
                        <FormHeader>Gender</FormHeader>
                        {errors.gender ? (
                            <FormError style={{ marginTop: '-8px' }}>
                                {errors.gender}
                            </FormError>
                        ) : null}
                        <div style={{ display: 'flex' }}>
                            <FormLabel htmlFor='male'>
                                <Field
                                    name='gender'
                                    type='radio'
                                    id='male'
                                    value='0'
                                    as={FormRadio}
                                />
                                Male
                            </FormLabel>
                            <FormLabel htmlFor='female'>
                                <Field
                                    name='gender'
                                    type='radio'
                                    id='female'
                                    value='1'
                                    as={FormRadio}
                                />
                                Female
                            </FormLabel>
                            <FormLabel htmlFor='other'>
                                <Field
                                    name='gender'
                                    type='radio'
                                    id='other'
                                    value='2'
                                    as={FormRadio}
                                />
                                Other
                            </FormLabel>
                        </div>
                        <FormHeader>Birthdate</FormHeader>
                        <FormDate>
                            <TextField name='birth_month' noErrMsg as={FormSelect}>
                                <option value='0' defaultValue='selected' hidden>
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
                                noErrMsg
                                name='birth_day'
                                type='text'
                                placeholder='Day'
                                as={FormInput}
                            />
                            <TextField
                                noErrMsg
                                name='birth_year'
                                type='text'
                                placeholder='Year'
                                as={FormInput}
                            />
                        </FormDate>
                        <TextField
                            name='zipcode'
                            type='number'
                            placeholder='Enter your zip code'
                            as={FormInput}
                        />
                        <FormButton type='submit' onClick={(e) => handleEnter(e)}>
                            Sign Up
                        </FormButton>
                    </FormContainer>

                    <FormMsg>
                        Already have an
                        <span>
                            <FormLink to='/login'> account</FormLink>
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
    noErrMsg: PropTypes.bool
};

TextField.defaultProps = {
    placeholder: '',
    noErrMsg: false
};

export default AuthRegister;
