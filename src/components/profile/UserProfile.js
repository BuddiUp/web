import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import FOG from 'vanta/dist/vanta.fog.min';
import testFace from '../../assets/images/testFace.jpg';
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

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProfileCard = styled.div`
    display: flex;
    justify-content: center;
    margin-top: -130px;
`;

const ImageOutline = styled.div`
    background-color: ${(props) => props.theme.white};
    border-radius: 8px;
    padding: 9px;
    z-index: 5;
    box-shadow: 0px 8.5px 23px 0px rgba(0, 0, 0, 0.1);
`;

// const ProfileImage = styled.img`
//     display: flex;
//     justify-content: center;
//     height: 565px;
//     width: 365px;
//     border-radius: 8px;
//     object-fit: cover;
//     z-index: 5;
//     position: relative;
// `;

const ProfileImage = styled.div`
    display: flex;
    justify-content: center;
    height: 465px;
    width: 365px;
    border-radius: 8px;
    background: url(${testFace}) center;
    background-size: cover;
    position: relative;
`;

const ProfileContent = styled.div`
    height: 206px;
    width: 286px;
    background-color: ${(props) => props.theme.white};
    border-radius: 8px;
    margin-bottom: 19px;
    padding: 20px;
    position: absolute;
    bottom: 0;
`;

const CardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ProfileAvatar = styled.img`
    height: 70px;
    width: 70px;
    object-fit: cover;
    border-radius: 100%;
`;

const CardBtn = styled.button`
    padding: 11px;
    border-radius: 8px;
    margin-left: 7px;
    font-size: 13px;
    cursor: pointer;
    color: ${(props) => (props.buddiBtn ? props.theme.white : props.theme.gray500)};
    background-color: ${(props) =>
        props.buddiBtn ? props.theme.primary : props.theme.gray300};
    &:hover {
        opacity: 0.8;
    }
`;

// const ProfileInfo = styled.div`
//     display: flex;
//     width: 800px;
//     padding: 20px;
//     border-radius: 15px;
//     box-shadow: 0px 0px 24px -4px rgba(0, 0, 0, 0.17);
//     background-color: ${(props) => props.theme.white};
//     z-index: 5;
// `;

const CardContent = styled.div`
    margin-top: 12px;
`;

const ProfileName = styled.h1`
    font-weight: 600;
    font-size: 26px;
`;

const UserLoc = styled.p`
    font-size: 14px;
    color: ${(props) => props.theme.gray400};
    margin-bottom: 5px;
`;

const ProfileDesc = styled.p`
    color: ${(props) => props.theme.gray500};
    font-size: 15px;
`;

const UserProfile = () => {
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
            <ProfileContainer>
                <Container>
                    <ProfileCard>
                        <ImageOutline>
                            {/* <ProfileImage src={testFace} /> */}
                            <ProfileImage>
                                <ProfileContent>
                                    <CardHeader>
                                        <ProfileAvatar src={testFace} />
                                        <div>
                                            <CardBtn>Message</CardBtn>
                                            <CardBtn buddiBtn>BuddiUp</CardBtn>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <ProfileName>Alex, 18</ProfileName>
                                        <UserLoc>San Francisco, CA</UserLoc>
                                        <ProfileDesc>
                                            Hello there this is a test descriptiopn cause
                                            idakdk what to put here but okay idk hello
                                        </ProfileDesc>
                                    </CardContent>
                                </ProfileContent>
                            </ProfileImage>
                        </ImageOutline>
                    </ProfileCard>
                </Container>
            </ProfileContainer>
        </PageContainer>
    );
};
export default UserProfile;
