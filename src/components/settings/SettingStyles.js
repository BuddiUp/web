import styled from 'styled-components';
import { device } from '../../theme';
import * as Style from '../globalUI/GlobalUI';

export const SettingsContainer = styled.div`
    background-color: ${(props) => props.theme.gray200};
    padding: 32px 0px 32px 0px;
`;

export const SettingsCard = styled.div`
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0px 2px 0px 0px ${(props) => props.theme.gray350};
    background-color: ${(props) => props.theme.white};
`;

export const SettingsCategory = styled.h1`
    font-size: 22px;
    color: ${(props) => props.theme.gray800};
`;

export const SettingsDivider = styled.hr`
    width: 100%;
    height: 2px;
    border: none;
    margin-top: 10px;
    background-color: ${(props) => props.theme.gray300};
`;

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

export const SettingsBio = styled.textarea`
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

export const BioCount = styled.h1`
    font-size: 17px;
    margin-top: 8px;
    color: ${(props) => props.theme.gray500};
    color: ${(props) =>
        props.closeToMax >= 130 ? props.theme.error : props.theme.gray500};
`;

export const SettingsBtn = styled(Style.FormButton)`
    width: unset;
    padding: 9px;
    margin-left: 9px;
    margin: 0px 0px 0px 9px;
    justify-content: flex-end;

    @media ${device.mobileL} {
        margin: 9px 0px 0px 9px;
        width: 100%;
    }
`;
