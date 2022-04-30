import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import star from '../star.png';

const COLOURS = {
    '3L': '#000080',
    '3W': '#990000',
    '2L': '#ADD8E6',
    '2W': '#FFD580',

}

const StyledTile = styled.div`
    background: #D3D3D3;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${p => p.color};
    color: white;
    border: 1px solid white;
    > img{
        width: 100%;
        height: 100%;
    }
`;

export const Tile = ({el}) => {
    const color = el in COLOURS ? COLOURS[el] : '#D3D3D3'; 
    return (
        <StyledTile color = {color}>
            {el === 'STAR' ? <img src={star}/> : <span> {el} </span>}        
        </StyledTile>
    )
}