import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'antd';
import FOG from 'vanta/dist/vanta.fog.min';
import { Container, Maintenance } from '../../global-styles';
import DiscoverPlaces from './DiscoverPlaces';
import DiscoverSlider from './DiscoverSlider';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// const DiscoverContent = styled.div`
//     height: 100vh;
// `;

const CategoryHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 250px;
    background-color: #ffc300;
`;

const CategoryText = styled.h1`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    letter-spacing: 1px;
    color: ${(props) => props.theme.white};
    font-weight: 900;
    font-size: 50px;
`;

// TODO: REFACTOR NAMES BELOW TO MAKE REUSEABLE
const DiscoverCategory = styled.h1`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-top: 35px;
    color: ${(props) => props.theme.gray800};
    font-weight: 600;
    font-size: 27px;
`;

const DiscoverViewArrow = styled(Icon)`
    font-size: 12px;
    color: ${(props) => props.theme.primary};
    opacity: 0;
`;

const DiscoverViewAll = styled(Link)`
    text-transform: uppercase;
    margin-left: 15px;
    color: ${(props) => props.theme.gray400};
    font-size: 14px;
    font-weight: 900;
    text-decoration: none;
    letter-spacing: 0.4px;

    &:hover {
        color: ${(props) => props.theme.primary};
        ${DiscoverViewArrow} {
            opacity: 1;
        }
    }
`;

const CategoryDescription = styled.p`
    color: ${(props) => props.theme.gray500};
    margin-top: 4px;
`;

const Discover = () => {
    const [vantaEffect, setVantaEffect] = useState(0);
    const myRef = useRef(null);
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                FOG({
                    el: myRef.current,
                    mouseControls: true,
                    touchControls: true,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    speed: 1.6,
                    zoom: 0.3
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return (
        <>
            <CategoryHeader ref={myRef}>
                <CategoryText>Discover</CategoryText>
                <Maintenance>Under construction.</Maintenance>
            </CategoryHeader>
            <>
                <Container>
                    {/* DISCOVER PEOPLE NEAR */}
                    <DiscoverCategory>
                        People near you
                        <DiscoverViewAll to='/'>
                            View All
                            <DiscoverViewArrow type='caret-right' />
                        </DiscoverViewAll>
                    </DiscoverCategory>
                    <CategoryDescription>
                        Get together with people in your area.
                    </CategoryDescription>
                    <DiscoverSlider />
                    {/* ######################### */}
                    {/* DISCOVER PLACES */}
                    {/* Remove later */}
                    <p style={{ margin: '35px 0px -35px 0px', color: '#6b7cff' }}>
                        Coming soon
                    </p>
                    <DiscoverCategory>
                        Explore new places
                        <DiscoverViewAll to='/'>
                            <DiscoverViewArrow type='caret-right' />
                        </DiscoverViewAll>
                    </DiscoverCategory>
                    <CategoryDescription>
                        Find places to meetup based off your interests.
                    </CategoryDescription>
                    <DiscoverPlaces />
                    {/* ######################### */}
                    {/* DISCOVER PEOPLE AT */}
                    <DiscoverCategory>
                        Expand your search
                        <DiscoverViewAll to='/'>
                            View All
                            <DiscoverViewArrow type='caret-right' />
                        </DiscoverViewAll>
                    </DiscoverCategory>
                    <CategoryDescription>
                        Reach out to others from different areas.
                    </CategoryDescription>
                    <DiscoverSlider />
                    {/* ######################### */}
                </Container>
            </>
        </>
    );
};

export default Discover;
