import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Formik, Form, useField, Field } from 'formik';
import { Switch } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import * as yup from 'yup';
import * as Global from '../globalUI/GlobalUI';
import * as SS from './SettingStyles';

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
        <SS.TextFieldWrapper>
            {meta.error ? <Global.FormError>{errText}</Global.FormError> : null}
            {bioText ? (
                <>
                    <SS.SettingsBio
                        className='text-area'
                        {...field}
                        {...props}
                        maxLength={maxBioLen}
                    />

                    {/* eslint-disable*/}
                    <SS.BioCount closeToMax={props.value.length}>
                        {props.value.length}/{maxBioLen}
                    </SS.BioCount>
                    {/* eslint-enable */}
                </>
            ) : (
                <Global.FormInput
                    placeholder={placeholder}
                    {...field}
                    {...props}
                    error={errText}
                    formSettings
                />
            )}
        </SS.TextFieldWrapper>
    );
};

const DiscoverSwitch = withStyles({
    switchBase: {
        color: '#6c6c6c',
        '&$checked': {
            color: '#37e444'
        },
        '&$checked + $track': {
            backgroundColor: '#37e444'
        }
    },
    checked: {},
    track: {}
})(Switch);

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
            {() => (
                <Form>
                    <SS.FormProperties>
                        <Global.FormContainer formSettings>
                            <Global.FormLabel htmlFor='profile_image'>
                                Photo
                            </Global.FormLabel>
                            <TextField
                                name='profile_image'
                                id='profile_image'
                                type='text'
                                placeholder='Enter a new email'
                                as={Global.FormInput}
                            />
                        </Global.FormContainer>
                        <SS.SettingsDivider />
                        <Global.FormContainer formSettings>
                            <Global.FormLabel htmlFor='seeker'>
                                Get discovered
                            </Global.FormLabel>
                            <Field
                                name='seeker'
                                id='seeker'
                                type='checkbox'
                                as={DiscoverSwitch}
                            />
                        </Global.FormContainer>
                        <SS.SettingsDivider />
                        <Global.FormContainer formSettings>
                            <Global.FormLabel htmlFor='bio'>Bio</Global.FormLabel>
                            <TextField
                                name='bio'
                                id='bio'
                                type='text'
                                bioText
                                maxBioLen={165}
                                onInput={handleBioLen}
                                value={bioLength}
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
