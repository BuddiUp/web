import React, { useEffect, useState, useRef } from 'react';
import FOG from 'vanta/dist/vanta.fog.min';
import { Container } from '../../global-styles';
import { CategoryHeader, CategoryText } from '../globalUI/GlobalUI';
import * as SS from './SettingStyles';
import SettingsUpdateForm from './SettingsUpdateForm';
import BuddiProfile from './BuddiProfile';

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
            <SS.SettingsContainer>
                <Container>
                    <SS.SettingsCard style={{ marginBottom: '24px' }}>
                        <SS.SettingsCategory>Buddi Profile</SS.SettingsCategory>
                        <SS.SettingsDivider />
                        <BuddiProfile />
                    </SS.SettingsCard>
                    <SS.SettingsCard>
                        <SS.SettingsCategory>Profile Information</SS.SettingsCategory>
                        <SS.SettingsDivider />
                        <SettingsUpdateForm />
                    </SS.SettingsCard>
                </Container>
            </SS.SettingsContainer>
        </>
    );
};

export default Settings;
