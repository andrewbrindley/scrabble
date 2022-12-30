import React, {useEffect, useState} from 'react';
import {PlayerTokens} from './PlayerTokens'
import {Board} from './Board';
import styled from 'styled-components';
import { generateTokens } from '../game';
import '../App.css';

const StyledScreen = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


const App = () => {

    const [allTokens, setAllTokens] = useState(generateTokens());
    const [tokens, setTokens] = useState(allTokens.slice(0, 7));



    return (
        <StyledScreen>
            <Board/>
            <PlayerTokens tokens = {tokens}/>
        </StyledScreen>
    )
}

export default App;