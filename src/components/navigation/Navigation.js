import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

export default () => {
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
                        <StyledLink to='/'>Home</StyledLink>
                        <StyledLink to='/'>For You</StyledLink>
                        <StyledLink to='/'>Discover</StyledLink>
                    </NavItems>
                </NavList>
                <NavList auth>
                    <NavItems>
                        <StyledLink to='/login'>Login</StyledLink>
                        <StyledLink to='/register'>Sign Up</StyledLink>
                    </NavItems>
                </NavList>
            </NavContent>
        </NavContainer>
    );
};
