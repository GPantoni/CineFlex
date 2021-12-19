import React from 'react';
import styled from 'styled-components';

export default function Rodape({ children }) {
    return (
        <Content></Content>
    )
}

const Content = styled.header`
    width: 100%;
    height: 117px;

    position: fixed;
    left: 0;
    bottom: 0;
    
    background: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;
`;