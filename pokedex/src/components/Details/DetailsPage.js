import React from "react";
import { MainDiv, ImagesDiv, PokemonImgDiv, PokemonInfosDiv, InfoTitleDiv, AdditionalInfosDiv, PokemonTypeDiv } from "./styled"

const DetailsPage = () => {
    return (
        <MainDiv>
            <ImagesDiv>
                <PokemonImgDiv>
                    <img src="https://picsum.photos/id/237/125/50" />
                </PokemonImgDiv>
                <PokemonImgDiv>
                    <img src="https://picsum.photos/id/237/125/50" />
                </PokemonImgDiv>
            </ImagesDiv>
            <PokemonInfosDiv>
                <InfoTitleDiv>
                    <h3>Poderes</h3>
                </InfoTitleDiv>
                <p><strong>hp: </strong>80</p>
                <p><strong>attack: </strong>82</p>
                <p><strong>defense: </strong>83</p>
                <p><strong>special-attack: </strong>100</p>
                <p><strong>special-defense: </strong>100</p>
                <p><strong>speed: </strong>80</p>
            </PokemonInfosDiv>
            <AdditionalInfosDiv>
                <InfoTitleDiv>
                    <h3>Principais Ataques</h3>
                </InfoTitleDiv>
                <p>swords-dance</p>
                <p>cut</p>
                <p>blind</p>
                <p>vine-whip</p>
                <p>headbutt</p>
            </AdditionalInfosDiv>
            <PokemonTypeDiv>
                <p>grass</p>
                <p>poison</p>
            </PokemonTypeDiv>
        </MainDiv>
    )
}

export default DetailsPage;