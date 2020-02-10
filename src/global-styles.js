import styled, { createGlobalStyle } from 'styled-components';

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
        font-family: 'Circular Std', Arial, Helvetica, sans-serif;
        transition: all 0.3s ease 0s;
    }
    
    button{
        border-top: none;
        border: none;
    }
    
    .vanta-canvas{
        opacity: .7;
        width: 100% !important;
    }
`;

export const Container = styled.div`
    width: 1375px;
    padding: 0px 25px;
    margin: 0px auto;
`;
