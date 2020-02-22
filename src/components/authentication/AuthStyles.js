import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../theme';

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    width: 375px;
    @media ${device.mobileS} {
        width: 279px;
    }
`;

export const FormHeader = styled.h4`
    text-transform: uppercase;
    margin: 10px 0px;
    font-weight: 600;
    letter-spacing: 0.6px;
    color: ${(props) => props.theme.gray500};
`;

export const FormInput = styled.input`
    border: none;
    outline: none;
    width: 100%;
    font-size: 15px;
    padding: 15px;
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
`;

export const FormSelect = styled.select`
    color: ${(props) => props.theme.gray500};
    appearance: none;
    border-radius: 8px;
    background: #eee
        url('http://blog.idevelopweb.site/wp-content/uploads/2016/05/nw_selarw.png')
        no-repeat scroll 97.5% center;
    &:focus {
        color: ${(props) => props.theme.gray800};
    }
`;

export const FormDate = styled.div`
    display: grid;
    grid-gap: 15px;
    grid-template-columns: 2fr 1fr 1fr;
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

export const FormMsg = styled.p`
    color: ${(props) => props.theme.gray500};
    text-align: center;
    font-size: 15px;
    margin-bottom: 9px;
`;

export const FormLink = styled(Link)`
    text-decoration: none;
    color: ${(props) => props.theme.primary};
    &:hover {
        color: ${(props) => props.theme.darkPrimary};
    }
`;

export const FormError = styled.p`
    color: ${(props) => props.theme.error};
    margin: 10px 0px;
`;
