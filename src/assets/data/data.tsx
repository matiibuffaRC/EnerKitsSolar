import moneyIcon from '../icons/money.png';
import calificationIcon from '../icons/star.png';
import shieldIcon from '../icons/antibody.png';

type Qualification = {
    id: number;
    icon: string;
    text: string;
}

export const qualifications: Qualification[] = [
    {
        id: 1,
        icon: moneyIcon,
        text: "Recuperas tu inversión rápidamente",
    },{
        id: 2,
        icon: calificationIcon,
        text: "Equipos con más de 25 años de vida útil"
    },{
        id: 3,
        icon: shieldIcon,
        text: "Garatías para todos nuestro equipos"
    }
]