import imgOpcion1 from "../imgs/opcion1.webp";
import imgOpcion2 from "../imgs/opcion2.webp";
import imgOpcion3 from "../imgs/opcion3.webp";

type Options = {
    id: number,
    title: string,
    subtitle:string,
    data: string,
    img: string
}

export const options: Options[] = [
    {
        id: 1,
        title: "Sistema off grid",
        subtitle: "Energía 100% autónoma",
        data: "Sistema aislado que genera electricidad de manera autónoma, sin conexión a red pública.",
        img: imgOpcion1
    },{
        id: 2,
        title: "Sistema on grid",
        subtitle: "Energía dependiente",
        data: "Sistema que genera electricidad en paralelo con la red pública.",
        img: imgOpcion2
    },{
        id: 3,
        title: "Sistema híbrido",
        subtitle: "La mejor combinación de energía",
        data: "Combina la conexión a la red eléctrica tradicional con el almacenamiento en baterías, utilizando un inversor híbrido inteligente.",
        img: imgOpcion3
    }   
]