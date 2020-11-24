import styled from "styled-components"

export const HeaderMainDiv = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    height: 8vh;
    background-color: #30A7D7;
`

export const GoToPokedexButton = styled.button`
    height: 20px;
    margin-left: 10px;

    &:hover{
        cursor: pointer;
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
