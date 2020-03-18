import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Form, useField } from 'formik';
import * as yup from 'yup';
// eslint-disable-next-line
import { SettingsDivider } from './Settings';
import { FormError } from '../authentication/AuthStyles';
import { device } from '../../theme';

const FormContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 17px 0px;
    justify-content: ${(props) => (props.formSubmit ? 'flex-end' : 'space-between')};

    @media ${device.mobileL} {
        flex-direction: ${(props) => (props.formSubmit ? 'row' : 'column')};
    }
`;

const FormProperties = styled.div`
    margin: 0px 54px;
    @media ${device.mobileS} {
        margin: unset;
    }
`;

const FormLabel = styled.label`
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.gray800};
`;

const FormInput = styled.input`
    border: none;
    outline: none;
    font-size: 15px;
    padding: 9px;
    width: 230px;
    border-radius: 8px;
    box-sizing: border-box;
    box-shadow: 0 0 0 1pt ${(props) => (props.error ? props.theme.error : '#d8d8d8')}
        inset;
    background-color: ${(props) => props.theme.gray300};
    &::placeholder {
        color: ${(props) => props.theme.gray500};
    }
    &:hover {
        box-shadow: 0 0 0 1pt #d8d8d8 inset;
    }
    &:focus {
        outline: 0 0 0 1pt ${(props) => props.theme.gray400} inset;
        box-shadow: 0 0 0 1pt ${(props) => props.theme.gray400} inset;
    }

    /* Chrome, Safari, Edge, Opera */
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    &[type='number'] {
        -moz-appearance: textfield;
    }

    @media ${device.mobileS} {
        width: unset;
    }
`;

const FormBtn = styled.button`
    padding: 9px;
    cursor: pointer;
    border-radius: 8px;
    box-sizing: border-box;
    margin-left: 9px;
    font-size: 15px;
    color: ${(props) => props.theme.gray500};
    box-shadow: 0 0 0 1pt ${(props) => (props.error ? props.theme.error : '#d8d8d8')}
        inset;
    background-color: ${(props) => props.theme.gray300};
    &:hover {
        box-shadow: 0 0 0 1pt #d8d8d8 inset;
    }
    &:focus {
        outline: 0 0 0 1pt ${(props) => props.theme.gray400} inset;
        box-shadow: 0 0 0 1pt ${(props) => props.theme.gray400} inset;
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

const TextFieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    @media ${device.mobileL} {
        margin-top: 9px;
        align-items: baseline;
    }
`;

const TextField = ({ placeholder, noErrMsg, ...props }) => {
    const [field, meta] = useField(props);
    const errText = meta.error && meta.touched ? meta.error : '';
    return (
        <TextFieldWrapper>
            {meta.error ? <FormError>{errText}</FormError> : null}
            <FormInput placeholder={placeholder} {...field} {...props} error={errText} />
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
                        <FormContainer>
                            <FormLabel htmlFor='name'>First name</FormLabel>
                            <TextField
                                name='name'
                                id='name'
                                type='text'
                                placeholder='Enter a new email'
                                as={FormInput}
                            />
                        </FormContainer>
                        <SettingsDivider />
                        <FormContainer>
                            <FormLabel htmlFor='last_name'>Last name</FormLabel>
                            <TextField
                                name='last_name'
                                id='last_name'
                                type='text'
                                placeholder='Enter a new email'
                                as={FormInput}
                            />
                        </FormContainer>
                        <SettingsDivider />
                        <FormContainer>
                            <FormLabel htmlFor='email'>Email address</FormLabel>
                            <TextField
                                name='email'
                                id='email'
                                type='email'
                                placeholder='Enter a new email'
                                as={FormInput}
                            />
                        </FormContainer>
                        <SettingsDivider />
                        <FormContainer>
                            <FormLabel htmlFor='password'>Change password</FormLabel>
                            <TextField
                                name='password'
                                id='password'
                                type='password'
                                placeholder='••••••••••••••'
                                as={FormInput}
                            />
                        </FormContainer>
                        <FormContainer>
                            <FormLabel htmlFor='password'>Confirm new password</FormLabel>
                            <TextField
                                name='password2'
                                id='password2'
                                type='password'
                                as={FormInput}
                            />
                        </FormContainer>
                        <SettingsDivider />
                        <FormContainer formSubmit>
                            <Link to='/'>
                                <FormBtn>Cancel</FormBtn>
                            </Link>
                            <FormBtn type='submit'>Save</FormBtn>
                        </FormContainer>
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
