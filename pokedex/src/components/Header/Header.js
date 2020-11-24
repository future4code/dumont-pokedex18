import React from "react"
import {HeaderMainDiv, GoToPokedexButton, PokedexTitle} from "./styled"

const Header = () => {
    return(
        <HeaderMainDiv>
            <GoToPokedexButton>Ir para a Pokedex</GoToPokedexButton>
            <PokedexTitle>POKEDEX</PokedexTitle>
        </HeaderMainDiv>
    )
}

export default Header