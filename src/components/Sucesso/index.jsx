import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Sucesso() {
    const { state } = useLocation();
    const navigate = useNavigate();
    console.log(state);

    return (
        <Content>
            <button onClick={() => navigate('/')}>Voltar pra Home</button>
        </Content>
    )
}

const Content = styled.div`
    width: 100%;
    padding: 0 25px;
    display: flex;
    flex-flow: column;
    align-items: center;

    button {
        width: 225px;
        height: 42px;
        background: #E8833A;
        border: none;
        border-radius: 3px;

        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        letter-spacing: 0.04em;
        color: #FFFFFF;
    }
`