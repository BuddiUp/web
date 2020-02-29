import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { Container } from '../../global-styles';
import { cardSettings } from './slider.settings';
import { SliderContainer, SliderLink } from './DiscoverSlider';
import { NoAccess } from '../../global-styles';

const SliderItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    height: 216px;
`;

const CardImage = styled.div`
    border-radius: 8px;
    background: url(${(props) => props.cardBg});
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 100%;
    position: relative;
`;

const CardFade = styled.div`
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 65%, #000000bf 100%);
    border-radius: 8px;
    height: 100%;
`;

const CardContent = styled.div`
    width: -webkit-fill-available;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 8px;
    padding: 6px 15px;
`;

const CardText = styled.h1`
    font-size: 23px;
    color: ${(props) => props.theme.white};
`;

// const Disabled = styled.div`
//     opacity: 0.2;
//     pointer-events: none;
// `;

/**
 * TODO: Add Meetup API
 * Need the website up before we're allowed to get Consumer Token
 */
const DiscoverPlaces = () => {
    return (
        <SliderContainer>
            <Container>
                <NoAccess>
                    <Slider {...cardSettings}>
                        <SliderLink to='/'>
                            <SliderItem>
                                <CardImage
                                    cardBg={
                                        'https://secure.meetupstatic.com/photos/event/2/e/a/d/highres_450131949.jpeg'
                                    }
                                >
                                    <CardFade>
                                        <CardContent>
                                            <CardText>Tech</CardText>
                                        </CardContent>
                                    </CardFade>
                                </CardImage>
                            </SliderItem>
                        </SliderLink>

                        <SliderLink to='/'>
                            <SliderItem>
                                <CardImage
                                    cardBg={
                                        'https://secure.meetupstatic.com/photos/event/2/e/a/7/highres_450131943.jpeg'
                                    }
                                >
                                    <CardFade>
                                        <CardContent>
                                            <CardText>Outdoors</CardText>
                                        </CardContent>
                                    </CardFade>
                                </CardImage>
                            </SliderItem>
                        </SliderLink>

                        <SliderLink to='/'>
                            <SliderItem>
                                <CardImage
                                    cardBg={
                                        'https://secure.meetupstatic.com/photos/event/2/e/a/c/highres_450131948.jpeg'
                                    }
                                >
                                    <CardFade>
                                        <CardContent>
                                            <CardText>Sports</CardText>
                                        </CardContent>
                                    </CardFade>
                                </CardImage>
                            </SliderItem>
                        </SliderLink>

                        <SliderLink to='/'>
                            <SliderItem>
                                <CardImage
                                    cardBg={
                                        'https://secure.meetupstatic.com/photos/event/2/e/8/8/highres_450131912.jpeg'
                                    }
                                >
                                    <CardFade>
                                        <CardContent>
                                            <CardText>Art</CardText>
                                        </CardContent>
                                    </CardFade>
                                </CardImage>
                            </SliderItem>
                        </SliderLink>
                    </Slider>
                </NoAccess>
            </Container>
        </SliderContainer>
    );
};

export default DiscoverPlaces;
