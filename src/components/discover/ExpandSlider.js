import React from 'react';
import Slider from 'react-slick';
import { Container } from '../../global-styles';
import { userSettings } from './slider.settings';
import * as Style from './SliderStyles';

const ExpandSlider = () => {
    return (
        <Style.SliderContainer>
            <Container>
                <Slider {...userSettings}>
                    <Style.NoProfileContainer>
                        <Style.NoProfileEmoji type='frown' />
                        <Style.NoProfiles>
                            We couldn&apos;t find any buddies near you.
                        </Style.NoProfiles>
                    </Style.NoProfileContainer>
                </Slider>
            </Container>
        </Style.SliderContainer>
    );
};
export default ExpandSlider;
