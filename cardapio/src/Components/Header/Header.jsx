import React from "react";
import { ContainerHeader, Logo } from "./styled";
import logo from "./logo.png"
export const Header = () =>{

    return(
        <ContainerHeader>
            <Logo src={logo}/>
            <h2>Cardápio Oba Delicia!</h2>
        </ContainerHeader>
    )
}