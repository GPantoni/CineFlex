import React from 'react';
import styled from 'styled-components';

export default function Cabecalho() {
    return (
        <Content>
            <h1>
                CINEFLEX
            </h1>
        </Content>
    )
}

const Content = styled.header`
    width: 100%;
    height: 67px;

    position: fixed;
    left: 0;
    top: 0;
    
    background: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        color: #E8833A;
        font-size: 34px;
        font-style: normal;
        font-weight: 400;
        line-height: 40px;
        letter-spacing: 0em;
        text-align: center;
    }
`;