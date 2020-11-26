import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
    const [pokemonHome, setPokemonHome] = useState([])
    const [pokedex, setPokedex] = useState([])

    useEffect(()=>{
        getArrayPokemons()     
    },[])

//requisição de API
const getArrayPokemons = () => {

        axios
        .get(`${BASE_URL}`)
        .then((response)=>{
            setPokemonHome(response.data.results)
          
        })
        .catch((error)=>{
            console.log(error)
        })  
}

const states = {pokemonHome, pokedex }
const setters = {setPokemonHome, setPokedex}
const requests = {getArrayPokemons}

const data = {states, setters, requests}

return (
    <div>
        <GlobalStateContext.Provider value={data}>
            {props.children}   
        </GlobalStateContext.Provider>
    </div>
    
    )
}

export default GlobalState
