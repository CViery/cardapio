import React, { useState } from "react";
import { ButtonContainer, Buttons, ContainerImg, ContainerOption, ImgProduct, OptionItem, OptionsList, ProductCard, Title } from "./styled";

export const Products = ({ produto }) => {
    const [showOptions, setShowOptions] = useState(false);
  
    const handleOptionsToggle = () => {
      setShowOptions(!showOptions);
    };
    const whatsApp = "https://api.whatsapp.com/send?phone=5574999376361&text=Olá, Gostaria de fazer meu pedido"
  
    return (
      <ProductCard>
        <Title>{produto.item}</Title>
        <ContainerImg>
          <ImgProduct src={produto.img} alt="" />
        </ContainerImg>
        <ButtonContainer>
          <ContainerOption>
            <Buttons onClick={handleOptionsToggle}>Opções</Buttons>
            {showOptions && (
              <OptionsList>
                {produto.opcoes.map((opcao, index) => (
                  <OptionItem key={index}>
                    {opcao} - {produto.preco[index]}
                  </OptionItem>
                ))}
                  <a href={whatsApp}><Buttons>Fazer pedido</Buttons></a>
              </OptionsList>
            )}
          </ContainerOption>
          
        </ButtonContainer>
      </ProductCard>
    );
  };