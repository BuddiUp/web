import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Form, useField } from 'formik';
import * as yup from 'yup';
import * as Global from '../globalUI/GlobalUI';
import * as SS from './SettingStyles';

const td = new Date().getFullYear();

const validationSchema = yup.object().shape({
    email: yup.string().email('You must use a valid email'),
    password: yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .max(50, 'Password cannot exceed 50 characters'),
    password2: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
    zipcode: yup.number(),
    name: yup.string(),
    last_name: yup.string(),
    gender: yup.number(),
    birth_month: yup
        .number()
        .min(1, 'Invalid month')
        .max(12, 'Invalid month'),
    birth_day: yup
        .number()
        .min(1, 'Invalid day')
        .max(31, 'Invalid day'),
    birth_year: yup.number().max(td, 'Invalid year')
});

const TextField = ({ placeholder, noErrMsg, ...props }) => {
    const [field, meta] = useField(props);
    const errText = meta.error && meta.touched ? meta.error : '';
    return (
        <SS.TextFieldWrapper>
            {meta.error ? <Global.FormError>{errText}</Global.FormError> : null}
            <Global.FormInput
                placeholder={placeholder}
                {...field}
                {...props}
                error={errText}
                formSettings
            />
        </SS.TextFieldWrapper>
    );
};

const SettingsUpdateForm = () => {
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                password2: '',
                zipcode: '',
                name: '',
                last_name: ''
            }}
            validationSchema={validationSchema}
            onSubmit={(data, { setSubmitting }) => {
                setSubmitting(true);
                setSubmitting(false);
            }}
        >
            {() => (
                <Form>
                    <SS.FormProperties>
                        <Global.FormContainer formSettings>
                            <Global.FormLabel htmlFor='name'>First name</Global.FormLabel>
                            <TextField
                                name='name'
                                id='name'
                                type='text'
                                placeholder='Enter a new email'
                                as={Global.FormInput}
                            />
                        </Global.FormContainer>
                        <SS.SettingsDivider />
                        <Global.FormContainer formSettings>
                            <Global.FormLabel htmlFor='last_name'>
                                Last name
                            </Global.FormLabel>
                            <TextField
                                name='last_name'
                                id='last_name'
                                type='text'
                                placeholder='Enter a new email'
                                as={Global.FormInput}
                            />
                        </Global.FormContainer>
                        <SS.SettingsDivider />
                        <Global.FormContainer formSettings>
                            <Global.FormLabel htmlFor='email'>
                                Email address
                            </Global.FormLabel>
                            <TextField
                                name='email'
                                id='email'
                                type='email'
                                placeholder='Enter a new email'
                                as={Global.FormInput}
                            />
                        </Global.FormContainer>
                        <SS.SettingsDivider />
                        <Global.FormContainer formSettings>
                            <Global.FormLabel htmlFor='password'>
                                Change password
                            </Global.FormLabel>
                            <TextField
                                name='password'
                                id='password'
                                type='password'
                                placeholder='••••••••••••••'
                                as={Global.FormInput}
                            />
                        </Global.FormContainer>
                        <Global.FormContainer formSettings>
                            <Global.FormLabel htmlFor='password2'>
                                Confirm new password
                            </Global.FormLabel>
                            <TextField
                                name='password2'
                                id='password2'
                                type='password'
                                as={Global.FormInput}
                            />
                        </Global.FormContainer>
                        <SS.SettingsDivider />
                        <Global.FormContainer
                            formSettings
                            style={{ justifyContent: 'flex-end' }}
                        >
                            <Link to='/'>
                                <SS.SettingsBtn>Cancel</SS.SettingsBtn>
                            </Link>
                            <SS.SettingsBtn type='submit'>Save</SS.SettingsBtn>
                        </Global.FormContainer>
                    </SS.FormProperties>
                </Form>
            )}
        </Formik>
    );
};

TextField.propTypes = {
    placeholder: PropTypes.string,
    noErrMsg: PropTypes.bool,
    type: PropTypes.string
};

TextField.defaultProps = {
    placeholder: '',
    noErrMsg: false,
    type: ''
};

export default SettingsUpdateForm;
