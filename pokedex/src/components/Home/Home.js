import React, { useContext, useEffect } from "react";
import {CardContainer, CardImage,ScreenContainer, ButtonContainer} from "./styled"
import {useHistory} from "react-router-dom"
import {goToDetails} from "../../routes/coordinator"
import GlobalStateContext from "../../global/GlobalStateContext";
import  CardPokemon from "./CardPokemon";

function Home() {
    const {states, requests} = useContext(GlobalStateContext)
    // const history = useHistory();

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

