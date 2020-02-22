import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';
import { Container } from '../../global-styles';
import testFace from '../../assets/images/testFace.jpg';
import homeHeader from '../../assets/images/homeHeader.png';
import settings from './slider.settings';

const SliderContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: -30px;
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
    color: ${(props) => props.theme.white};
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
                                <ProfileName>Victoria</ProfileName>
                                <ProfileSubText>Age: 18</ProfileSubText>
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
    return (
        <SliderContainer>
            <Container>
                <Slider {...settings} style={{ marginTop: '50px' }}>
                    {TempGen()}
                </Slider>
            </Container>
        </SliderContainer>
    );
};

export default DiscoverSlider;
