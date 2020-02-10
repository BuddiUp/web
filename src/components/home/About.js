import React from 'react';
import styled from 'styled-components';
import { Container } from '../../global-styles';

const AboutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    margin-top: 45px;
    border-radius: 15px;
    background-color: #e0e0e0;
`;

export default () => {
    return (
        <Container>
            <AboutContainer>What should go here?</AboutContainer>
        </Container>
    );
};
