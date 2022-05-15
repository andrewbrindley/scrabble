import React, {useEffect, useState} from 'react';
import {Tile} from './Tile';
import styled from 'styled-components';

const HALF = [
    ['3W', '', '', '2L', '', '', '', '3W', '', '', '', '2L', '', '', '3W'],
    ['', '2W', '', '', '', '3L', '', '', '', '3L', '', '', '', '2W', ''],
    ['', '', '2W', '', '', '', '2L', '', '2L', '', '', '', '2W', '', ''],
    ['2L', '', '', '2W', '', '', '', '2L', '', '', '', '2W', '', '', '2L'],
    ['', '', '', '', '2W', '', '', '', '', '', '2W', '', '', '', ''],
    ['', '3L', '', '', '', '3L', '', '', '', '3L', '', '', '', '3L', ''],
    ['', '', '2L', '', '', '', '2L', '', '2L', '', '', '', '2L', '', '']
];

const STAR = ['3W', '', '', '', '', '', '', 'STAR', '', '', '', '', '', '', '3W'];

const BOARD = [...HALF, [...STAR], ...[...HALF].reverse()];


const StyledBoard = styled.div`
    width: 40%;
    height: 75%;
    background: yellow;
    display: grid;
    grid-template-rows: repeat(15, 1fr);
    grid-template-columns: repeat(15, 1fr);
    border: 1px solid black;
`;

export const Board = () => {
    return (
        <StyledBoard>
            {BOARD.map(row => row.map(el => <Tile el={el}/>))}
        </StyledBoard>
    )
}