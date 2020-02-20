import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import FOG from 'vanta/dist/vanta.fog.min';
import { Container } from '../../global-styles';
import DiscoverSliders from './DiscoverSliders';

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
`;

const DiscoverHeader = styled.h1`
    letter-spacing: 1px;
    color: ${(props) => (props.pageHeader ? props.theme.white : props.theme.gray800)};
    font-weight: ${(props) => (props.pageHeader ? '900' : '600')};
    font-size: ${(props) => (props.pageHeader ? '50px' : '27px')};
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
                    <DiscoverHeader style={{ marginTop: '35px' }}>
                        People near you
                    </DiscoverHeader>
                    <CategoryDescription>
                        Get together with people in your area.
                    </CategoryDescription>
                    <DiscoverSliders />
                </Container>
            </DiscoverContent>
        </>
    );
};

export default Discover;
