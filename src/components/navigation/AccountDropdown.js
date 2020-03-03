import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'antd';
import { device } from '../../theme';
import { NoAccess } from '../../global-styles';
import { authLogout } from '../../store/actions/action.auth';

const UserDropdown = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 25px;
`;

const UserProfileImg = styled.img`
    height: 45px;
    width: 45px;
    border-radius: 8px;
    margin-right: 8px;
    background-color: ${(props) => props.theme.gray500};
`;

const UserProfileBtn = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    outline: none;

    color: ${(props) => props.theme.gray800};
    font-weight: 600;
    letter-spacing: 0.5px;
    text-decoration: none;
    &:hover {
        cursor: pointer;
        color: ${(props) => props.theme.primary};
        opacity: 0.8;
    }
`;

const UserProfileText = styled.p`
    font-size: 16px;
    @media ${device.mobileXS} {
        display: none;
    }
`;

const DropdownIcon = styled(Icon)`
    font-size: 14px;
    margin-left: 8px;
    transform: rotate(${(props) => (props.arrow ? 180 : 0)}deg);
    display: flex !important;
    @media ${device.mobileXS} {
        margin-left: 5px;
    }
`;

const AccountIcons = styled(Icon)`
    display: flex;
    margin-right: 8px;
`;

const ProfileList = styled.ul`
    z-index: 10;
    top: 45px;
    right: 0px;
    width: 250px;
    margin-top: 10px;
    border-radius: 15px;
    position: absolute;
    padding: 6px;

    list-style-type: none;
    font-weight: bold;
    background-color: white;
    box-shadow: 0px 0px 17px 0px rgba(0, 0, 0, 0.2);
`;

const ItemDivider = styled.div`
    margin: 2px 0px;
    border-bottom: 2px solid ${(props) => props.theme.divider};
`;

const ListItemLink = styled(Link)`
    color: ${(props) => props.theme.gray800};
    font-weight: 600;
    letter-spacing: 0.5px;
    padding: 15px;
    text-decoration: none;
    &:hover {
        color: ${(props) => props.theme.primary};
        opacity: 0.8;
    }
`;

const ListItem = styled.li`
    padding: 0px 16px;
    border-radius: 15px;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
`;

/**
 * STATE FUNCTIONALITY
 * @profileDropdown (bool) - Toggles the profile dropdown on the navigation
 * CUSTOM PROP FUNCTIONALITY
 * @arrow (bool) - Determines if the arrow should be flipped based off @profileDropdown
 */
const AccountDropdown = () => {
    // Reference to outer div
    const node = useRef();
    const [profileDropdown, setProfileDropdown] = useState(false);
    const dispatch = useDispatch();

    const user = useSelector((state) => state.authReducer.user);

    const handleClick = (e) => {
        // Returns true if whatever you're clicking is inside the “node” ref.
        if (node.current.contains(e.target)) return;
        setProfileDropdown(false);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    return (
        <div ref={node}>
            <UserDropdown>
                <UserProfileBtn onClick={() => setProfileDropdown(!profileDropdown)}>
                    <UserProfileImg src={user.profile_Image} />
                    {/* eslint-disable-next-line */}
                    <UserProfileText> {user.name} </UserProfileText>
                    <DropdownIcon arrow={profileDropdown ? 1 : 0} type='caret-down' />
                </UserProfileBtn>
            </UserDropdown>

            {profileDropdown ? (
                <ProfileList onClick={() => setProfileDropdown(!profileDropdown)}>
                    <ListItemLink to={`/user/${user.uuid}`}>
                        <ListItem>
                            <AccountIcons type='user' />
                            Profile
                        </ListItem>
                    </ListItemLink>
                    <ItemDivider />
                    <NoAccess>
                        <ListItemLink to='/'>
                            <ListItem>
                                <AccountIcons type='setting' />
                                Settings
                            </ListItem>
                        </ListItemLink>
                    </NoAccess>
                    <ItemDivider />
                    <ListItemLink to='/login' onClick={() => dispatch(authLogout())}>
                        <ListItem>
                            <AccountIcons type='logout' />
                            Log Out
                        </ListItem>
                    </ListItemLink>
                </ProfileList>
            ) : (
                undefined
            )}
        </div>
    );
};

export default AccountDropdown;
