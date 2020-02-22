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
    
    /* ---------------------- */
    /* SCROLLBAR PROPERTIES */
    /* ---------------------- */
    ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background: #a4a4a4;
    }
    
    
    
`;

export const Maintenance = styled.h4`
    text-transform: uppercase;
    letter-spacing: 2px;
    opacity: 0.6;
    color: ${(props) => props.theme.gray300};
`;

export const Container = styled.div`
    width: 1375px;
    padding: 0px 25px;
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
