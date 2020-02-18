import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import { Container } from '../../global-styles';
import { device } from '../../theme';
import featureBG from '../../assets/images/featureBG.png';

const colors = {
    orange: '#ffa600',
    green: '#6ac969',
    blue: '#54d6ff',
    red: '#ff6565'
};

const FeatureBG = styled.div`
    background: url(${featureBG}) center no-repeat;
`;

const FeatureContainer = styled.div`
    display: grid;
    grid-gap: 70px 0px;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);

    @media ${device.tabletL} {
        grid-gap: 20px;
    }

    @media ${device.tabletM} {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const FeatureIcon = styled(Icon)`
    display: flex;
    font-size: 30px;
`;

const FeatureCards = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    padding: 35px;
    height: 300px;
    width: 350px;
    border-bottom: 3px solid transparent;

    ${FeatureIcon} {
        color: ${(props) => props.cardColor};
    }

    &:hover {
        background-color: ${(props) => props.theme.white};
        box-shadow: 0px 8.5px 23px 0px rgba(0, 0, 0, 0.13);
        border-bottom: 3px solid ${(props) => props.cardColor};
    }

    @media ${device.tabletL} {
        width: unset;
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
    font-size: ${(props) => (props.subText ? '18px' : '29px')};
    color: ${(props) => (props.subText ? props.theme.gray500 : props.theme.gray800)};
    font-weight: ${(props) => (props.subText ? '500' : '600')};
`;

export default () => {
    return (
        <FeatureBG>
            <Container style={{ margin: '75px auto' }}>
                <FeatureContainer>
                    <FeatureCards cardColor={colors.orange}>
                        <IconPadding>
                            <FeatureIcon type='thunderbolt' />
                        </IconPadding>
                        <FeatureContent>Share your interests with others</FeatureContent>
                        <FeatureContent subText='true'>
                            Choose the activities that you love and we’ll find buddies who
                            are intersted as well.
                        </FeatureContent>
                    </FeatureCards>
                    <FeatureCards cardColor={colors.green}>
                        <IconPadding>
                            <FeatureIcon type='radar-chart' />
                        </IconPadding>
                        <FeatureContent>Find others near you</FeatureContent>
                        <FeatureContent subText='true'>
                            No need for incessant scrolling, we’ll pair you with a buddy
                            close by, based on your location.
                        </FeatureContent>
                    </FeatureCards>
                    <FeatureCards cardColor={colors.blue}>
                        <IconPadding>
                            <FeatureIcon type='read' />
                        </IconPadding>
                        <FeatureContent>Explore your area</FeatureContent>
                        <FeatureContent subText='true'>
                            New to town? Visiting for a little bit? Find a buddy to check
                            out the local haunts.
                        </FeatureContent>
                    </FeatureCards>
                    <FeatureCards cardColor={colors.red}>
                        <IconPadding>
                            <FeatureIcon type='euro' />
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
            </Container>
        </FeatureBG>
    );
};
