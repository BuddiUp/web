import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Icon } from 'antd';
import { authLogout } from '../../store/actions/action.auth';

const UserDropdown = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 25px;
`;

const UserProfileBtn = styled.button`
    display: flex;
    align-items: center;
    font-size: 16px;
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

const DropdownIcon = styled(Icon)`
    font-size: 14px;
    margin-left: 8px;
    transform: rotate(${(props) => (props.dropdown ? 180 : 0)}deg);
    display: flex !important;
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
    flex-direction: column;
    align-items: flex-start !important;

    padding: 0px 16px;
    border-radius: 15px;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
`;

// TODO: Find another way to not use state (prevent rerender)
const AccountDropdown = ({ username }) => {
    // Reference to outer div
    const node = useRef();
    const [dropdown, setDropdown] = useState(false);
    const dispatch = useDispatch();

    const handleClick = (e) => {
        // returns true if whatever you're clicking is inside the “node” ref.
        if (node.current.contains(e.target)) return;
        setDropdown(false);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, []);

    return (
        <div ref={node}>
            <UserDropdown>
                <UserProfileBtn onClick={() => setDropdown(!dropdown)}>
                    First Name
                    <DropdownIcon type='caret-down' dropdown={dropdown} />
                </UserProfileBtn>
            </UserDropdown>

            {dropdown ? (
                <ProfileList>
                    <ListItemLink to='/'>
                        <ListItem>First Name</ListItem>
                    </ListItemLink>
                    <ItemDivider />
                    <ListItemLink to='/'>
                        <ListItem>Settings</ListItem>
                    </ListItemLink>
                    <ItemDivider />
                    <ListItemLink to='/login' onClick={() => dispatch(authLogout())}>
                        <ListItem>Log Out</ListItem>
                    </ListItemLink>
                </ProfileList>
            ) : null}
        </div>
    );
};

AccountDropdown.propTypes = {
    username: PropTypes.string
};

AccountDropdown.defaultProps = {
    username: ''
};
export default AccountDropdown;
