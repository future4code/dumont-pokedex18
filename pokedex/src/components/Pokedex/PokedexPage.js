import React, { useContext, useEffect } from "react";
import {ScreenContainer} from "./styled"
import GlobalStateContext from "../../global/GlobalStateContext";
import  CardPokemon from "../Home/CardPokemon";

function PokedexPage() {
    const {states, setters, requests} = useContext(GlobalStateContext)
    // const pokemon = useRequestData(props.url, undefined)
    // const history = useHistory()    

    let removePokemon = (removePokemon) => {
        const index = states.pokedex.findIndex((item) => item.name === removePokemon.name)
        let cleanPokedex = [...states.pokedex]
        cleanPokedex.splice(index,1)
        setters.setPokedex(cleanPokedex)

        let newPokedexList = [...states.pokedex]
        newPokedexList.push({...removePokemon, inPokedex:false})
        setters.setPokedex(newPokedexList)
    }

    const pokedexPage = states.pokedex.map((pokemons) => {
        return <CardPokemon removePokemon={() => removePokemon(pokemons)} url={pokemons.url}/>
    })

    return (
        <div>            
            <ScreenContainer>           
                {pokedexPage}
            </ScreenContainer>
        </div>
    )

}

export default PokedexPage;

