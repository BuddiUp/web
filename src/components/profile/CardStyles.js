import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardContainer = styled.div`
    height: max-content;
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
    box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.1);
    background-color: ${(props) => props.theme.white};
`;

export const CardHeader = styled.h1`
    font-size: 23px;
    color: ${(props) => props.theme.gray800};
    margin-bottom: 15px;
`;

export const ComingSoon = styled.h4`
    font-weight: 500;
    color: ${(props) => props.theme.gray400};
`;

export const SmallProfileContainer = styled(Link)`
    display: flex;
    padding: 15px;
    text-decoration: none;
    border-radius: 8px;
    margin-bottom: 8px;
    background-color: ${(props) => props.theme.white};

    &:hover {
        cursor: pointer;
        box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.1);
    }
`;

export const SmallProfileContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const SmallProfileImg = styled.img`
    height: 54px;
    width: 54px;
    border-radius: 8px;
    object-fit: cover;
    margin-right: 15px;
`;

export const SmallProfileName = styled.h3`
    color: ${(props) => props.theme.gray800};
    font-size: 20px;
`;

export const SmallProfileLoc = styled.p`
    color: ${(props) => props.theme.gray400};
    font-size: 17px;
`;
