import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../theme';

export const CategoryHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 250px;
    background-color: #ffc300;
`;

export const CategoryText = styled.h1`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    letter-spacing: 1px;
    color: ${(props) => props.theme.white};
    font-weight: 900;
    font-size: 50px;
`;

export const FormContainer = styled.div`
    display: flex;
    margin: ${(props) => (props.formSettings ? '25px 0px' : '25px 0px 0px 0px')};
    flex-direction: ${(props) => (props.formSettings ? 'row' : 'column')};
    justify-content: ${(props) => (props.formSettings ? 'space-between' : null)};
    width: ${(props) => (props.formSettings ? 'unset' : '375px')};

    @media ${device.mobileL} {
        flex-direction: ${(props) => (props.formSettings ? 'column' : null)};
    }
    @media ${device.mobileS} {
        width: ${(props) => (props.formSettings ? '100%' : '279px')};
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
    width: ${(props) => (props.formSettings ? 'unset' : '100%')};
    font-size: 15px;
    padding: ${(props) => (props.formSettings ? '10px' : '15px')};
    border-radius: 8px;
    box-sizing: border-box;
    color: ${(props) => props.theme.gray800};
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

export const FormRadio = styled.input`
    margin-right: 5px;
`;

export const FormLabel = styled.label`
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.gray500};
    margin-right: 14px;
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
