import React from 'react';
import styled from 'styled-components';
import {SCORES} from '../constants';
import '../App.css';

const StyledToken = styled.div`
    background: #E3CFAA;
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
`;

const StyledTop = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledBot = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: flex-end;
    > span {
        margin-right: 5%;
    }
`


export const Token = ({char}) => {
    return (
        <StyledToken>
            <StyledTop>
                <span>
                    {char}
                </span>
            </StyledTop>
            <StyledBot>
                <span>
                    {SCORES[char]}
                </span>
            </StyledBot>
        </StyledToken>
    )
}