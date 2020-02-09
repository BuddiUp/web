import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import FOG from 'vanta/dist/vanta.fog.min';
import homeHeader from '../../assets/images/homeHeader.png';

const HeaderImage = styled.div`
    background: url(${homeHeader}) center no-repeat;
    background-size: cover;
    height: 650px;
    display: flex;
    justify-content: center;
`;

const HeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const HeaderText = styled.h1`
    color: ${(props) => props.theme.white};
    font-size: ${(props) => (props.h1 ? '3.3em' : '1.5em')};
    font-weight: ${(props) => (props.h1 ? '600' : '500')};
`;

const HeaderButton = styled.button`
    font-size: 19px;
    border-radius: 8px;
    padding: 5px 21px;
    margin-top: 17px;
    color: ${(props) => props.theme.white};
    background-color: #4f65ff;

    &:hover {
        cursor: pointer;
        padding: 5px 32px;
        background-color: ${(props) => props.theme.darkPrimary};
    }
`;

export default (props) => {
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
                    highlightColor: 0x3cbbf2,
                    midtoneColor: 0xe35ef5,
                    lowlightColor: 0x7aabe3,
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
            <HeaderImage ref={myRef}>
                <HeaderContent>
                    <HeaderText h1='true'>Ready to meet a Buddi?</HeaderText>
                    <HeaderText>Exercitation aute occaecat officia amet nisi.</HeaderText>
                    <HeaderButton>Find a Buddi</HeaderButton>
                </HeaderContent>
            </HeaderImage>
        </>
    );
};
