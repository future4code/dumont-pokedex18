import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
    const [pokemonHome, setPokemonHome] = useState([])

    useEffect(()=>{
        getArrayPokemons()     
    },[])

//requisição de API
const getArrayPokemons = () => {

        axios
        .get(`${BASE_URL}`)
        .then((response)=>{
            console.log("Axios response",response)
            setPokemonHome(response.data.results)
          
        })
        .catch((error)=>{
            console.log(error)
        })  
}

const states = {pokemonHome}
const setters = {setPokemonHome}
const requests = {getArrayPokemons}

const data = {states, setters, requests}

return (
    <div>
        <GlobalStateContext.Provider value={data}>
            {props.children}   
            {console.log("return do globalState", pokemonHome)}  
        </GlobalStateContext.Provider>
    </div>
    
    )
}

export default GlobalState