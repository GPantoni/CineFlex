import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Rodape from '../Rodape';

export default function Assentos() {
    const [assentos, setAssentos] = useState(null);
    const [nomeComprador, setNomeComprador] = useState('');
    const [cpfComprador, setCpfComprador] = useState('');
    const { idSessao } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`).then(resposta => setAssentos(resposta.data));
    }, []);

    function handleSeat(isAvailable, id) {
        if (!isAvailable) return;
        assentos.seats.forEach(a => {
            if (a.id === id && a.isAvailable === true) {
                a.isAvailable = 'selecionado';
            } else if (a.id === id && a.isAvailable === 'selecionado') {
                a.isAvailable = true;
            }
        });

        setAssentos({ ...assentos });
        console.log(assentos);
    }

    function enviarDados() {
        let reservados = {
            ids: [],
            name: nomeComprador,
            cpf: cpfComprador
        }

        let aux = assentos.seats.filter(s => s.isAvailable === 'selecionado');

        let reservadosNomes = aux.map(s => s.name);

        reservados.ids = aux.map(s => s.id);

        axios.post('https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many', reservados)
            .then(
                resposta => {
                    navigate('/sucesso', {
                        state: {
                            filme: assentos.movie.title,
                            data: assentos.day.date,
                            hora: assentos.name,
                            poltronas: reservadosNomes,
                            nome: nomeComprador,
                            cpf: cpfComprador
                        }
                    })
                }
            )
    }

    return (
        <>
            <Selecione>
                Selecione o(s) assento(s)
            </Selecione>
            <Content>
                {assentos &&
                    <Poltronas>
                        {assentos.seats.map(
                            pol =>
                                <Poltrona key={pol.id} disponivel={pol.isAvailable} onClick={() => handleSeat(pol.isAvailable, pol.id)} >{pol.name}</Poltrona>)}
                    </Poltronas>
                }
                <TipoAssento>
                    <div>
                        <Poltrona disponivel='selecionado'></Poltrona>
                        Selecionado
                    </div>
                    <div>
                        <Poltrona disponivel={true} ></Poltrona>
                        Disponível
                    </div>
                    <div>
                        <Poltrona disponivel={false}></Poltrona>
                        Indisponível
                    </div>
                </TipoAssento>
                <Comprador>
                    <h3>Nome do comprador:</h3>
                    <input type="text" placeholder="Digite seu nome..." onChange={event => setNomeComprador(event.target.value)} />
                    <h3>CPF do comprador:</h3>
                    <input type="text" placeholder="Digite seu CPF..." onChange={event => setCpfComprador(event.target.value)} />
                </Comprador>
                <BotaoReservar>
                    <button onClick={() => enviarDados()}>Reservar assento(s)</button>
                </BotaoReservar>
            </Content>
            {assentos && <Rodape posterURL={assentos.movie.posterURL} titulo={assentos.movie.title} dia={assentos.day.weekday} hora={assentos.name} />}
        </>
    )
}

const Selecione = styled.div`
    margin: 30px 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.04em;
    text-align: center;
`;

const Content = styled.div`
    width:100%;
    
`;

const Poltronas = styled.div`
    width: 100%;
    padding: 0 25px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
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

const TipoAssento = styled.div`
    padding: 0 25px;
    margin: 5px;
    display: flex;
    justify-content: space-around;

    div{
        display: flex;
        flex-flow: column;
        align-items: center;
    }
`;

const Comprador = styled.div`
    width:100%;
    margin-top: 15px;
    padding: 0 25px;

    input {
        width: 100%;
        height: 50px;
        margin-top: 5px;
        margin-bottom: 10px;
        font-size: 18px;
        font-style: italic;
        font-weight: 400;
        line-height: 21px;
        color: #293845;
        padding-left: 15px;
        border: 1px solid #afafaf;
    }

    h3 {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #293845;
    }
`;

const BotaoReservar = styled.div`
    width:100%;
    margin-top: 15px;

    display: flex;
    justify-content: center;

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
        letter-spacing: 0.04em;

        color: #FFFFFF;
    }
`;