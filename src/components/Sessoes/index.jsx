import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Rodape from '../Rodape';

export default function Sessoes() {
    const [sessao, setSessao] = useState(null);

    const { idFilme } = useParams();

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes`).then(resposta => setSessao(resposta.data));
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
                        <div key={item.id}>
                            <span>{item.weekday} - {item.date}</span>
                            <div>
                                {item.showtimes.map(
                                    elemento =>
                                        <Link key={elemento.id} to={`/assentos/${elemento.id}`}>
                                            <button key={elemento.id}>{elemento.name}</button>
                                        </Link>
                                )}
                            </div>
                        </div>
                )}
            </Content>
            {sessao && <Rodape posterURL={sessao.posterURL} titulo={sessao.title} />}
        </>
    )
}

const SectionTitle = styled.div`
    height: 110px;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
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
    padding-left: 23px;

    span {
        margin-bottom: 20px;
        
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        letter-spacing: 0.02em;

        color: #293845;

    }

    button {
        width: 83px;
        height: 43px;

        margin: 0 8px 30px 5px;

        background: #E8833A;
        border: none;
        border-radius: 3px;

        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.02em;

        color: #FFFFFF;
    }
`