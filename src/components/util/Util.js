import styled from 'styled-components';

export const CategoryHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 250px;
    background-color: #ffc300;
`;

export const CategoryText = styled.h1`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    letter-spacing: 1px;
    color: ${(props) => props.theme.white};
    font-weight: 900;
    font-size: 50px;
`;
