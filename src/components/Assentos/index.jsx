import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Rodape from '../Rodape';

export default function Assentos() {
    const [assentos, setAssentos] = useState(null);
    const { idSessao } = useParams();

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`).then(resposta => setAssentos(resposta.data));
    }, []);

    console.log(assentos, idSessao);
    return (
        <>
            <Selecione>
                <h2>
                    Selecione o(s) assento(s)
                </h2>
            </Selecione>
            <Content>
                {assentos &&
                    <div>
                        {assentos.seats.map(
                            pol =>
                                <Poltrona key={pol.id} disponivel={pol.isAvailable} >{pol.name}</Poltrona>
                        )}
                    </div>
                }
            </Content>
            {assentos && <Rodape posterURL={assentos.movie.posterURL} titulo={assentos.movie.title} dia={assentos.day.weekday} hora={assentos.name} />}
        </>
    )
}

const Selecione = styled.div`
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
`;

const Content = styled.div`
    width:100%
`;

const Poltrona = styled.div`
    width: 26px;
    height: 26px;

    display: flex;
    justify-content: center;
    align-items: center;
    margin: 7px 3px;

    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0.04em;

    border: 1px solid ${props => props.disponivel === true ? '#808f9d' : props.disponivel === 'selecionado' ? '#1aae9e' : '#F7C52B'};
    border-radius: 14px;
    
    background-color: ${props => props.disponivel === true ? '#c3cfd9' : props.disponivel === 'selecionado' ? '#8dd7cf' : '#FBE192'};
`;