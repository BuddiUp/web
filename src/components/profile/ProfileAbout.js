import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
    margin-left: 15px;
`;

const AboutOuterCard = styled.div`
    height: 400px; // TODO: Remove later
    min-width: 400px;
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
    box-shadow: 0px 8.5px 23px 0px rgba(0, 0, 0, 0.1);
    background-color: $((props) => props.theme.white);
`;

const AboutHeader = styled.h1`
    font-size: 23px;
`;

const ProfileAbout = () => {
    return (
        <AboutContainer>
            <AboutOuterCard>
                <AboutHeader>Alex's Traits</AboutHeader>
            </AboutOuterCard>
        </AboutContainer>
    );
};

export default ProfileAbout;
