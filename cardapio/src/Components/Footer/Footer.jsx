import React from "react";
import { ContainerFooter, Criador, LogoFooter } from "./styled";
import logo from "../Header/logo.png"

export const Footer = () =>{

    return(
        <ContainerFooter>
            <LogoFooter src={logo}/>
            <Criador>Avenida Planalto 1416, Salobro, Bahia</Criador>
            <Criador>Criado por CristianViery 2023</Criador>
        </ContainerFooter>
    )
}