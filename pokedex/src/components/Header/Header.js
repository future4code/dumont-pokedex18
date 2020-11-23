import React from "react"
import styled from "styled-components"

const HeaderMainDiv = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    height: 8vh;
    background-color: #30A7D7;
`

const GoToPokedexButton = styled.button`
    height: 20px;
    margin-left: 10px;

    &:hover{
        cursor: pointer;
    }

`

const PokedexTitle = styled.p`
    display: flex;
    left: 46%;
    color: white;
    font-weight: 700;
    font-size: 30px;
    position: absolute;
`


const Header = () => {
    return(
        <HeaderMainDiv>
            <GoToPokedexButton>Ir para a Pokedex</GoToPokedexButton>
            <PokedexTitle>POKEDEX</PokedexTitle>
        </HeaderMainDiv>
    )
}

export default Header