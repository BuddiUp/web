import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { device } from '../../theme';
import history from '../../history';

const ProfileContainer = styled.div`
    display: flex;
`;

const ProfileContent = styled.div`
    display: flex;
    padding: 20px;
    border-radius: 8px;
    width: 100%;
    box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.1);
    background-color: ${(props) => props.theme.white};
    z-index: 5;

    @media ${device.mobileS} {
        flex-direction: column;
    }
`;

const ProfileAvatar = styled.img`
    height: 170px;
    width: 130px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 19px;

    @media ${device.mobileS} {
        width: 156px;
    }
`;

const CardBtn = styled.button`
    padding: 11px;
    border-radius: 8px;
    margin: 7px 7px 7px 0px;
    font-size: 13px;
    min-width: 93px;
    cursor: pointer;
    color: ${(props) => (props.buddiBtn ? props.theme.white : props.theme.gray500)};
    background-color: ${(props) =>
        props.buddiBtn ? props.theme.primary : props.theme.gray300};
    &:hover {
        opacity: 0.8;
    }
`;

const CardContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 12px;
`;

const ProfileName = styled.h1`
    color: ${(props) => props.theme.gray800};
    font-weight: 900;
    font-size: 26px;
`;

const UserLoc = styled.p`
    font-size: 14px;
    color: ${(props) => props.theme.gray400};
    margin-bottom: 5px;
`;

const ProfileDesc = styled.p`
    color: ${(props) => props.theme.gray500};
    font-size: 15px;
    max-width: 390px;
    margin: 15px 0px;
`;

const handleBtnClick = (authed) => {
    if (!authed) return history.push('/login');
    console.log('I need to be setup (ProfileCard.js)');
};

const ProfileCard = ({ userProfile, userImage }) => {
    const isAuthenticated = useSelector((state) => state.authReducer.token !== null);

    return (
        <ProfileContainer>
            <ProfileContent>
                <ProfileAvatar src={userImage} />
                <CardContent>
                    <ProfileName>
                        {/* eslint-disable-next-line */}
                        {userProfile.name}, {userProfile.age}
                    </ProfileName>
                    <UserLoc>
                        {/* eslint-disable-next-line */}
                        {userProfile.city}, {userProfile.state}
                    </UserLoc>
                    {userProfile.bio ? (
                        <ProfileDesc>{userProfile.bio}</ProfileDesc>
                    ) : null}
                    <div style={{ display: 'flex' }}>
                        <CardBtn onClick={() => handleBtnClick(isAuthenticated)}>
                            Message
                        </CardBtn>
                        <CardBtn buddiBtn onClick={() => handleBtnClick(isAuthenticated)}>
                            BuddiUp
                        </CardBtn>
                    </div>
                </CardContent>
            </ProfileContent>
        </ProfileContainer>
    );
};

ProfileCard.propTypes = {
    userProfile: PropTypes.shape({
        profile_Image: PropTypes.string,
        name: PropTypes.string,
        age: PropTypes.string,
        city: PropTypes.string,
        state: PropTypes.string,
        bio: PropTypes.string
    }).isRequired,
    userImage: PropTypes.string.isRequired
};

export default ProfileCard;
