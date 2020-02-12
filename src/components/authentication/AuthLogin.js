import React from 'react';
import { FormContainer, FormInput, FormButton, FormLink, FormMsg } from './AuthStyles';

export default () => {
    return (
        <FormContainer>
            <FormInput placeholder='TODO' />
            <FormInput placeholder='TODO' />
            <FormButton>Login</FormButton>
            <FormMsg>
                New to
                <span>
                    <FormLink to='/register'> BuddiUp</FormLink>
                </span>
                ?
            </FormMsg>
            <FormMsg>
                Forgot your
                <span>
                    <FormLink> email </FormLink>
                </span>
                or
                <span>
                    <FormLink> password</FormLink>
                </span>
                ?
            </FormMsg>
        </FormContainer>
    );
};
