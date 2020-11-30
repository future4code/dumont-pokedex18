import styled from "styled-components"

export const MainDiv = styled.div`
    display: flex;
    height: 92vh;
    width: 100vw;
    position: relative;
`

export const ImagesDiv = styled.div`
    display: flex;
    position: absolute;
    height: 85vh;
    left: 250px;
    bottom: 50px;
    flex-direction: column;
    justify-content: space-evenly;
`

export const PokemonImgDiv = styled.div`
    display: flex;
    height: 20vh;
    width: 20vh;
`

export const PokemonInfosDiv = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    background-color: #F1F1F1;
    height: 57vh;
    width: 20vw;
    left: 450px;
    bottom: 130px;
`

export const InfoTitleDiv = styled.div`
    display: flex;
    width: 100%;
    height: 10%;
    justify-content: center;
    align-items: center;
    background-color: #F1F1F1;
`

export const AdditionalInfosDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F1F1F1;
    position: absolute;
    height: 45vh;
    width: 20vw;
    right: 300px;
    bottom: 130px;
`

export const PokemonTypeDiv = styled.div`
    display: flex;
    position: absolute;
    background-color: #F1F1F1;
    justify-content: space-evenly;
    width: 20vw;
    height: 6vh;
    right: 300px;
    top: 90px;
`


