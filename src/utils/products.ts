import { Product } from "./types";

import pepperoniImg from "@/assets/pepperoni.png";
import spaghettiImg from "@/assets/spaghetti.png";
import BroachImg from "@/assets/broach.png";
import BiggerImg from "@/assets/bigger.png";
import SavoyardeImg from "@/assets/savoyarde.png";
import PancakesImg from "@/assets/pancakes.png";
import RigatoniImg from "@/assets/rigatoni.png";
import SaladeImg from "@/assets/salade.png";
import DessertImg from "@/assets/dessert.png";
import RagoutImg from "@/assets/ragout.png";
import TripleImg from "@/assets/triple.png";
import DonutsImg from "@/assets/donuts.png";

const products: Array<Product> = [
  {
    id: 1,
    category: "main courses",
    label: "Pizza au pepperoni",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
        Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\
        ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, ",
    img: `${pepperoniImg}`,
    price: 19.99,
    score: 5,
    isNew: false,
    isPopular: true,
  },
  {
    id: 2,
    category: "main courses",
    label: "Spaghetti Bolognaise",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
        Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\
        ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, ",
    img: `${spaghettiImg}`,
    price: 14.24,
    score: 3,
    isNew: true,
    isPopular: true,
  },
  {
    id: 3,
    category: "main courses",
    label: "Brochettes de poulet mariné",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
        Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\
        ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, ",
    img: `${BroachImg}`,
    price: 12.77,
    score: 4,
    isNew: false,
    isPopular: true,
  },
  {
    id: 4,
    category: "main courses",
    label: "Bigger Mac",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
        Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\
        ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, ",
    img: `${BiggerImg}`,
    price: 18.54,
    score: 6,
    isNew: true,
    isPopular: true,
  },
  {
    id: 5,
    category: "main courses",
    label: "Pizza savoyarde",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
        Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\
        ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, ",
    img: `${SavoyardeImg}`,
    price: 17.89,
    score: 4,
    isNew: false,
    isPopular: true,
  },
  {
    id: 6,
    category: "deserts",
    label: "Pancakes aux fruits rouges",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
        Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\
        ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, ",
    img: `${PancakesImg}`,
    price: 12.24,
    score: 3,
    isNew: true,
    isPopular: true,
  },
  {
    id: 7,
    category: "main courses",
    label: "Rigatoni au basilic",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
        Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\
        ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, ",
    img: `${RigatoniImg}`,
    price: 12.05,
    score: 3,
    isNew: true,
    isPopular: true,
  },
  {
    id: 8,
    category: "starters",
    label: "Salade Sauveur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
        Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\
        ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, ",
    img: `${SaladeImg}`,
    price: 10.79,
    score: 2,
    isNew: false,
    isPopular: true,
  },
  {
    id: 9,
    category: "deserts",
    label: "Dessert collection",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
        Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\
        ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, ",
    img: `${DessertImg}`,
    price: 28.34,
    score: 6,
    isNew: false,
    isPopular: true,
  },
  {
    id: 10,
    category: "main courses",
    label: "Ragout à la réunionaise",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
        Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\
        ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, ",
    img: `${RagoutImg}`,
    price: 3.18,
    score: 1,
    isNew: true,
    isPopular: true,
  },
  {
    id: 11,
    category: "main courses",
    label: "Triple mix collection",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
        Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\
        ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, ",
    img: `${TripleImg}`,
    price: 27.35,
    score: 4,
    isNew: false,
    isPopular: true,
  },
  {
    id: 12,
    category: "deserts",
    label: "Nuages de Donuts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. \
        Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,\
        ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, ",
    img: `${DonutsImg}`,
    price: 17.15,
    score: 6,
    isNew: true,
    isPopular: true,
  },
];

export default products;
