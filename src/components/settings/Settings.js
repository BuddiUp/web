import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import FOG from 'vanta/dist/vanta.fog.min';
import { Container } from '../../global-styles';
// eslint-disable-next-line
import SettingsUpdateForm from './SettingsUpdateForm';
import { CategoryHeader, CategoryText } from '../globalUI/GlobalUI';

const SettingsContainer = styled.div`
    background-color: ${(props) => props.theme.gray200};
    padding: 32px 0px 32px 0px;
`;

const SettingsCard = styled.div`
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0px 2px 0px 0px ${(props) => props.theme.gray350};
    background-color: ${(props) => props.theme.white};
`;

const SettingsCategory = styled.h1`
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

const Settings = () => {
    const [vantaEffect, setVantaEffect] = useState(0);
    const MY_REF = useRef(null);
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                FOG({
                    el: MY_REF.current,
                    mouseControls: true,
                    touchControls: true,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    speed: 1.6,
                    zoom: 0.3,
                    highlightColor: 0xd049ed,
                    midtoneColor: 0xeba4f5,
                    lowlightColor: 0x5cc3d9,
                    baseColor: 0xffffff
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);
    return (
        <>
            <CategoryHeader ref={MY_REF}>
                <CategoryText>Settings</CategoryText>
            </CategoryHeader>
            <SettingsContainer>
                <Container>
                    <SettingsCard>
                        <SettingsCategory>Profile Information</SettingsCategory>
                        <SettingsDivider />
                        <SettingsUpdateForm />
                    </SettingsCard>
                </Container>
            </SettingsContainer>
        </>
    );
};

export default Settings;
