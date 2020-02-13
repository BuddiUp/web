import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AuthLogin from './AuthLogin';
import AuthRegister from './AuthRegister';
import { device } from '../../theme';

const AuthSideColor = styled.div`
    display: flex;
    align-items: center;
    min-height: 82vw;
    width: 50%;
    background-color: ${(props) => props.theme.primary};
`;

const AuthContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    /* height: 100vh; */
    width: 100%;
    position: absolute;
`;

const AuthCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 500px;
    width: 400px;
    padding: 55px;
    border-radius: 25px;
    box-shadow: 0px 0px 33px 0px rgba(0, 0, 0, 0.14);
    background-color: ${(props) => props.theme.white};

    @media ${device.mobileL} {
        width: 265px;
    }
    @media ${device.mobileS} {
        width: 218px;
    }
`;

const AuthType = styled.h1`
    margin-bottom: 9px;
    font-size: ${(props) => (props.heading ? '40px' : '16px')};
    font-weight: ${(props) => (props.heading ? '600' : '500')};
    text-transform: ${(props) => (props.heading ? 'none' : 'uppercase')};
    color: ${(props) => (props.heading ? props.theme.gray800 : props.theme.gray400)};
    @media ${device.mobileS} {
        font-size: ${(props) => (props.heading ? '40px' : '14px')};
    }
`;

const Authentication = ({ isTypeLogin }) => {
    return (
        <AuthSideColor>
            <AuthContainer>
                <AuthCard>
                    <AuthType heading='true'>
                        {isTypeLogin ? 'Login' : 'Sign Up'}
                    </AuthType>
                    <AuthType>
                        {isTypeLogin
                            ? 'Sign in to access your account'
                            : 'Sign up to explore buddies'}
                    </AuthType>
                    {isTypeLogin ? <AuthLogin /> : <AuthRegister />}
                </AuthCard>
            </AuthContainer>
        </AuthSideColor>
    );
};

Authentication.propTypes = {
    isTypeLogin: PropTypes.bool.isRequired
};

export default Authentication;
