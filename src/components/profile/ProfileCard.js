import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NoAccess } from '../../global-styles';
import { device } from '../../theme';

const ProfileContainer = styled.div`
    display: flex;
`;

const ProfileContent = styled.div`
    display: flex;
    width: 100%;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.1);
    background-color: ${(props) => props.theme.white};
    z-index: 5;
`;

const ProfileAvatar = styled.img`
    height: 170px;
    width: 130px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 19px;

    @media ${device.mobileXS} {
        width: 100px;
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
    font-weight: 600;
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

const ProfileCard = ({ userProfile }) => {
    return (
        <ProfileContainer>
            <ProfileContent>
                <ProfileAvatar src={userProfile.profile_Image} />
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
                    <NoAccess>
                        <div style={{ display: 'flex' }}>
                            <CardBtn>Message</CardBtn>
                            <CardBtn buddiBtn>BuddiUp</CardBtn>
                        </div>
                    </NoAccess>
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
    }).isRequired
};

export default ProfileCard;
