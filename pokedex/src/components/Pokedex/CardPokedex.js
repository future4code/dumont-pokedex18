import React from "react"
import {CardImage, ButtonContainer, CardContainer} from "./styled"
import {useRequestData} from "../../hooks/useRequestData"
import { useHistory } from "react-router-dom"

function CardPokemon (props) {
    const history = useHistory()
    const pokemon = useRequestData(props.url, undefined)

    
const goToDetails = (id, name) => {
    history.push(`/Details/${id}/${name}`)
}

    return(
        <div>
            {pokemon && 
                    <CardContainer>
                        <CardImage src={pokemon.sprites.front_default}/>
                            <div>
                                <h4>{pokemon.name}</h4>
                                <ButtonContainer>
                                    <button onClick={props.removePokemon}>Remover da Pokedex</button>
                                    <button onClick={() => goToDetails(pokemon.id, pokemon.name)}>Ver detalhes</button>
                                </ButtonContainer>
                            </div>
                    </CardContainer> 
                }
        </div>
    )
}

export default CardPokemon;
