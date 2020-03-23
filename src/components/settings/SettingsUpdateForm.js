import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Formik, Form, useField } from 'formik';
import * as yup from 'yup';
import HandleUpdate from './HandleUpdate';
import { NoAccess } from '../../global-styles';
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

const handleEnter = (e) => {
    e.stopPropagation();
};

const SettingsUpdateForm = ({ user_profile }) => {
    useEffect(() => {
        document.addEventListener('keydown', handleEnter, true);

        return () => {
            document.removeEventListener('keydown', handleEnter, true);
        };
    }, []);
    return (
        <Formik
            initialValues={{
                email: user_profile.email,
                password: '',
                password2: '',
                zipcode: user_profile.zipcode,
                name: user_profile.name,
                last_name: user_profile.last_name
            }}
            validationSchema={validationSchema}
            onSubmit={(data, { setSubmitting }) => {
                setSubmitting(true);
                HandleUpdate(data);
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
                                placeholder={user_profile.name}
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
                                placeholder={user_profile.last_name}
                                as={Global.FormInput}
                            />
                        </Global.FormContainer>

                        <SS.SettingsDivider />

                        {/* TODO: DISABLE */}
                        <NoAccess>
                            <Global.FormContainer formSettings>
                                <Global.FormLabel htmlFor='email'>
                                    Email address
                                </Global.FormLabel>
                                <TextField
                                    name='email'
                                    id='email'
                                    type='email'
                                    placeholder={user_profile.email}
                                    as={Global.FormInput}
                                />
                            </Global.FormContainer>
                        </NoAccess>

                        <SS.SettingsDivider />

                        <Global.FormContainer formSettings>
                            <Global.FormLabel htmlFor='zipcode'>Zipcode</Global.FormLabel>
                            <TextField
                                name='zipcode'
                                id='zipcode'
                                type='number'
                                placeholder={user_profile.zipcode.toString()}
                                as={Global.FormInput}
                            />
                        </Global.FormContainer>

                        <SS.SettingsDivider />

                        <NoAccess>
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
                        </NoAccess>

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

SettingsUpdateForm.propTypes = {
    user_profile: PropTypes.shape({
        profile_Image: PropTypes.string,
        name: PropTypes.string,
        last_name: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
        zipcode: PropTypes.number,
        bio: PropTypes.string,
        seeker: PropTypes.bool
    }).isRequired
};

export default SettingsUpdateForm;
