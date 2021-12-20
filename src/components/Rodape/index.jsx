import React from 'react';
import styled from 'styled-components';

export default function Rodape(props) {
    return (
        <Content>
            <Moldura>
                <img src={props.posterURL} alt={props.titulo} />
            </Moldura>
            <Texto>
                <p>{props.titulo}</p>
                {props.dia && <p>{props.dia} - {props.hora}</p>}
            </Texto>
        </Content>
    )
}

const Content = styled.div`
    width: 100%;
    height: 117px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    padding: 10px;

    position: fixed;
    left: 0;
    bottom: 0;
    
    background: #C3CFD9;
`;

const Moldura = styled.div`
    width: 64px;
    height: 89px;

    margin-right: 15px;
    padding: 8px;

    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
`;

const Texto = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 30px;

    color: #293845;
`