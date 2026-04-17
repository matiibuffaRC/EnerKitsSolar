// Importamos las imágenes necesarios

import img1 from "../../assets/imgs/card1Img.webp";
import img2 from "../../assets/imgs/card2Img.webp";
import card1 from "../../assets/imgs/card1.png";
import card2 from "../../assets/imgs/card2.webp";

type Options = {
    id: number,
    title: string,
    text: string,
    img: string,
    background:string,
    url: string
}

export const options: Options[] = [
    {
        id: 1,
        title: "Kits solares para tu hogar",
        text: "Energía real para tu casa y ahorro para vos.",
        img: img1,
        background: card1,
        url: "/products"
    },{
        id: 2,
        title: "Plantas fotovoltaicas",
        text: "Proyectos solares a gran escala, llave en mano.",
        img: img2,
        background: card2,
        url: "/products"
    }
]