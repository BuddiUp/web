import React from 'react';
import { Link } from 'react-router-dom';
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
    margin-top: 124px;
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
                        Don&apos;t wait for others to come to you, go find a buddi.
                    </CardText>
                    <Link to='/register'>
                        <CardButton>Create an account</CardButton>
                    </Link>
                </CardContent>
            </BottomCard>
        </Container>
    );
};
