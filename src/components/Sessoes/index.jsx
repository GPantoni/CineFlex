import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Rodape from '../Rodape';

export default function Sessoes() {
    const [sessao, setSessao] = useState(null);

    const { idFilme } = useParams();

    useEffect(() => {
        const promessa = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes`);
        promessa.then(resposta => setSessao(resposta.data));
    }, []);

    console.log(sessao, idFilme);

    return (
        <>
            <SectionTitle>
                <h2>
                    Selecione o horário
                </h2>
            </SectionTitle>
            <Content>
                {sessao === null ? <h1>Loading...</h1> : sessao.days.map(
                    item =>
                        <div>
                            <span>`${item.weekday} - ${item.date}`</span>
                        </div>
                )}
            </Content>
            <Rodape />
        </>
    )
}

const SectionTitle = styled.div`
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
        font-family: Roboto;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0.04em;
        text-align: center;
    }
`
const Content = styled.div`
    width: 100%;
`