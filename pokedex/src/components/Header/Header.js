import React from "react"
import {HeaderMainDiv, GoToPokedexButton, PokedexTitle} from "./styled"
import {goToHome, goToPokedex} from "../../routes/coordinator"
import {useHistory} from "react-router-dom"

const Header = (props) => {
    const history = useHistory();
    const changeButton = props.rightButtonHeader ? <button onClick={()=>props.rightButtonHeader(history)}>name</button> : <div></div>

    return(
        <HeaderMainDiv>
            <GoToPokedexButton onClick={()=>props.leftButtonHeader(history)}>Ir para a Pokedex</GoToPokedexButton>
            {changeButton}
            <PokedexTitle>POKEDEX</PokedexTitle>
        </HeaderMainDiv>
    )
}

export default Header