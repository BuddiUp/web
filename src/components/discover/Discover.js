import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'antd';
import FOG from 'vanta/dist/vanta.fog.min';
import { Container } from '../../global-styles';
import DiscoverSlider from './DiscoverSlider';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DiscoverContent = styled.div`
    height: 100vh;
`;

const CategoryHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 250px;
    background-color: #ffc300;
`;

const DiscoverHeader = styled.h1`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    letter-spacing: ${(props) => (props.pageHeader ? '1px' : '')};
    color: ${(props) => (props.pageHeader ? props.theme.white : props.theme.gray800)};
    font-weight: ${(props) => (props.pageHeader ? '900' : '600')};
    font-size: ${(props) => (props.pageHeader ? '50px' : '27px')};
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
                <DiscoverHeader pageHeader>Discover</DiscoverHeader>
            </CategoryHeader>
            <DiscoverContent>
                <Container>
                    {/* DISCOVER PEOPLE NEAR */}
                    <DiscoverHeader style={{ marginTop: '35px' }}>
                        People near you
                        <DiscoverViewAll to='/'>
                            View All
                            <DiscoverViewArrow type='caret-right' />
                        </DiscoverViewAll>
                    </DiscoverHeader>
                    <CategoryDescription>
                        Get together with people in your area.
                    </CategoryDescription>
                    <DiscoverSlider />

                    {/* DISCOVER PEOPLE AT */}
                    <DiscoverHeader style={{ marginTop: '35px' }}>
                        Expand your search
                        <DiscoverViewAll to='/'>
                            View All
                            <DiscoverViewArrow type='caret-right' />
                        </DiscoverViewAll>
                    </DiscoverHeader>
                    <CategoryDescription>
                        Reach out to others from different areas.
                    </CategoryDescription>
                    <DiscoverSlider />
                </Container>
            </DiscoverContent>
        </>
    );
};

export default Discover;
