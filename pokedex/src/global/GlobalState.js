import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
    const [pokemonList, setPokemonList] = useState([])
    const [pokedex, setPokedex] = useState([])

    // useEffect(()=>{
    //     getArrayPokemons()     
    // },[])

//requisição de API
const getPokemons = () => {

    // const listPokemon = [];

    // for (let i = 1; i<20; i++) {

        axios
        .get(`${BASE_URL}`)
        .then((response)=>{
            // console.log("SPRITES",response)
            // listPokemon[i - 1] = response.data

            // console.log(listPokemon.length)
            // if (listPokemon.length === 19) {
            //     setPokemon(listPokemon)
            // }
            setPokemonList(response.data.results)
        })
        .catch((error)=>{
            console.log(error)
        })
    // }    
}

const states = {pokemonList, pokedex}
const setters = {setPokemonList, setPokedex}
const requests = {getPokemons}

const data = {states, setters, requests}

return (
    <div>
        {/* {console.log("TESTE",requests)} */}
        <GlobalStateContext.Provider value={data}>
            {props.children}   
            {/* {getArrayPokemons}   
            {console.log("return do globalState", pokemon)}   */}
        </GlobalStateContext.Provider>
    </div>
    
    )
}

export default GlobalState