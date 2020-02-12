import React from 'react';
import { FormContainer, FormInput, FormButton, FormRoute, FormMsg } from './AuthStyles';

export default () => {
    return (
        <FormContainer>
            <FormInput placeholder='TODO' />
            <FormInput placeholder='TODO' />
            <FormButton>Login</FormButton>
            <FormMsg>
                New to
                <span>
                    <FormRoute to='/register'> BuddiUp</FormRoute>
                </span>
                ?
            </FormMsg>
            <FormMsg>
                Forgot your
                <span>
                    <FormRoute> email </FormRoute>
                </span>
                or
                <span>
                    <FormRoute> password</FormRoute>
                </span>
                ?
            </FormMsg>
        </FormContainer>
    );
};
