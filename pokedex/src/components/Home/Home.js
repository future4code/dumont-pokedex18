import React, { useContext } from "react";
import {ScreenContainer} from "./styled"
import GlobalStateContext from "../../global/GlobalStateContext";
import  CardPokemon from "./CardPokemon";

function Home() {
    const {states, setters} = useContext(GlobalStateContext)

    // useEffect(()=>{
    //     requests.getArrayPokemons()     
    // },[])
    const addToPokedex = (newItem) => {
        
        //adiciona os pokemons na POKEDEX através do estado global
        const index = states.pokemonHome.findIndex((i)=> i.name === newItem.name)
        let newPokedex = [...states.pokedex, newItem]
        setters.setPokedex(newPokedex)
    
        //alterações na HOME
        let newPokeHome = [...states.pokemonHome]
        newPokeHome.splice(index,1)
        setters.setPokemonHome(newPokeHome)

        alert(`${newItem.name} foi adicionado à pokedex`)
        console.log("adicionado na pokedex", states.pokemonHome)
    }
    

    return (
        <div>            
            <ScreenContainer>           
                {states.pokemonHome && states.pokemonHome.map((pokemons)=>{
                    return <CardPokemon addToPokedex={() => addToPokedex(pokemons)} url={pokemons.url}/>
                })}
            </ScreenContainer>
        </div>
    )
}
export default Home;
