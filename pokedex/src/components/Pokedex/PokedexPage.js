import React from "react";
import {CardContainer, CardImage,ScreenContainer, ButtonContainer} from "./styled"
import {goToDetails} from "../../routes/coordinator"
import { useHistory } from "react-router-dom"

function PokedexPage() {
    const history = useHistory()    

    return (
        <div>            
            <ScreenContainer>     
                <CardContainer>
                    <CardImage
                    src="https://picsum.photos/300/200" alt=""
                    />
                    <ButtonContainer>
                            <button>Remover da Pokedex</button>
                            <button onClick={()=>goToDetails(history)}>Ver detalhes</button>
                    </ButtonContainer>
                </CardContainer>     
            </ScreenContainer>
        </div>
    )
}
export default PokedexPage;