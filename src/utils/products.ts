import { Product } from "./types";

import pepperoniImg from '@/assets/pepperoni.png';
import spaghettiImg from '@/assets/spaghetti.png';
import BiggerImg from '@/assets/bigger.png';
import savoyardeImg from '@/assets/savoyarde.png';
import rigatoniImg from '@/assets/rigatoni.png';
import saladeImg from '@/assets/salade.png';
import dessertImg from '@/assets/dessert.png';
import ragoutImg from '@/assets/ragout.png';
import tripleImg from '@/assets/triple.png';
import donutsImg from '@/assets/donuts.png';

const products: Array<Product> = [
    {
        label: "Pizza au pepperoni",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
        Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\
        ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, ",
        img: `${pepperoniImg}`,
        price: 19.99,
        score: 5,
        isNew: false
    },
    {
        label: "Spaghetti Bolognaise",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
        Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\
        ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, ",
        img: `${spaghettiImg}`,
        price: 14.24,
        score: 3,
        isNew: true
    },
    {
        label: "Bigger Mac",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
        Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\
        ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, ",
        img: `${BiggerImg}`,
        price: 18.54,
        score: 6,
        isNew: true
    },
    {
        label: "Pizza savoyarde",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
        Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\
        ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, ",
        img: `${savoyardeImg}`,
        price: 17.89,
        score: 4,
        isNew: false
    },
    {
        label: "Rigatoni au basilic",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
        Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\
        ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, ",
        img: `${rigatoniImg}`,
        price: 12.05,
        score: 3,
        isNew: false
    },
    {
        label: "Salade Sauveur",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
        Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\
        ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, ",
        img: `${saladeImg}`,
        price: 10.79,
        score: 2,
        isNew: false
    },
    {
        label: "Dessert collection",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
        Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\
        ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, ",
        img: `${dessertImg}`,
        price: 28.34,
        score: 6,
        isNew: false
    },
    {
        label: "Ragout à la réunionaise",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
        Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\
        ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, ",
        img: `${ragoutImg}`,
        price: 3.18,
        score: 1,
        isNew: true
    },
    {
        label: "Triple mix collection",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
        Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\
        ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, ",
        img: `${tripleImg}`,
        price: 27.35,
        score: 4,
        isNew: false
    },
    {
        label: "Nuages de Donuts",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
        Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\
        ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, ",
        img: `${donutsImg}`,
        price: 17.15,
        score: 6,
        isNew: true
    },

];

export default products;