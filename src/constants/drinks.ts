import { type DrinkType } from "@/types/drinks";
import pulqueImg from "@/images/drinks/pulque.png"
import tepacheImg from "@/images/drinks/tepache.png"
import pozolImg from "@/images/drinks/pozol.png"
import poncheFrutasImg from "@/images/drinks/ponche-de-frutas.png"

export const DRINKS: DrinkType[] = [
  {
    title: "Pulque",
    drinkName: "pulque",
    description:
      "Bebida alcohólica tradicional de México, hecha de la fermentación del aguamiel del maguey.",
    href: "/bebidas/pulque",
    content: `
      <p>
        El pulque es una bebida alcohólica tradicional de México, hecha de la fermentación del aguamiel del maguey.
        Es una bebida lechosa, ligeramente espumosa, de sabor ácido y ligeramente amargo.
      </p>

      <p>
        El pulque es una bebida tradicional de México, que se obtiene de la fermentación del aguamiel del maguey.
        Es una bebida lechosa, ligeramente espumosa, de sabor ácido y ligeramente amargo.
      </p>
    `,
    price: 45,
    img: `${pulqueImg.src}`,
  },
  {
    title: "Tepache",
    drinkName: "tepache",
    description:
      "Bebida fermentada de origen mexicano, hecha a base de cáscara de piña.",
    href: "/bebidas/tepache",
    content: `
      <p>
        El tepache es una bebida fermentada de origen mexicano, hecha a base de cáscara de piña.
        Es una bebida refrescante, ligeramente espumosa, de sabor dulce y ácido.
      </p>

      <p>
        El tepache es una bebida fermentada de origen mexicano, hecha a base de cáscara de piña.
        Es una bebida refrescante, ligeramente espumosa, de sabor dulce y ácido.
      </p>
    `,
    price: 25,
    img: `${tepacheImg.src}`,
  },
  {
    title: "Pozol",
    drinkName: "pozol",
    description:
      "Bebida tradicional de origen prehispánico, hecha a base de cacao y maíz.",
    href: "/bebidas/pozol",
    content: `
      <p>
        El pozol es una bebida tradicional de origen prehispánico, hecha a base de cacao y maíz.
        Es una bebida espesa, de sabor amargo y ácido.
      </p>

      <p>
        El pozol es una bebida tradicional de origen prehispánico, hecha a base de cacao y maíz.
        Es una bebida espesa, de sabor amargo y ácido.
      </p>
    `,
    price: 40,
    img: `${pozolImg.src}`,
  },
  {
    title: "Ponche de frutas",
    drinkName: "ponche-de-frutas",
    description: 
      "Bebida caliente de origen mexicano, hecha a base de frutas y especias.",
    href: "/bebidas/ponche-de-frutas",
    content: `
      <p>
        El ponche de frutas es una bebida caliente de origen mexicano, hecha a base de frutas y especias.
        Es una bebida dulce, aromática y reconfortante.
      </p>

      <p>
        El ponche de frutas es una bebida caliente de origen mexicano, hecha a base de frutas y especias.
        Es una bebida dulce, aromática y reconfortante.
      </p>
    `,
    price: 35,
    img: `${poncheFrutasImg.src}`,
  },
]