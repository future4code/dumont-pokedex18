import React, {useState, useEffect} from "react"
import axios from "axios"

function CardPokemon (props) {
    const [url, setUrl] = useState({})

    useEffect(()=>{
        getPokemon()     
    },[])

    const getPokemon = () => {
        axios
        .get(props.urls)
        .then((response)=>{
            console.log("pokemons", response.data.results.sprites.front_default)
            setUrl(response.data.results.sprites.front_default)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    
    return(
        <div>
            {getPokemon()}
        </div>
    )
}

export default CardPokemon;