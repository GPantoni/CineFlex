import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Sucesso() {
    const { state } = useLocation();
    const navigate = useNavigate();
    console.log(state);

    return (
        <Content>
            <Section>
                Pedido feito com sucesso!
            </Section>
            <Info>
                <h2>Filme e sessão</h2>
                <p>{state.filme}</p>
                <p>{state.data} {state.hora}</p>
            </Info>
            <Info>
                <h2>Ingressos</h2>
                {state.poltronas.map(pol => <p key={pol}>Assento {pol}</p>)}
            </Info>
            <Info>
                <h2>Comprador</h2>
                <p>Nome: {state.nome}</p>
                <p>CPF: {state.cpf}</p>
            </Info>
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
        margin-top: 65px;
        
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
const Section = styled.div`
    width: 60%;
    margin-top: 50px;
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #247A6B;
`

const Info = styled.div`
    width: 100%;

    h2 {
        margin-top: 40px;
        margin-bottom: 10px;
        
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #293845;
    }

    p {
        margin-bottom: 5px;
        
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 26px;
        letter-spacing: 0.04em;
        color: #293845;
    }
`