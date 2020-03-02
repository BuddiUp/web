import React from 'react';
import styled from 'styled-components';
import testFace from '../../assets/images/testFace.jpg';

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
`;
const CardBtn = styled.button`
    padding: 11px;
    border-radius: 8px;
    margin-right: 7px;
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

const ProfileCard = () => {
    return (
        <ProfileContainer>
            <ProfileContent>
                <ProfileAvatar src={testFace} />
                <CardContent>
                    <ProfileName>Alex, 18</ProfileName>
                    <UserLoc>San Francisco, CA</UserLoc>
                    <ProfileDesc>
                        Hello there this is a test descriptiopn cause idakdk what to put
                        here but okay idk hello
                    </ProfileDesc>
                    <CardBtn>Message</CardBtn>
                    <CardBtn buddiBtn>BuddiUp</CardBtn>
                </CardContent>
            </ProfileContent>
        </ProfileContainer>
    );
};
export default ProfileCard;
