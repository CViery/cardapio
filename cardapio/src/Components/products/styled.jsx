import styled from "styled-components";

export const ContainerOption = styled.div`
    display: flex;
  flex-direction: column;
  align-items: flex-start;
    margin: 25px;
`
export const ContainerImg = styled.div`
    height: 15vh;

`
export const ImgProduct = styled.img`
    width: 150px;
`

export const ButtonContainer = styled.div`
   /*  display: flex;
    gap: 25px;
    align-items: center;
    justify-content: center; */
`
export const Buttons = styled.button`
    border: none;
    background-image: linear-gradient(135deg, #192e2d 0, #162322 16.67%, #0f1716 33.33%, #000000 50%, #000000 66.67%, #000000 83.33%, #000000 100%);
    color: white;
    width: 100px;
    height: 35px;
    border-radius: 20px;
    :hover{
        background-color: aquamarine;
    }
`


export const ProductCard = styled.div`
  display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 12px;
    width: 75vw;
    height: auto;
    text-align: center;
    align-items: center;
    padding-top: 20px;
`;

export const Title = styled.h3`
  color:black;
  font-weight: bolder;
  font-size: 30px;
`;

export const OptionsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap:5px;
  align-items: center;
  border-radius: 20px;
  padding-top: 10px;
  width: auto;
`;

export const OptionItem = styled.li`
  /* Estilos do item de opção */
`;
