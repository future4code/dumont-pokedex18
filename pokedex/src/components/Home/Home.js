import React from "react";
import {CardContainer, CardImage,ScreenContainer, ButtonContainer} from "./styled"
import {useHistory} from "react-router-dom"
import {goToDetails} from "../../routes/coordinator"

const Home = (props) => {
    const history = useHistory();
    return (
        <div>            
        <ScreenContainer>
            <CardContainer>
                <CardImage alt={"pokemon"} src={"https://tvebrasil.com.br/wp-content/uploads/2019/02/pikachu_hi_pokemon.jpg"}/>
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