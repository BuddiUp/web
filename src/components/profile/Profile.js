import React, { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import FOG from 'vanta/dist/vanta.fog.min';
import { fetchProfile } from '../../store/actions/action.profile';
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
    margin-bottom: 50px;
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
    const dispatch = useDispatch();
    const USER_UUID = useParams().id;
    const { USER, userImage, isLoading, ERROR } = useSelector((state) => ({
        USER: state.profileReducer.user,
        userImage: state.authReducer.default_image,
        isLoading: state.profileReducer.loading,
        ERROR: state.profileReducer.error
    }));
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

    useEffect(() => {
        dispatch(fetchProfile(USER_UUID));
    }, [dispatch, USER_UUID]);

    // TODO: Pass the error in the component and display an error message
    const DisplayProfile = (profileError) => {
        if (profileError) {
            return (
                <h3 style={{ textAlign: 'center', marginTop: '45px' }}>
                    There was an error. This is still a work in progress.
                </h3>
            );
        }
        return (
            <ProfileContainer>
                <ProfileWrapper>
                    <ProfileCard userProfile={USER} userImage={userImage} />
                    <ProfileGrid>
                        <ProfileAbout userProfileName={USER.name} />
                        <Recommended />
                    </ProfileGrid>
                </ProfileWrapper>
            </ProfileContainer>
        );
    };

    return (
        <PageContainer>
            <CategoryHeader ref={MY_REF} />
            <Container>{isLoading ? <h1>Loading</h1> : DisplayProfile(ERROR)}</Container>
        </PageContainer>
    );
};
export default Profile;
