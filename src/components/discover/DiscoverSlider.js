import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { Container } from '../../global-styles';
import { discoverNear } from '../../store/actions/action.discover';
import testFace from '../../assets/images/testFace.jpg';
import { userSettings } from './slider.settings';
import * as Style from './SliderStyles';

// * Delete later *
const TempGen = () => {
    const items = [];
    for (let i = 0; i < 30; i += 1) {
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

const DiscoverSlider = () => {
    const userData = useSelector((state) => state.authReducer.user);
    const discoveredUsers = useSelector((state) => state.discoverReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(discoverNear(userData));
    }, [dispatch, userData]);

    const GenProfileCard = () => {
        const users = Object.keys(discoveredUsers.userProfiles).map((key) => {
            const {
                id,
                name,
                age,
                city,
                state,
                user_uuid
            } = discoveredUsers.userProfiles[key];

            return (
                <Style.SliderLink to={`/user/${user_uuid}`} key={id}>
                    <Style.SliderItem>
                        <Style.ProfileImage profileImage={testFace}>
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

        if (discoveredUsers.error) {
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
        <Style.SliderContainer>
            <Container>
                {/* <Slider {...userSettings}>{GenProfileCard()}</Slider> */}
                <Slider {...userSettings}>{TempGen()}</Slider>
            </Container>
        </Style.SliderContainer>
    );
};
export default DiscoverSlider;
