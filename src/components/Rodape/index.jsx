import React from 'react';
import styled from 'styled-components';

export default function Rodape(props) {
    return (
        <Content>
            <Moldura>
                <img src={props.posterURL} alt={props.titulo} />
            </Moldura>
            <p>{props.titulo}</p>
        </Content>
    )
}

const Content = styled.header`
    width: 100%;
    height: 117px;

    position: fixed;
    left: 0;
    bottom: 0;
    
    background: #C3CFD9;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Moldura = styled.div`
    width: 64px;
    height: 89px;

    padding: 8px;

    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
`