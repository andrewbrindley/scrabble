import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const StyledTile = styled.div`
    background: grey;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
`;

export const Tile = () => {
    return <StyledTile/>
}