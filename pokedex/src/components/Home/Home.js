import React, { useContext, useEffect } from "react";
import {CardContainer, CardImage,ScreenContainer, ButtonContainer} from "./styled"
import {useHistory} from "react-router-dom"
import {goToDetails} from "../../routes/coordinator"
import GlobalStateContext from "../../global/GlobalStateContext";
import  CardPokemon from "./CardPokemon";

const Home = () => {
    const {states, requests} = useContext(GlobalStateContext)
    const history = useHistory();

    useEffect(()=>{
        requests.getPokemons()     
    },[])

    return (
        <div>            
        <ScreenContainer>
            <CardContainer>
                {/* {states.pokemons && 
                    states.pokemons.map((pokemons)=>{
                        return <img
                            urls={pokemons.url}
                            
                        />
                })}
                 */}
                 {/* <img src={data.results.sprites.front_default}/> */}
                 {states.pokemonList && states.pokemonList.map((item) => {
                     return 
                 })}
                <ButtonContainer>
                    <button>Adicionar à Pokedex</button>
                    <button onClick={()=>goToDetails(history)}>Ver detalhes</button>
                </ButtonContainer>
            </CardContainer>
        </ScreenContainer>
        </div>
    )
}
export default Home;