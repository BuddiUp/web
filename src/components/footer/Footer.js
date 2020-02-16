import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: ${(props) => props.theme.darkBox};
`;

const FooterBranding = styled.h4`
    margin-top: 20px;
    text-shadow: 0 2px 0 rgba(0, 0, 0, 0.39);
    color: ${(props) => props.theme.primary};
`;

const FooterContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 45px 0px;
`;

const FooterListUL = styled.ul`
    display: flex;
    list-style: none;
`;

const FooterList = styled.li`
    position: relative;
    padding: 0 7px 0 8px;
    &:not(:last-child)::after {
        content: '';
        position: absolute;
        top: 50%;
        right: 0;
        height: 20px;
        color: #5d5d5d;
        border-right: 2px solid;
        transform: translate3d(0, -50%, 0);
    }
`;

const FooterItem = styled(Link)`
    font-size: 17px;
    padding: 18px;
    color: ${(props) => props.theme.gray500};
    text-decoration: none;
    &:hover {
        color: ${(props) => props.theme.gray400};
        text-shadow: 0 2px 0 rgba(0, 0, 0, 0.39);
        opacity: 0.8;
    }
`;

export default () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterListUL>
                    <FooterList>
                        <FooterItem to='/'>Help Center</FooterItem>
                    </FooterList>
                    <FooterList>
                        <FooterItem to='/'>Terms of Service</FooterItem>
                    </FooterList>
                    <FooterList>
                        <FooterItem to='/'>Privacy Policy</FooterItem>
                    </FooterList>
                </FooterListUL>
                <FooterBranding>&copy; 2020 BuddiUp.</FooterBranding>
            </FooterContent>
        </FooterContainer>
    );
};
