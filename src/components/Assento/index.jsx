import React from 'react';
import styled from 'styled-components';

export default function Assento() {
    return (
        <>
            <Selecione>
                <h2>
                    Selecione o(s) assento(s)
                </h2>
            </Selecione>
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