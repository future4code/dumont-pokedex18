import axios from "axios"
import React, {useState, useEffect} from "react"

export function useRequestData(props,undefined) {

    const [pokemonUrl, setPokemonUrl] = useState(undefined)
    
    useEffect(()=>{
        getPokemonData()     
    },[])

    const getPokemonData = () => {
        axios
        .get(props.url)
        .then((response)=>{
            // console.log("pokemons", response.data)
            setPokemonUrl(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    } 
    console.log("pokemons", pokemonUrl)
    return (
        {pokemonUrl}
  )
}

