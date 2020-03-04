import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'antd';

export const SliderContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 30px 0px;
    transition: 5s ease-in-out;
`;

export const SliderLink = styled(Link)`
    text-decoration: none;
    &:hover {
        opacity: 0.8;
    }
`;

export const SliderItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    height: 316px;
`;

export const ProfileImage = styled.div`
    border-radius: 8px;
    background: url(${(props) => props.profileImage});
    background-size: cover;
    background-position: center;
    height: 100%;
    width: 100%;
    position: relative;
`;

export const ProfileFade = styled.div`
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 65%, #000000bf 100%);
    border-radius: 8px;
    height: 100%;
`;

export const ProfileContent = styled.div`
    width: -webkit-fill-available;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 8px;
    padding: 6px 15px;
`;

export const ProfileName = styled.h1`
    font-size: 23px;
    color: ${(props) => props.theme.white};
`;

export const ProfileSubText = styled.p`
    font-size: 16px;
    color: ${(props) => props.theme.gray300};
`;

export const NoProfileContainer = styled.div`
    display: flex;
`;

export const NoProfileEmoji = styled(Icon)`
    color: ${(props) => props.theme.gray500};
    margin-right: 10px;
    font-size: 45px;
`;

export const NoProfiles = styled.h4`
    color: ${(props) => props.theme.gray500};
`;
