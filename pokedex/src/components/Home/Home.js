import React from "react";
import {CardContainer, CardImage,ScreenContainer } from "./styled"

const Home = () => {
    return (
        <ScreenContainer>
            <CardContainer>
                <CardImage alt={"pokemon"} src={"https://tvebrasil.com.br/wp-content/uploads/2019/02/pikachu_hi_pokemon.jpg"}/>
                <button>Adicionar à Pokedex</button>
                <button>Ver detalhes</button>
            </CardContainer>
        </ScreenContainer>
    )
}
export default Home;