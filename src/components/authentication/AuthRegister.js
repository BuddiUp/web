import React from 'react';
import { FormContainer, FormInput, FormButton, FormRoute, FormMsg } from './AuthStyles';

export default () => {
    return (
        <FormContainer>
            <FormInput placeholder='TODO' />
            <FormInput placeholder='TODO' />
            <FormButton>Next</FormButton>
            <FormMsg>
                Already have an
                <span>
                    <FormRoute to='/login'> account</FormRoute>
                </span>
                ?
            </FormMsg>
        </FormContainer>
    );
};
