import React from 'react';
import styled from 'styled-components';

const AnnContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 44px;
    background: linear-gradient(
        86deg,
        rgba(146, 66, 242, 1) 0%,
        rgba(255, 214, 117, 1) 100%
    );
`;

const AnnLabel = styled.h4`
    color: ${(props) => props.theme.white};
    border-radius: 8px;
    margin-right: 11px;
    padding: 4px 9px;
    background-color: #737fff;
`;

const AnnMsg = styled.h4`
    color: ${(props) => props.theme.white};
    letter-spacing: 0.7px;
`;

const Announcement = () => {
    return (
        <AnnContainer>
            <AnnLabel>News</AnnLabel>
            <AnnMsg>This website is under heavy construction.</AnnMsg>
        </AnnContainer>
    );
};

export default Announcement;
