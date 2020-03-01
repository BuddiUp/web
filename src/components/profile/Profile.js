import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import FOG from 'vanta/dist/vanta.fog.min';
import ProfileCard from './ProfileCard';
import ProfileAbout from './ProfileAbout';
import { Container } from '../../global-styles';

const CategoryHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 250px;
    background-color: #ffc300;
`;

const PageContainer = styled.div`
    min-height: 100vh;
`;

const ProfileWrapper = styled.div`
    display: flex;
`;

const Profile = () => {
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
                    highlightColor: 0x5d65e6,
                    midtoneColor: 0xb328ff,
                    lowlightColor: 0xff9500
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
                <ProfileWrapper>
                    <ProfileCard />
                    <ProfileAbout />
                </ProfileWrapper>
            </Container>
        </PageContainer>
    );
};
export default Profile;
