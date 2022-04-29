import React, {useEffect, useState} from 'react';
import {Board} from './Board';
import styled from 'styled-components';
import '../App.css';

const StyledScreen = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid blue;
`


const App = () => {
    return (
        <StyledScreen>
            <Board/>
        </StyledScreen>
    )
}

export default App;