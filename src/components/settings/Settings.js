import React, { useEffect, useState, useRef } from 'react';
import _ from 'lodash';
import FOG from 'vanta/dist/vanta.fog.min';
import buddiup from '../../apis/buddiup';
import { Container } from '../../global-styles';
import { CategoryHeader, CategoryText } from '../globalUI/GlobalUI';
import * as SS from './SettingStyles';
import SettingsUpdateForm from './SettingsUpdateForm';
import BuddiProfile from './BuddiProfile';

const Settings = () => {
    const [userInfo, setUserInfo] = useState({});

    // eslint-disable-next-line
    const userProfileImg =
        !_.isEmpty(userInfo) && userInfo.user.profile_Image
            ? userInfo.user.profile_Image
            : userInfo.default_image;

    const USER_TOKEN = localStorage.getItem('token');
    useEffect(() => {
        const CONFIG = {
            headers: {
                Authorization: `Token ${USER_TOKEN}`
            }
        };

        buddiup
            .get('/api/auth/user', CONFIG)
            .then((res) => setUserInfo(res.data))
            .catch((err) => console.log(err));
    }, [USER_TOKEN]);

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
                    <SS.SettingsGrid>
                        {_.isEmpty(userInfo) ? (
                            <h1>Loading...</h1>
                        ) : (
                            <>
                                <SS.SettingsCard style={{ marginBottom: '24px' }}>
                                    <SS.SettingsCategory>
                                        Buddi Profile
                                    </SS.SettingsCategory>
                                    <SS.SettingsDivider />
                                    <BuddiProfile
                                        user_profile={userInfo.user}
                                        profile_img={userProfileImg}
                                    />
                                </SS.SettingsCard>

                                <SS.SettingsCard>
                                    <SS.SettingsCategory>
                                        Profile Information
                                    </SS.SettingsCategory>
                                    <SS.SettingsDivider />
                                    <SettingsUpdateForm user_profile={userInfo.user} />
                                </SS.SettingsCard>
                            </>
                        )}
                    </SS.SettingsGrid>
                </Container>
            </SS.SettingsContainer>
        </>
    );
};

export default Settings;
