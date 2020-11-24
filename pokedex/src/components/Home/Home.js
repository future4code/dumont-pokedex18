import React from "react";
import {CardContainer, CardImage,ScreenContainer, ButtonContainer} from "./styled"
import Header from "../Header/Header"

const Home = () => {
    return (
        <div>
            
        <ScreenContainer>
            <CardContainer>
                <CardImage alt={"pokemon"} src={"https://tvebrasil.com.br/wp-content/uploads/2019/02/pikachu_hi_pokemon.jpg"}/>
                <ButtonContainer>
                    <button>Adicionar à Pokedex</button>
                    <button>Ver detalhes</button>
                </ButtonContainer>
            </CardContainer>
        </ScreenContainer>
        </div>
    )
}
export default Home;