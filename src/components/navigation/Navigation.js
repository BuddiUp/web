import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
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
    position: ${(props) => (props.auth ? 'absolute' : '')};
    right: ${(props) => (props.auth ? '10px' : '')};
`;

const NavItems = styled.li`
    list-style: none;
`;

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
                    <NavItems>
                        {isAuthenticated ? (
                            <>
                                <StyledLink to='/'>Home</StyledLink>
                                <StyledLink to='/foryou'>For You</StyledLink>
                                <StyledLink to='/discover'>Discover</StyledLink>
                            </>
                        ) : null}
                    </NavItems>
                </NavList>
                <NavList auth>
                    <NavItems>
                        {isAuthenticated ? (
                            <StyledLink
                                to='/login'
                                onClick={() => dispatch(authLogout())}
                            >
                                {username}
                            </StyledLink>
                        ) : (
                            <>
                                <StyledLink to='/login'>Login</StyledLink>
                                <StyledLink to='/register'>Sign Up</StyledLink>
                            </>
                        )}
                    </NavItems>
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
