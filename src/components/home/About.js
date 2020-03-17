import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import { Container } from '../../global-styles';

const AboutContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    justify-content: center;
    height: 300px;
    margin: 85px 0px;
`;

const AboutContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 713px;
    text-align: center;
`;

const AboutIcon = styled(Icon)`
    font-size: 65px;
    color: ${(props) => props.theme.primary};
`;

const AboutHeader = styled.h1`
    font-size: 35px;
    margin-bottom: 20px;
    color: ${(props) => props.theme.gray800};
`;

const AboutText = styled.p`
    font-size: 23px;
    font-weight: 500;
    color: ${(props) => props.theme.gray600};
`;

export default () => {
    return (
        <Container>
            <AboutContainer>
                <AboutContent>
                    <AboutIcon type='usergroup-add' />
                    <AboutHeader>What is BuddiUp?</AboutHeader>
                    <AboutText>
                        BuddiUp is here to make it easy for you to find others who share
                        the same interests. Whether it’s hiking outdoors or photography,
                        there’s no need to wait for companionship.
                    </AboutText>
                </AboutContent>
            </AboutContainer>
        </Container>
    );
};
