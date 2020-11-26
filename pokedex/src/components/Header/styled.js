import styled from "styled-components"

export const HeaderMainDiv = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    height: 8vh;
    background-color: #30A7D7;
`

export const LeftButtonHeader = styled.button`
    margin-left: 10px;
    width: 8%;
    height: 70%;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    background-color: #004ba0;
    color: white;

    &:hover{
        cursor: pointer;
        background-color: #4dd0e1;
        color: black;
    }

`

export const RightButtonHeader = styled.button`
    display: flex;
    position: absolute;
    right: 1%;
    width: 8%;
    height: 70%;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    background-color: #004ba0;
    color: white;
    
    &:hover{
        cursor: pointer;
        background-color: #4dd0e1;
        color: black;
    }

`

export const PokedexTitle = styled.p`
    display: flex;
    left: 46%;
    color: white;
    font-weight: 700;
    font-size: 30px;
    position: absolute;
`
