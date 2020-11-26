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
    },[]) //sem isso tb funcionou. Não sei pq

    //faz requisição da url
    const getPokemonData = () => {
        axios
        .get(props.url)
        .then((response)=>{
            setPokemonUrl(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const addToPokedex = () => {
        console.log("adicionou na pokedex",pokemonUrl.sprites.front_default, pokemonUrl.name)
        
    }

    return(
        <div>
            {pokemonUrl && 
            <CardContainer>
                <CardImage src={pokemonUrl.sprites.front_default}/>
                    <div>
                        <h4>{pokemonUrl.name}</h4>
                        <ButtonContainer>
                            <button onClick={addToPokedex}>Adicionar à Pokedex</button>
                            <button onClick={()=>goToDetails(history)}>Ver detalhes</button>
                        </ButtonContainer>
                    </div>
            </CardContainer> }
        </div>
    )
}

export default CardPokemon;
