import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import AccountDropdown from './AccountDropdown';
import { device } from '../../theme';
import { NoAccess } from '../../global-styles';

const NavContainer = styled.nav`
    display: flex;
    height: 60px;
    border-bottom: 2px solid ${(props) => props.theme.shadow};
    display: ${(props) => (props.mainNav ? '' : 'none')};
    @media ${device.tabletM} {
        display: ${(props) => (props.dropdown ? 'flex' : 'none')};
    }
`;

const NavContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 25px;
    margin: 0px auto;
    width: 1375px;
    position: relative;
`;

const NavRoutes = styled.div`
    display: flex;
    @media ${device.tabletM} {
        display: ${(props) => (props.mainNav ? 'none' : '')};
    }
`;

const DropdownBtn = styled(Icon)`
    display: none;
    font-size: 20px;
    margin: 0px 15px;
    padding: 9px;
    border-radius: 8px;
    box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.14);
    transform: rotate(${(props) => (props.dropdown ? 180 : 0)}deg);
    background-color: ${(props) => props.theme.white};
    outline: none;

    &:hover {
        color: ${(props) => props.theme.primary};
        cursor: pointer;
        transition: all 0.1s ease 0s;
    }

    @media ${device.tabletM} {
        display: flex !important;
        display: initial;
    }

    @media ${device.mobileXS} {
        margin: 0px 15px 0px 0px;
    }
`;

const NavLogo = styled.h1`
    position: absolute;
    color: ${(props) => props.theme.gray800};
    left: 10px;
`;

const NavList = styled.ul`
    display: flex;
    position: ${(props) => (props.moveRight ? 'absolute' : '')};
    right: ${(props) => (props.moveRight ? '10px' : '')};
`;

const NavItem = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
`;

// LOOK INTO: Is there a way to inherit these styles?
export const StyledLink = styled(Link)`
    color: ${(props) => props.theme.gray800};
    font-weight: ${(props) => (props.navlogo ? '900' : '600')};
    letter-spacing: ${(props) => (props.navlogo ? '' : '0.5px')};
    padding: 15px;
    text-decoration: none;
    &:hover {
        color: ${(props) => props.theme.primary};
        opacity: 0.8;
    }
`;

const activeClassName = 'active';
const StyledNavLink = styled(NavLink).attrs({
    activeClassName
})`
    color: ${(props) => props.theme.gray800};
    font-weight: ${(props) => (props.navlogo ? '900' : '600')};
    letter-spacing: ${(props) => (props.navlogo ? '' : '0.5px')};
    padding: 9px 15px;
    text-decoration: none;
    &:hover {
        color: ${(props) => props.theme.primary};
        opacity: 0.8;
    }

    &.${activeClassName} {
        border-bottom: 2px solid ${(props) => props.theme.primary};
    }
`;

/**
 * STATE FUNCTIONALITY
 * @dropdown (bool) - Shows the dropdown
 * CUSTOM PROP FUNCTIONALITY
 * @mainNav (bool) - Navigation for larger displays.
 *                   If it's false, it will display the responsive navbar
 * @moveRight (bool) - Determines if the NavList should move to the right side
 */

const Navigation = ({ isAuthenticated, firstName }) => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <div>
            <NavContainer dropdown mainNav>
                <NavContent>
                    <NavLogo>
                        <StyledLink navlogo='true' to='/'>
                            BuddiUp
                            <span style={{ color: '#6b7cff' }}>.</span>
                        </StyledLink>
                    </NavLogo>
                    <NavRoutes mainNav>
                        <NavList>
                            {isAuthenticated ? (
                                <>
                                    <NavItem>
                                        <StyledNavLink
                                            exact
                                            to='/'
                                            activeClassName='active'
                                        >
                                            Home
                                        </StyledNavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NoAccess>
                                            <StyledNavLink
                                                to='/foryou'
                                                activeClassName='active'
                                            >
                                                For You
                                            </StyledNavLink>
                                        </NoAccess>
                                    </NavItem>
                                    <NavItem>
                                        <StyledNavLink
                                            to='/discover'
                                            activeClassName='active'
                                        >
                                            Discover
                                        </StyledNavLink>
                                    </NavItem>
                                </>
                            ) : null}
                        </NavList>
                    </NavRoutes>
                    <NavList moveRight>
                        <NavItem>
                            {isAuthenticated ? (
                                <>
                                    {/* TODO: Will a callbackwork? */}
                                    <AccountDropdown firstName={firstName} />
                                    <DropdownBtn
                                        type='arrow-down'
                                        dropdown={dropdown ? 1 : 0}
                                        onClick={() => setDropdown(!dropdown)}
                                    />
                                </>
                            ) : (
                                <>
                                    <StyledLink to='/login'>Login</StyledLink>
                                    <StyledLink to='/register'>Sign Up</StyledLink>
                                </>
                            )}
                        </NavItem>
                    </NavList>
                </NavContent>
            </NavContainer>
            {dropdown ? (
                <NavContainer dropdown={dropdown}>
                    <NavContent>
                        <NavRoutes>
                            <NavList>
                                {isAuthenticated ? (
                                    <>
                                        <NavItem>
                                            <StyledNavLink
                                                exact
                                                to='/'
                                                activeClassName='active'
                                            >
                                                Home
                                            </StyledNavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NoAccess>
                                                <StyledNavLink
                                                    to='/foryou'
                                                    activeClassName='active'
                                                >
                                                    For You
                                                </StyledNavLink>
                                            </NoAccess>
                                        </NavItem>
                                        <NavItem>
                                            <StyledNavLink
                                                to='/discover'
                                                activeClassName='active'
                                            >
                                                Discover
                                            </StyledNavLink>
                                        </NavItem>
                                    </>
                                ) : null}
                            </NavList>
                        </NavRoutes>
                    </NavContent>
                </NavContainer>
            ) : null}
        </div>
    );
};

Navigation.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    firstName: PropTypes.string
};

Navigation.defaultProps = {
    firstName: ''
};

export default Navigation;
