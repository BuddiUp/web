import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Formik, Form, useField } from 'formik';
import * as yup from 'yup';
// eslint-disable-next-line
import { SettingsDivider } from './Settings';
// import { FormError } from '../authentication/AuthStyles';
// import * as Style from './SettingStyles';
import * as Style from '../globalUI/GlobalUI';
import { device } from '../../theme';

export const FormProperties = styled.div`
    margin: 0px 54px;
    @media ${device.mobileS} {
        margin: unset;
    }
`;

export const TextFieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media ${device.mobileL} {
        margin-top: 9px;
        align-items: baseline;
    }
`;

export const SettingsBtn = styled(Style.FormButton)`
    width: unset;
    padding: 9px;
    margin-left: 9px;
    justify-content: flex-end;

    @media ${device.mobileL} {
        margin-top: -9px;
        width: 100%;
    }
`;

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
        <TextFieldWrapper>
            {meta.error ? <Style.FormError>{errText}</Style.FormError> : null}
            <Style.FormInput
                placeholder={placeholder}
                {...field}
                {...props}
                error={errText}
                formSettings
            />
        </TextFieldWrapper>
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
                    <FormProperties>
                        <Style.FormContainer formSettings>
                            <Style.FormLabel htmlFor='name'>First name</Style.FormLabel>
                            <TextField
                                name='name'
                                id='name'
                                type='text'
                                placeholder='Enter a new email'
                                as={Style.FormInput}
                            />
                        </Style.FormContainer>
                        <SettingsDivider />
                        <Style.FormContainer formSettings>
                            <Style.FormLabel htmlFor='last_name'>
                                Last name
                            </Style.FormLabel>
                            <TextField
                                name='last_name'
                                id='last_name'
                                type='text'
                                placeholder='Enter a new email'
                                as={Style.FormInput}
                            />
                        </Style.FormContainer>
                        <SettingsDivider />
                        <Style.FormContainer formSettings>
                            <Style.FormLabel htmlFor='email'>
                                Email address
                            </Style.FormLabel>
                            <TextField
                                name='email'
                                id='email'
                                type='email'
                                placeholder='Enter a new email'
                                as={Style.FormInput}
                            />
                        </Style.FormContainer>
                        <SettingsDivider />
                        <Style.FormContainer formSettings>
                            <Style.FormLabel htmlFor='password'>
                                Change password
                            </Style.FormLabel>
                            <TextField
                                name='password'
                                id='password'
                                type='password'
                                placeholder='••••••••••••••'
                                as={Style.FormInput}
                            />
                        </Style.FormContainer>
                        <Style.FormContainer formSettings>
                            <Style.FormLabel htmlFor='password2'>
                                Confirm new password
                            </Style.FormLabel>
                            <TextField
                                name='password2'
                                id='password2'
                                type='password'
                                as={Style.FormInput}
                            />
                        </Style.FormContainer>
                        <SettingsDivider />
                        <Style.FormContainer
                            formSettings
                            style={{ justifyContent: 'flex-end' }}
                        >
                            <Link to='/'>
                                <SettingsBtn>Cancel</SettingsBtn>
                            </Link>
                            <SettingsBtn type='submit'>Save</SettingsBtn>
                        </Style.FormContainer>
                    </FormProperties>
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
