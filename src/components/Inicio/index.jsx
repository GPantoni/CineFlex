import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Inicio() {
    const [listaCartazes, setListaCartazes] = useState(null);

    useEffect(() => {
        const promessa = axios.get('https://mock-api.driven.com.br/api/v4/cineflex/movies');
        promessa.then(reposta => setListaCartazes(reposta.data))
    }, []);


    return (
        <>
            <Selecione>
                <h2>Selecione o filme</h2>
            </Selecione>
            <Cartazes >
                {listaCartazes === null ? <h1>Loading...</h1> : listaCartazes.map(
                    item =>
                        <Cartaz key={item.id}>
                            <Link to={`/sessoes/${item.id}`}>
                                <img src={item.posterURL} alt={item.title} />
                            </Link>
                        </Cartaz>
                )}
            </Cartazes>
        </>
    )
}

const Selecione = styled.div`
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
const Cartazes = styled.div`
    width: 100%;

    padding: 0 30px;

    display: grid;
    grid-template-columns: auto auto;
    gap: 11px 30px;
    justify-content: space-evenly;
`
const Cartaz = styled.div`
    width: 145px;
    height: 209px;

    padding: 8px;

    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
`