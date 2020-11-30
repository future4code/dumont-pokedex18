import axios from "axios"
import React, {useState, useEffect} from "react"

export function useRequestData(url,initialState) {
   

    const [data, setData] = useState(initialState)
    
    useEffect(()=>{
        getPokemonData()     
    },[url])

    const getPokemonData = () => {
        axios
        .get(url)
        .then((response)=>{
            // console.log("pokemons", response.data)
            setData(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    } 
    return data
}

