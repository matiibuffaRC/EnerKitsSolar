import bateria from "../imgs/productsAndSystems/bateria.webp";
import bateria2 from "../imgs/productsAndSystems/bateria2.webp";
import bateria3 from "../imgs/productsAndSystems/bateria3.webp";

import cables from "../imgs/productsAndSystems/cables.webp";
import cables2 from "../imgs/productsAndSystems/cables2.webp";
import cables3 from "../imgs/productsAndSystems/cables3.webp";

import conectores from "../imgs/productsAndSystems/conectores.webp";
import conectores2 from "../imgs/productsAndSystems/conectores2.webp";
import conectores3 from "../imgs/productsAndSystems/conectores3.webp";

import hibridSystem from "../imgs/productsAndSystems/HibridSystem.webp";
import offGridSystem from "../imgs/productsAndSystems/offGridSystem.webp";
import onGridSystem from "../imgs/productsAndSystems/onGridSystem.webp";

import panelChico from "../imgs/productsAndSystems/panelChico.webp";
import panelesGrandes from "../imgs/productsAndSystems/panelesGrandes.webp";
import panelesSimples from "../imgs/productsAndSystems/panelesSimples.webp";

type ProductsAndSystems = {
    id: number,
    image:string,
    name: string,
    category: string,
    price: string
}

export const productsData:ProductsAndSystems[] = [
    { id: 1, image: bateria, name: "Bateria simple", category: "Baterías", price: "509.300" },
    { id: 2, image: bateria2, name: "Bateria UF5000", category: "Baterías", price: "649.999" },
    { id: 3, image: bateria3, name: "Bateria UnionBAT", category: "Baterías", price: "2.500.000" },

    { id: 4, image: cables, name: "Cables x3mtrs", category: "Cables", price: "9.400" },
    { id: 5, image: cables2, name: "Cables x5mtrs", category: "Cables", price: "10.500" },
    { id: 6, image: cables3, name: "Cables x20mtrs con conectores", category: "Cables", price: "11.000" },

    { id: 7, image: conectores, name: "Conectores simples", category: "Conectores", price: "10.600" },
    { id: 8, image: conectores2, name: "Conectores duplex", category: "Conectores", price: "8.500" },
    { id: 9, image: conectores3, name: "Conectores duplex", category: "Conectores", price: "7.000" },

    { id: 10, image: hibridSystem, name: "Pack Hibrid System", category: "Sistemas", price: "4300000"},
    { id: 11, image: offGridSystem, name: "Pack Off Grid System", category: "Sistemas", price: "5.150.000"},
    { id: 12, image: onGridSystem, name: "Pack On Grid System", category: "Sistemas", price: "3.420.500" },

    { id: 13, image: panelChico, name: "Panel simple", category: "Paneles", price: "150.000" },
    { id: 14, image: panelesGrandes, name: "Paneles 4 unidades", category: "Paneles", price: "700.000" },
    { id: 15, image: panelesSimples, name: "Paneles dobles", category: "Paneles", price: "380.300" }
];