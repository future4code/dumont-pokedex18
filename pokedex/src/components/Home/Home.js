import React, { useContext, useEffect } from "react";
import {ScreenContainer} from "./styled"
import GlobalStateContext from "../../global/GlobalStateContext";
import  CardPokemon from "./CardPokemon";

function Home() {
    const {states, requests} = useContext(GlobalStateContext)

    useEffect(()=>{
        requests.getArrayPokemons()     
    },[])

    return (
        <div>            
            <ScreenContainer>           
                {states.pokemonHome && states.pokemonHome.map((pokemons)=>{
                    return <CardPokemon url={pokemons.url}/>
                })}
            </ScreenContainer>
        </div>
    )
}
export default Home;
