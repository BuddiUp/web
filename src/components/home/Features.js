import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import { Container } from '../../global-styles';
import featureBG from '../../assets/images/featureBG.png';

const FeatureBG = styled.div`
    background: url(${featureBG}) center no-repeat;
    background-size: cover;
`;

const FeatureContainer = styled.div`
    display: grid;
    grid-gap: 70px 0px;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
`;

const FeatureCards = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    padding: 35px;
    height: 300px;
    width: 350px;

    &:hover {
        background-color: ${(props) => props.theme.white};
        box-shadow: 0px 8.5px 23px 0px rgba(0, 0, 0, 0.13);
    }
`;

const IconPadding = styled.div`
    display: flex;
    align-self: baseline;
    margin-bottom: 35px;
    padding: 15px;
    border-radius: 50px;
    box-shadow: 0px 8.5px 23px 0px rgba(0, 0, 0, 0.1);
`;

const FeatureContent = styled.h2`
    padding-right: 50px;
    margin-bottom: 15px;
    font-size: ${(props) => (props.subText ? '20px' : '29px')};
    color: ${(props) => (props.subText ? props.theme.gray500 : props.theme.gray800)};
    font-weight: ${(props) => (props.subText ? '500' : '600')};
`;

export default () => {
    return (
        <Container style={{ margin: '75px auto' }}>
            <FeatureBG>
                <FeatureContainer>
                    <FeatureCards>
                        <IconPadding>
                            <Icon
                                type='euro'
                                style={{
                                    display: 'flex',
                                    fontSize: '30px',
                                    color: '#ffa600'
                                }}
                            />
                        </IconPadding>
                        <FeatureContent>
                            Hello I have no idea what to put here
                        </FeatureContent>
                        <FeatureContent subText='true'>
                            Tempor est ad esse magna Lorem incididunt labore nisi pariatur
                            et nulla nisi id.
                        </FeatureContent>
                    </FeatureCards>
                    <FeatureCards>
                        <IconPadding>
                            <Icon
                                type='euro'
                                style={{
                                    display: 'flex',
                                    fontSize: '30px',
                                    color: '#6ac969'
                                }}
                            />
                        </IconPadding>
                        <FeatureContent>
                            Hello I have no idea what to put here
                        </FeatureContent>
                        <FeatureContent subText='true'>
                            Tempor est ad esse magna Lorem incididunt labore nisi pariatur
                            et nulla nisi id.
                        </FeatureContent>
                    </FeatureCards>
                    <FeatureCards>
                        <IconPadding>
                            <Icon
                                type='euro'
                                style={{
                                    display: 'flex',
                                    fontSize: '30px',
                                    color: '#54d6ff'
                                }}
                            />
                        </IconPadding>
                        <FeatureContent>
                            Hello I have no idea what to put here
                        </FeatureContent>
                        <FeatureContent subText='true'>
                            Tempor est ad esse magna Lorem incididunt labore nisi pariatur
                            et nulla nisi id.
                        </FeatureContent>
                    </FeatureCards>
                    <FeatureCards>
                        <IconPadding>
                            <Icon
                                type='euro'
                                style={{
                                    display: 'flex',
                                    fontSize: '30px',
                                    color: '#ff6565'
                                }}
                            />
                        </IconPadding>
                        <FeatureContent>
                            Hello I have no idea what to put here
                        </FeatureContent>
                        <FeatureContent subText='true'>
                            Tempor est ad esse magna Lorem incididunt labore nisi pariatur
                            et nulla nisi id.
                        </FeatureContent>
                    </FeatureCards>
                </FeatureContainer>
            </FeatureBG>
        </Container>
    );
};
