import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'antd';
import Slider from 'react-slick';
import { Container } from '../../global-styles';
import { discoverNear } from '../../store/actions/action.discover';
import testFace from '../../assets/images/testFace.jpg';
import { userSettings } from './slider.settings';

const SliderContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
    transition: 5s ease-in-out;
`;

const SliderLink = styled(Link)`
    text-decoration: none;
    &:hover {
        opacity: 0.8;
    }
`;

const SliderItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    height: 316px;
`;

const ProfileImage = styled.div`
    border-radius: 8px;
    background: url(${testFace});
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 100%;
    position: relative;
`;

const ProfileFade = styled.div`
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 65%, #000000bf 100%);
    border-radius: 8px;
    height: 100%;
`;

const ProfileContent = styled.div`
    width: -webkit-fill-available;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 8px;
    padding: 6px 15px;
`;

const ProfileName = styled.h1`
    font-size: 23px;
    color: ${(props) => props.theme.white};
`;

const ProfileSubText = styled.p`
    font-size: 16px;
    color: ${(props) => props.theme.gray300};
`;

const NoProfileContainer = styled.div`
    display: flex;
`;

const NoProfileEmoji = styled(Icon)`
    color: ${(props) => props.theme.gray500};
    margin-right: 10px;
    font-size: 45px;
`;

const NoProfiles = styled.h4`
    color: ${(props) => props.theme.gray500};
`;

// * Delete later *
const TempGen = () => {
    const items = [];
    for (let i = 0; i < 30; i += 1) {
        items.push(
            <SliderLink to='/' key={i}>
                <SliderItem>
                    <ProfileImage>
                        <ProfileFade>
                            <ProfileContent>
                                <ProfileName>Victoria, 18</ProfileName>
                                <ProfileSubText>San Fransisco, CA</ProfileSubText>
                            </ProfileContent>
                        </ProfileFade>
                    </ProfileImage>
                </SliderItem>
            </SliderLink>
        );
    }
    return items;
};

const DiscoverSlider = () => {
    const userData = useSelector((state) => state.authReducer.user);
    const discoveredUsers = useSelector((state) => state.discoverReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(discoverNear(userData));
    }, [dispatch, userData]);

    const GenProfileCard = () => {
        const users = Object.keys(discoveredUsers.userProfiles).map((key) => {
            const { id, name, age, city, state } = discoveredUsers.userProfiles[key];

            return (
                <SliderLink to='/' key={id}>
                    <SliderItem>
                        <ProfileImage>
                            <ProfileFade>
                                <ProfileContent>
                                    <ProfileName>
                                        {/* eslint-disable-next-line */}
                                        {name}, {age}
                                    </ProfileName>
                                    <ProfileSubText>
                                        {/* eslint-disable-next-line */}
                                        {city}, {state}
                                    </ProfileSubText>
                                </ProfileContent>
                            </ProfileFade>
                        </ProfileImage>
                    </SliderItem>
                </SliderLink>
            );
        });
        // TODO: Display error message
        if (discoveredUsers.error) {
            return (
                <>
                    <NoProfileContainer>
                        <NoProfileEmoji type='frown' />
                        <NoProfiles>
                            We couldn&apos;t find any buddies near you.
                        </NoProfiles>
                    </NoProfileContainer>
                </>
            );
        }
        return users;
    };

    return (
        <SliderContainer>
            <Container>
                <Slider {...userSettings}>{GenProfileCard()}</Slider>
            </Container>
        </SliderContainer>
    );
};

export default DiscoverSlider;
