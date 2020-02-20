import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';
import { Container } from '../../global-styles';
import testFace from '../../assets/images/testFace.jpg';
import settings from './slider.settings';

const SliderContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: -30px;
`;

const SliderLink = styled(Link)`
    text-decoration: none;
    &:hover {
        opacity: 0.8;
    }
`;

const SliderItem = styled.div`
    border-radius: 8px;
    height: 316px;
    border: 1px solid ${(props) => props.theme.gray400};
`;

const ImageContainer = styled.div`
    height: 59%;
    width: 100%;
    overflow: hidden;
`;

const ProfileImage = styled.img`
    border-radius: 7px 7px 0px 0px;
    object-fit: cover;
    height: 186px;
    width: 100%;
`;

const ProfileContent = styled.div`
    text-align: center;
    margin-top: 15px;
`;

const ProfileName = styled.h2`
    margin-bottom: 9px;
    color: ${(props) => props.theme.gray800};
    font-size: 19px;
`;

const ProfileItem = styled.p`
    font-weight: 600;
    color: ${(props) => props.theme.gray500};
    & > span {
        color: ${(props) => props.theme.primary};
    }
`;

// * Delete later *
const TempGen = () => {
    const items = [];
    for (let i = 0; i < 30; i += 1) {
        items.push(
            <SliderLink to='/' key={i}>
                <SliderItem>
                    <ImageContainer>
                        <ProfileImage src={testFace} alt='' />
                    </ImageContainer>
                    <ProfileContent>
                        <ProfileName>Victoria</ProfileName>
                        <ProfileItem>
                            Age:
                            <span> 18</span>
                        </ProfileItem>
                        <ProfileItem>San Fransisco, CA</ProfileItem>
                    </ProfileContent>
                </SliderItem>
            </SliderLink>
        );
    }
    return items;
};

const DiscoverSliders = () => {
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

export default DiscoverSliders;
