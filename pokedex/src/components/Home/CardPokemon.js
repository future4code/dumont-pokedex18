import React, {useContext} from "react"
import {CardImage, ButtonContainer, CardContainer} from "./styled"
import {goToDetails} from "../../routes/coordinator"
import GlobalStateContext from "../../global/GlobalStateContext";
import {useRequestData} from "../../hooks/useRequestData"
import { useHistory } from "react-router-dom"

function CardPokemon (props) {
    const history = useHistory()
    const pokemon = useRequestData(props.url, undefined)
    const { states, setters, requests } = useContext(GlobalStateContext);

    const addToPokedex = (NewItem) => {

        //adiciona os pokemons na POKEDEX através do estado global
        const index = states.pokemonHome && states.pokemonHome.findIndex((i)=> i.name === NewItem.name)
        let newPokedex = [...states.pokedex, NewItem]
        setters.setPokedex(newPokedex)

        //alterações na HOME
        let newPokeHome = [...states.pokemonHome]
        newPokeHome.splice(index,1)
        setters.setPokemonHome(newPokeHome)

        alert(`Adicionado à pokedex`)
        console.log("adicionado na pokedex", states.pokemonHome)
    }
    

    return(
        <div>
            {pokemon ? states.pokemonHome && states.pokemonHome.map((item)=>{
                return (
                    <CardContainer>
                        <CardImage src={pokemon.sprites.front_default}/>
                            <div>
                                <h4>{pokemon.name}</h4>
                                <ButtonContainer>
                                    <button onClick={()=>addToPokedex(item)}>Adicionar à Pokedex</button>
                                    <button onClick={()=>goToDetails(history)}>Ver detalhes</button>
                                </ButtonContainer>
                            </div>
                    </CardContainer> 
                )
            })            
        : <div></div>
        }

        </div>
    )
}

export default CardPokemon;
