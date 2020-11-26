import React, {useState, useEffect} from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import {CardImage, ButtonContainer, CardContainer} from "./styled"
import {goToDetails} from "../../routes/coordinator"

function CardPokemon (props) {
    
    const history = useHistory()    
    // const pokemon = useRequestData(props.url, undefined)

    const [pokemonUrl, setPokemonUrl] = useState(undefined)

    useEffect(()=>{
        getPokemonData()     
    },[])

    const getPokemonData = () => {
        axios
        .get(props.url)
        .then((response)=>{
            console.log("pokemons", response.data)
            setPokemonUrl(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    
    return(
        <div>
            {pokemonUrl && 
            <CardContainer>
                <CardImage src={pokemonUrl.sprites.front_default}/>
                    <div>
                        <p>{pokemonUrl.name}</p>
                        <ButtonContainer>
                            <button>Adicionar à Pokedex</button>
                            <button onClick={()=>goToDetails(history)}>Ver detalhes</button>
                        </ButtonContainer>
                    </div>
            </CardContainer> }
        </div>
    )
}

export default CardPokemon;
