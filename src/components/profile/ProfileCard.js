import React from 'react';
import styled from 'styled-components';
import testFace from '../../assets/images/testFace.jpg';

const ProfileContainer = styled.div`
    display: flex;
    margin-top: -130px;
`;

const ImageOutline = styled.div`
    background-color: ${(props) => props.theme.white};
    border-radius: 8px;
    padding: 9px;
    z-index: 5;
    box-shadow: 0px 8.5px 23px 0px rgba(0, 0, 0, 0.1);
`;

const ProfileImage = styled.div`
    display: flex;
    justify-content: center;
    height: 565px;
    width: 365px;
    border-radius: 8px;
    background: url(${(props) => props.profileSource}) center;
    background-size: cover;
    position: relative;
`;

const ProfileContent = styled.div`
    height: 206px;
    width: 286px;
    background-color: ${(props) => props.theme.white};
    border-radius: 8px;
    margin-bottom: 19px;
    padding: 20px;
    position: absolute;
    bottom: 0;
`;

const CardHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ProfileAvatar = styled.img`
    height: 70px;
    width: 70px;
    object-fit: cover;
    border-radius: 100%;
`;

const CardBtn = styled.button`
    padding: 11px;
    border-radius: 8px;
    margin-left: 7px;
    font-size: 13px;
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
`;

const ProfileCard = () => {
    return (
        <ProfileContainer>
            <ImageOutline>
                <ProfileImage profileSource={testFace}>
                    <ProfileContent>
                        <CardHeader>
                            <ProfileAvatar src={testFace} />
                            <div>
                                <CardBtn>Message</CardBtn>
                                <CardBtn buddiBtn>BuddiUp</CardBtn>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <ProfileName>Alex, 18</ProfileName>
                            <UserLoc>San Francisco, CA</UserLoc>
                            <ProfileDesc>
                                Hello there this is a test descriptiopn cause idakdk what
                                to put here but okay idk hello
                            </ProfileDesc>
                        </CardContent>
                    </ProfileContent>
                </ProfileImage>
            </ImageOutline>
        </ProfileContainer>
    );
};
export default ProfileCard;
