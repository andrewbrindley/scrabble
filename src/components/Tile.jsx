import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const StyledTile = styled.div`
    background: grey;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #E0E0B0;
    border: 1px solid white;
`;

export const Tile = ({el}) => {
    return (
        <StyledTile>
            <span>
                {el}
            </span>
        </StyledTile>
    )
}