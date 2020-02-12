import React from 'react';
import { FormContainer, FormInput, FormButton, FormLink, FormMsg } from './AuthStyles';

export default () => {
    return (
        <FormContainer>
            <FormInput placeholder='TODO' />
            <FormInput placeholder='TODO' />
            <FormButton>Next</FormButton>
            <FormMsg>
                Already have an
                <span>
                    <FormLink to='/login'> account</FormLink>
                </span>
                ?
            </FormMsg>
        </FormContainer>
    );
};
