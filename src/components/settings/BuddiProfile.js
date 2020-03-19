import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Formik, Form, useField } from 'formik';
import * as yup from 'yup';
import * as Style from '../globalUI/GlobalUI';
import { device } from '../../theme';
/* eslint-disable */
import { SettingsDivider } from './Settings';
import { SettingsBtn } from './SettingsUpdateForm';
/* eslint-enable */

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

const SettingsBio = styled.textarea`
    border-radius: 8px;
    padding: 13px;
    font-size: 15px;
    resize: none;
    border: none;
    width: 250px;
    min-height: 100px;
    box-shadow: 0 0 0 1pt #d8d8d8;
    color: ${(props) => props.theme.gray800};
    background-color: ${(props) => props.theme.gray300};
`;

const BioCount = styled.h1`
    font-size: 17px;
    margin-top: 8px;
    color: ${(props) => props.theme.gray500};
    color: ${(props) =>
        props.closeToMax >= 130 ? props.theme.error : props.theme.gray500};
`;

const validationSchema = yup.object().shape({
    profile_image: yup.string(),
    bio: yup.string(),
    seeker: yup.bool()
});

const TextField = ({ placeholder, noErrMsg, ...props }) => {
    const [field, meta] = useField(props);
    const errText = meta.error && meta.touched ? meta.error : '';
    const { bioText, maxBioLen } = props;
    return (
        <TextFieldWrapper>
            {meta.error ? <Style.FormError>{errText}</Style.FormError> : null}
            {bioText ? (
                <>
                    <SettingsBio
                        className='text-area'
                        {...field}
                        {...props}
                        maxLength={maxBioLen}
                    />

                    {/* eslint-disable*/}
                    <BioCount closeToMax={props.value.length}>
                        {props.value.length}/{maxBioLen}
                    </BioCount>
                    {/* eslint-enable
                     */}
                </>
            ) : (
                <Style.FormInput
                    placeholder={placeholder}
                    {...field}
                    {...props}
                    error={errText}
                    formSettings
                />
            )}
        </TextFieldWrapper>
    );
};

const BuddiProfile = () => {
    const [bioLength, updateBioLen] = useState('');

    const handleBioLen = (e) => {
        updateBioLen(e.target.value);
    };

    return (
        <Formik
            initialValues={{
                profile_image: '',
                bio: '',
                seeker: false
            }}
            validationSchema={validationSchema}
            onSubmit={(data, { setSubmitting }) => {
                setSubmitting(true);
                setSubmitting(false);
            }}
        >
            {({ values, errors }) => (
                <Form>
                    <FormProperties>
                        <Style.FormContainer formSettings>
                            <Style.FormLabel htmlFor='profile_image'>
                                Photo
                            </Style.FormLabel>
                            <TextField
                                name='profile_image'
                                id='profile_image'
                                type='text'
                                placeholder='Enter a new email'
                                as={Style.FormInput}
                            />
                        </Style.FormContainer>
                        <SettingsDivider />
                        <Style.FormContainer formSettings>
                            <Style.FormLabel htmlFor='seeker'>
                                Get discovered
                            </Style.FormLabel>
                            <TextField
                                name='seeker'
                                id='seeker'
                                type='checkbox'
                                as={Style.FormInput}
                            />
                        </Style.FormContainer>
                        <SettingsDivider />
                        <Style.FormContainer formSettings>
                            <Style.FormLabel htmlFor='bio'>Bio</Style.FormLabel>
                            <TextField
                                name='bio'
                                id='bio'
                                type='text'
                                bioText
                                maxBioLen={165}
                                onInput={handleBioLen}
                                value={bioLength}
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
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                    <pre>{JSON.stringify(errors, null, 2)}</pre>
                </Form>
            )}
        </Formik>
    );
};

TextField.propTypes = {
    placeholder: PropTypes.string,
    noErrMsg: PropTypes.bool,
    bioText: PropTypes.bool,
    maxBioLen: PropTypes.number
};

TextField.defaultProps = {
    placeholder: '',
    noErrMsg: false,
    bioText: false,
    maxBioLen: 165
};

export default BuddiProfile;
