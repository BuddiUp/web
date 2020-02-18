import React from 'react';
import styled from 'styled-components';
import { Container } from '../../global-styles';
import bottomCard from '../../assets/images/bottomCard.png';

const BottomCard = styled.div`
    background: url(${bottomCard}) center no-repeat;
    background-size: cover;
    display: flex;

    align-items: center;
    justify-content: center;
    height: 332px;
    margin-top: 95px;
    border-radius: 15px;
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 623px;
    padding: 0px 50px;
`;

const CardText = styled.h1`
    text-align: center;
    margin-bottom: 15px;
    color: ${(props) => (props.header ? props.theme.white : props.theme.gray300)};
    font-size: ${(props) => (props.header ? '30px' : '20px')};
    font-weight: ${(props) => (props.header ? '600' : '500')};
`;

const CardButton = styled.button`
    font-size: 16px;
    padding: 9px 25px;
    border-radius: 8px;
    margin-top: 15px;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.primary};
    &:hover {
        cursor: pointer;
        padding: 9px 38px;
        background-color: #4f65ff;
    }
`;

export default () => {
    return (
        <Container>
            <BottomCard>
                <CardContent>
                    <CardText header>Ready to get started?</CardText>
                    <CardText>
                        BuddiUp is here to make it easy for you to share the things you
                        love with the people who share your passions.
                    </CardText>
                    <CardButton>Create an account</CardButton>
                </CardContent>
            </BottomCard>
        </Container>
    );
};
