import React from 'react';
import { CardContainer, CardHeader, ComingSoon } from './CardStyles';

const ProfileAbout = ({ userProfileName }) => {
    return (
        <CardContainer>
            <CardHeader>About {userProfileName}</CardHeader>
            <ComingSoon>Coming soon</ComingSoon>
        </CardContainer>
    );
};

export default ProfileAbout;
