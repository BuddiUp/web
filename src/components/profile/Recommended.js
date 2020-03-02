import React from 'react';
import styled from 'styled-components';
import testFace from '../../assets/images/testFace.jpg';
import {
    CardContainer,
    CardHeader,
    SmallProfileContainer,
    SmallProfileContent,
    SmallProfileName,
    SmallProfileImg,
    SmallProfileLoc
} from './CardStyles';

const GenRec = () => {
    const USERS = [];
    for (let i = 0; i < 3; i += 1) {
        USERS.push(
            <SmallProfileContainer>
                <SmallProfileImg src={testFace} />
                <SmallProfileContent>
                    <SmallProfileName>Noah</SmallProfileName>
                    <SmallProfileLoc>Fort Worth, Texas</SmallProfileLoc>
                </SmallProfileContent>
            </SmallProfileContainer>
        );
    }
    return USERS;
};

const Recommended = () => {
    return (
        <CardContainer>
            <CardHeader>You may like</CardHeader>
            {GenRec()}
        </CardContainer>
    );
};

export default Recommended;
