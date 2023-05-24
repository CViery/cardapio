import React from "react";
import { Products } from "../products/Products";
import { CardapioName, ContainerMain, Produtos } from "./styled";
import marmita from "./img/marmita.png"
import pf from "./img/pf.png"
import comercialimg from "./img/comercial.jpg"

export const Main = ()=>{
    const opcoes = [
        {
            nome:"Carne de Sol",
            precoM: "R$ 19,00",
            precoP: "R$ 19,00",
            precoC: "R$ 22,00",
        },
        {
            nome:"File de Frango",
            precoM: "R$ 17,00",
            precoP: "R$ 17,00",
            precoC: "R$ 20,00",
        },
        {
            nome:"Frango Cozido",
            precoM: "R$ 17,00",
            precoP: "R$ 17,00",
            precoC: "R$ 20,00",
        },
        {
            nome:"Misto Carne e Frango",
            precoM: "R$ 18,00",
            precoP: "R$ 18,00",
            precoC: "R$ 21,00",
        },
        {
            nome:"Misto Carne de sol e Carne Cozida",
            precoM: "R$ 20,00",
            precoP: "R$ 20,00",
            precoC: "R$ 23,00",
        }
    ]

    const marmitas = {
        img: marmita,
        item: "Marmita",
        opcoes:[opcoes[0].nome, opcoes[1].nome, opcoes[2].nome,opcoes[3].nome,opcoes[4].nome],
        preco:[opcoes[0].precoM,opcoes[1].precoM,opcoes[2].precoM,opcoes[3].precoM,opcoes[4].precoM]
    }
    const pratoFeito = {
        img: pf,
        item: "PF",
        opcoes:[opcoes[0].nome, opcoes[1].nome, opcoes[2].nome,opcoes[3].nome,opcoes[4].nome],
        preco:[opcoes[0].precoP,opcoes[1].precoP,opcoes[2].precoP,opcoes[3].precoP,opcoes[4].precoP]
    }
    const comercial = {
        img: comercialimg,
        item: "Comercial",
        opcoes:[opcoes[0].nome, opcoes[1].nome, opcoes[2].nome,opcoes[3].nome,opcoes[4].nome],
        preco:[opcoes[0].precoC,opcoes[1].precoC,opcoes[2].precoC,opcoes[3].precoC,opcoes[4].precoC]
    }
    return(
        <ContainerMain>
            <CardapioName>Cardápio</CardapioName>
            <Produtos>
                <Products produto={marmitas}/>
                <Products produto={pratoFeito}/>
                <Products produto={comercial}/>
            </Produtos>
            
        </ContainerMain>
    )
}