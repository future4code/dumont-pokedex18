import React, { useContext, useEffect } from "react";
import {ScreenContainer} from "./styled"
import GlobalStateContext from "../../global/GlobalStateContext";
import  CardPokemon from "../Home/CardPokemon";

function PokedexPage() {
    const {states, setters, requests} = useContext(GlobalStateContext)
    // const pokemon = useRequestData(props.url, undefined)
    // const history = useHistory()    

    return (
        <div>            
            <ScreenContainer>           
                {states.pokedex && states.pokedex.map((pokemons)=>{
                    return <CardPokemon url={pokemons.url}/>
                })}
            </ScreenContainer>
        </div>
    )

}

export default PokedexPage;

