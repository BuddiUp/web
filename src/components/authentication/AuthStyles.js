import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../theme';

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    width: 350px;

    @media ${device.mobileS} {
        width: 279px;
    }
`;

export const FormInput = styled.input`
    border: none;
    outline: none;
    width: 100%;
    font-size: 15px;
    padding: 15px;
    margin-bottom: 15px;
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
`;

export const FormButton = styled.button`
    margin: 25px 0px;
    border-radius: 8px;
    padding: 15px;
    font-size: 15px;
    outline: none;
    width: 100%;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.primary};

    &:hover {
        cursor: pointer;
        background-color: ${(props) => props.theme.darkPrimary};
    }
`;

export const FormLink = styled(Link)`
    text-decoration: none;
    color: ${(props) => props.theme.primary};
    &:hover {
        color: ${(props) => props.theme.darkPrimary};
    }
`;
export const FormMsg = styled.p`
    color: ${(props) => props.theme.gray500};
    text-align: center;
    font-size: 15px;
    margin-bottom: 9px;
`;

export const FormError = styled.p`
    color: ${(props) => props.theme.error};
    margin-bottom: 15px;
`;

export const FormDate = styled.div`
    background-color: red;
`;
