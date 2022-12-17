import React from 'react';
import {Token} from './Token';
import styled from 'styled-components';
import '../App.css';

const StyledTokens = styled.div`
    width: 21%;
    height: 7%;
    margin-top: 5%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`


export const PlayerTokens = ({tokens}) => {
    return (
        <StyledTokens>
            {tokens.map(t => <Token char = {t}/>)}
        </StyledTokens>
    )
}