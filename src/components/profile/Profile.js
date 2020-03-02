import React, { useRef, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import FOG from 'vanta/dist/vanta.fog.min';
import ProfileCard from './ProfileCard';
import Recommended from './Recommended';
import ProfileAbout from './ProfileAbout';
import { Container } from '../../global-styles';
import { device } from '../../theme';

const CategoryHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 250px;
    background-color: #ffc300;
`;

const ProfileContainer = styled.div`
    padding: 0px 145px;

    @media ${device.laptopS} {
        padding: 0px;
    }
`;

const PageContainer = styled.div`
    min-height: 100vh;
`;

const ProfileWrapper = styled.div`
    margin-top: -150px;
`;

const ProfileGrid = styled.div`
    display: grid;
    grid-gap: 15px;
    grid-template-columns: 1.4fr 1fr;

    @media ${device.tabletL} {
        display: flex;
        flex-direction: column-reverse;
    }
`;

const Profile = () => {
    const user = useSelector((state) => state.authReducer.user);
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
                    highlightColor: 0x6fd9c6,
                    midtoneColor: 0x76d7f5,
                    lowlightColor: 0x20fa2d,
                    baseColor: 0xffffff
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <PageContainer>
            <CategoryHeader ref={MY_REF} />
            <Container>
                <ProfileContainer>
                    <ProfileWrapper>
                        <ProfileCard userProfile={user} />
                        <ProfileGrid>
                            <ProfileAbout userProfileName={user.name} />
                            <Recommended />
                        </ProfileGrid>
                    </ProfileWrapper>
                </ProfileContainer>
            </Container>
        </PageContainer>
    );
};
export default Profile;
