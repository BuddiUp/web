import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import FOG from 'vanta/dist/vanta.fog.min';
import { DiscoverCategory } from '../discover/Discover';
import { Container, Maintenance } from '../../global-styles';
import { CategoryHeader, CategoryText } from '../globalUI/GlobalUI';
import { viewAll } from '../../store/actions/action.discover';
import testFace from '../../assets/images/testFace.jpg';
import * as Style from '../discover/SliderStyles';

const ViewContainer = styled.div`
    min-height: 100vh;
`;

const ProfileGrid = styled.div`
    display: grid;
    margin: 22px 0px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 20px;
`;

const BackIcon = styled(Icon)`
    font-size: 12px;
    color: ${(props) => props.theme.error};
`;

const BackBtn = styled(Link)`
    text-transform: uppercase;
    color: ${(props) => props.theme.error};
    font-size: 14px;
    font-weight: 900;
    text-decoration: none;
    letter-spacing: 0.4px;
    margin-bottom: -35px;

    &:hover {
        opacity: 0.7;
    }
`;

export const CategoryDescription = styled.p`
    margin-top: 4px;
    font-size: 18px;
    color: ${(props) => props.theme.gray500};
`;

const ViewAll = () => {
    const userData = useSelector((state) => state.authReducer.user);
    const fetchedUsers = useSelector((state) => state.discoverReducer);
    const dispatch = useDispatch();

    const [vantaEffect, setVantaEffect] = useState(0);
    const MY_REF = useRef(null);
    useEffect(() => {
        if (fetchedUsers.loading === false) {
            console.log('Enable me: ViewAll.js');
            // dispatch(viewAll(userData));
        }

        if (!vantaEffect) {
            setVantaEffect(
                FOG({
                    el: MY_REF.current,
                    mouseControls: true,
                    touchControls: true,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    speed: 1.6,
                    zoom: 0.3,
                    highlightColor: 0xf54dcd,
                    midtoneColor: 0xfff44e,
                    lowlightColor: 0xd69bff,
                    baseColor: 0xfafafa
                })
            );
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect, dispatch, fetchedUsers]);

    // * Delete later *
    const TempGen = () => {
        const items = [];
        for (let i = 0; i < 20; i += 1) {
            items.push(
                <Style.SliderLink to='/' key={i}>
                    <Style.SliderItem>
                        <Style.ProfileImage profileImage={testFace}>
                            <Style.ProfileFade>
                                <Style.ProfileContent>
                                    <Style.ProfileName>Victoria, 18</Style.ProfileName>
                                    <Style.ProfileSubText>
                                        San Fransisco, CA
                                    </Style.ProfileSubText>
                                </Style.ProfileContent>
                            </Style.ProfileFade>
                        </Style.ProfileImage>
                    </Style.SliderItem>
                </Style.SliderLink>
            );
        }
        return items;
    };

    const GenProfileCard = () => {
        const users = Object.keys(fetchedUsers.allUsers).map((key) => {
            const { id, name, age, city, state, user_uuid } = fetchedUsers.allUsers[key];

            return (
                <Style.SliderLink to={`/user/${user_uuid}`} key={id}>
                    <Style.SliderItem>
                        <Style.ProfileImage profileImage={fetchedUsers.default_image}>
                            <Style.ProfileFade>
                                <Style.ProfileContent>
                                    <Style.ProfileName>
                                        {/* eslint-disable-next-line */}
                                        {name}, {age}
                                    </Style.ProfileName>
                                    <Style.ProfileSubText>
                                        {/* eslint-disable-next-line */}
                                        {city}, {state}
                                    </Style.ProfileSubText>
                                </Style.ProfileContent>
                            </Style.ProfileFade>
                        </Style.ProfileImage>
                    </Style.SliderItem>
                </Style.SliderLink>
            );
        });

        if (fetchedUsers.error) {
            return (
                <Style.NoProfileContainer>
                    <Style.NoProfileEmoji type='frown' />
                    <Style.NoProfiles>
                        We couldn&apos;t find any buddies near you.
                    </Style.NoProfiles>
                </Style.NoProfileContainer>
            );
        }
        return users;
    };

    return (
        <>
            <CategoryHeader ref={MY_REF}>
                <CategoryText>View All</CategoryText>
                <Maintenance>Under construction.</Maintenance>
            </CategoryHeader>
            <ViewContainer>
                <Container>
                    <div style={{ margin: '35px 0px -25px 0px' }}>
                        <BackBtn to='/discover'>
                            <BackIcon type='caret-left' />
                            Back
                        </BackBtn>
                    </div>
                    <DiscoverCategory>Viewing all buddies</DiscoverCategory>
                    {/* eslint-disable-next-line */}
                    <CategoryDescription>Near {userData.zipcode}</CategoryDescription>
                    <ProfileGrid>{TempGen()}</ProfileGrid>
                </Container>
            </ViewContainer>
        </>
    );
};

export default ViewAll;
