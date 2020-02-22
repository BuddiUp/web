import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { authLogout } from '../../store/actions/action.auth';

const NavContainer = styled.nav`
    display: flex;
    height: 60px;
    border-bottom: 2px solid ${(props) => props.theme.shadow};
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

const NavLogo = styled.h1`
    position: absolute;
    color: ${(props) => props.theme.gray800};
    left: 10px;
`;

const NavList = styled.ul`
    display: flex;
    position: ${(props) => (props.auth ? 'absolute' : '')};
    right: ${(props) => (props.auth ? '10px' : '')};
`;

const NavItem = styled.li`
    list-style: none;
`;

// LOOK INTO: Is there a way to inherit these styles?
const StyledLink = styled(Link)`
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
        /* color: ${(props) => props.theme.primary}; */
        border-bottom: 2px solid ${(props) => props.theme.primary};
    }
`;

const Disabled = styled.div`
    opacity: 0.3;
    pointer-events: none;
`;

const Navigation = ({ isAuthenticated, username }) => {
    const dispatch = useDispatch();

    return (
        <NavContainer>
            <NavContent>
                <NavLogo>
                    <StyledLink navlogo='true' to='/'>
                        BuddiUp
                        <span style={{ color: '#6b7cff' }}>.</span>
                    </StyledLink>
                </NavLogo>
                <NavList>
                    {isAuthenticated ? (
                        <>
                            <NavItem>
                                <StyledNavLink exact to='/' activeClassName='active'>
                                    Home
                                </StyledNavLink>
                            </NavItem>
                            <NavItem>
                                <Disabled>
                                    <StyledNavLink to='/foryou' activeClassName='active'>
                                        For You
                                    </StyledNavLink>
                                </Disabled>
                            </NavItem>
                            <NavItem>
                                <StyledNavLink to='/discover' activeClassName='active'>
                                    Discover
                                </StyledNavLink>
                            </NavItem>
                        </>
                    ) : null}
                </NavList>
                <NavList auth>
                    <NavItem>
                        {isAuthenticated ? (
                            <StyledLink
                                to='/login'
                                onClick={() => dispatch(authLogout())}
                            >
                                {/* {username} */}
                                First Name
                            </StyledLink>
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
    );
};

Navigation.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    username: PropTypes.string
};

Navigation.defaultProps = {
    username: ''
};

export default Navigation;
