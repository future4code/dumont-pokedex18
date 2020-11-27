import styled from "styled-components"

export const ScreenContainer = styled.div`
  display: flex; 
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #bbdefb;
`

export const CardContainer = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: center;
  height: 300px;
  width: 200px;
  margin: 60px;
  background-color: #64b5f6;
  border-radius: 10px;
`

export const PokemonNameAndButtons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2px;
`

export const PokemonName = styled.p`
  font-weight: 500;
  font-family: cursive;
`

export const AddToPokedexButton = styled.button`
  display: flex;
  width: 45%;
  height: 90%;
  background-color: #62d5b4;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;

  &:hover{
    background-color: #30A7D7;
    cursor: pointer;
  }

  &:active{
    background-color: #de5239;
  }
`

export const GoToDetailsButton = styled.button`
  display: flex;
  width: 45%;
  height: 90%;
  background-color: #f6bd20;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;

  &:hover{
    background-color: #30A7D7;
    cursor: pointer;
  }

  &:active{
    background-color: #e67383;
  }
  
`

export const CardImage = styled.img`
  width: 100%;
  height: 250px;
  `

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 40px;
  width: 200px;
`


