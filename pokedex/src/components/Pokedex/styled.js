import styled from "styled-components"

export const ScreenContainer = styled.div`
  display: flex; 
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CardContainer = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: center;
  height: 300px;
  width: 200px;
  background-color: whitesmoke;   
  margin: 60px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 250px;
  `;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 10px;
  width: 180px;
`;


