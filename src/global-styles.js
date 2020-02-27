import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { device } from './theme';

export const GlobalStyle = createGlobalStyle`
   @font-face {
        font-family: 'Circular Std';
        src: url('/fonts/CircularStd-Bold.woff2') format('woff2'),
            url('/fonts/CircularStd-Bold.woff') format('woff');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'Circular Std';
        src: url('/fonts/CircularStd-Black.woff2') format('woff2'),
            url('/fonts/CircularStd-Black.woff') format('woff');
        font-weight: 900;
        font-style: normal;
    }

    @font-face {
        font-family: 'Circular Std';
        src: url('/fonts/CircularStd-Medium.woff2') format('woff2'),
            url('/fonts/CircularStd-Medium.woff') format('woff');
        font-weight: 500;
        font-style: normal;
    }
    * {
        margin: 0;
        padding: 0;
        font-family: 'Circular Std', Arial, Helvetica, sans-serif !important;
        transition: all 0.3s ease 0s;
    }

    button{
        border-top: none;
        border: none;
    }
    
    .vanta-canvas{
        opacity: .8;
        width: 100% !important;
    }
    
    /* ---------------------- */
    /* SLICK PROPERTIES */
    /* ---------------------- */
    .slick-prev:before, .slick-next:before{
        color: ${(props) => props.theme.gray800};
    }
    
    .slick-slide {
        padding: 0 8px;
        box-sizing: border-box;
    } 
    
    .slick-track{
        float: left;
    }
    
`;
export const Maintenance = styled.h4`
    text-transform: uppercase;
    letter-spacing: 2px;
    opacity: 0.7;
    color: ${(props) => props.theme.gray300};
`;

// #########################
// NO ACCESS  COMPONENT
// #########################
const DisabledContainer = styled.div`
    cursor: not-allowed;
`;
const Disabled = styled.div`
    opacity: 0.4;
    pointer-events: none;
`;
export const NoAccess = ({ children }) => {
    return (
        <DisabledContainer>
            <Disabled>{children}</Disabled>
        </DisabledContainer>
    );
};

NoAccess.propTypes = {
    children: PropTypes.element.isRequired
};

// #########################
// RESPONSIVE PROPERTIES
// #########################
export const Container = styled.div`
    width: 1375px;
    /* padding: 0px 25px; */
    margin: 0px auto;

    @media ${device.laptopM} {
        width: 1105px;
    }

    @media ${device.laptopS} {
        width: 905px;
    }

    @media ${device.tabletM} {
        width: 726px;
    }

    @media ${device.tabletL} {
        width: 90%;
    }
`;
