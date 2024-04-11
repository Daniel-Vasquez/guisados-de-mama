import { type StewType } from "@/types/stews";
import cochinitaImg from "@/images/cochinita-pibil.png"
import moleImg from "@/images/mole.png"
import chicharronImg from "@/images/chicharron-en-salsa.png"
import frijolesImg from "@/images/frijoles-charros.png"
import spaguettiImg from "@/images/spaguetti.png"


export const STEWS: StewType[] = [
  {
    title: "Cochinita Pibil",
    stewName: "cochinita-pibil",
    description:
      "La cochinita pibil es un platillo típico de la gastronomía yucateca, elaborado con carne de cerdo adobada en achiote y cocida a fuego lento en hojas de plátano. Su sabor es intenso y aromático, con un toque cítrico y picante que lo hace único y delicioso.",
    href: "/guisados/cochinita-pibil",
    content: `
      <p>
        La cochinita pibil es un platillo típico de la gastronomía yucateca,
        elaborado con carne de cerdo adobada en achiote y cocida a fuego lento
        en hojas de plátano. Su sabor es intenso y aromático, con un toque cítrico
        y picante que lo hace único y delicioso.
      </p>
      <p>
        El adobo de la cochinita pibil se prepara con achiote, chiles, ajo, cebolla,
        vinagre, jugo de naranja agria y especias, que se mezclan hasta obtener una
        pasta espesa y aromática. La carne de cerdo se marina en esta mezcla durante
        varias horas o incluso días, para que absorba los sabores y se impregne de
        los aromas del adobo.
      </p>
    `,
    ingredients: [],
    img: `${cochinitaImg.src}`,
  },
  {
    title: "Mole",
    stewName: "mole",
    description:
      "El mole es un platillo emblemático de la gastronomía mexicana, que se caracteriza por su complejidad de sabores y aromas. Se elabora con una mezcla de chiles, especias, frutas secas, chocolate y otros ingredientes, que se muelen y cocinan hasta obtener una salsa espesa y sabrosa.",
    href: "/guisados/mole",
    content: `
      <p>
        El mole es un platillo emblemático de la gastronomía mexicana, que se
        caracteriza por su complejidad de sabores y aromas. Se elabora con una
        mezcla de chiles, especias, frutas secas, chocolate y otros ingredientes,
        que se muelen y cocinan hasta obtener una salsa espesa y sabrosa.
      </p> 

      <p>
        Existen diferentes tipos de mole en México, como el mole poblano, el
        mole  oaxaqueño y  el mole verde, cada uno con sus propias variaciones
        y recetas tradicionales. El mole poblano, por ejemplo, se prepara con
        chiles secos, chocolate, almendras, pasas y especias, que se muelen y
        cocinan hasta obtener una salsa espesa y oscura, que se sirve con carne
        de pollo o pavo.
      </p>
    `,
    ingredients: [],
    img: `${moleImg.src}`,
  },
  {
    title: "Chicharron en Salsa Verde",
    stewName: "chicharron-en-salsa-verde",
    description:
      "El chicaarrón en salsa verde es un platillo tradicional mexicano que combina la textura crujiente del chicharrón con la frescura y sabor picante de la salsa verde. Se prepara cociendo el chicharrón en la salsa verde hasta que se ablande y absorba los sabores, creando un plato sabroso y reconfortante.",
    href: "/guisados/chicharron-en-salsa-verde",
    content: `
      <p>
        El chicharrón en salsa verde es un platillo tradicional mexicano que
        combina la textura crujiente del chicharrón con la frescura y sabor
        picante de la salsa verde. Se prepara cociendo el chicharrón en la
        salsa verde hasta que se ablande y absorba los sabores, creando un
        plato sabroso y reconfortante.
      </p>
      <p>
        La salsa verde se elabora con tomates verdes, chiles, cebolla, ajo y
        cilantro, que se licúan hasta obtener una mezcla homogénea y ligeramente
        espesa. Esta salsa se cocina a fuego lento con el chicharrón, permitiendo
        que los sabores se mezclen y se intensifiquen, creando un guiso delicioso
        y aromático.
      </p>
    `,
    ingredients: [
      "Chicharrón de cerdo",
      "Tomate verde",
      "Chile verde",
      "Cebolla",
      "Ajo",
      "Cilantro",
      "Sal al gusto",
    ],
    img: `${chicharronImg.src}`,
  },
  {
    title: "Frijoles Charros",
    stewName: "frijoles-charros",
    description:
      "Los frijoles charros son un platillo tradicional mexicano que se prepara con frijoles cocidos, tocino, chorizo, cebolla, ajo, chiles y especias, que se mezclan y se cocinan a fuego lento hasta obtener un guiso espeso y sabroso. Se sirven calientes como acompañamiento de carnes, arroces y tortillas.",
    href: "/guisados/frijoles-charros",
    content: `
      <p>
        Los frijoles charros son un platillo tradicional mexicano que se prepara
        con frijoles cocidos, tocino, chorizo, cebolla, ajo, chiles y especias, que
        se mezclan y se cocinan a fuego lento hasta obtener un guiso espeso y sabroso.
        Se sirven calientes como acompañamiento de carnes, arroces y tortillas.
      </p>
        
      <p>
        Los frijoles charros son un platillo típico de la gastronomía mexicana,
        que se prepara en diferentes regiones del país con sus propias variaciones
        y recetas tradicionales. En algunas zonas se añaden ingredientes como
        plátano macho, nopales, cilantro, pimientos y cerveza, que le dan un sabor
        único y delicioso a este guiso de frijoles.
      </p>
    `,
    ingredients: [],
    img: `${frijolesImg.src}`,
  },
  {
    title: "Sopa fría",
    stewName: "sopa-fria",
    description:
      "La sopa fría es una preparación culinaria que se sirve a baja temperatura, generalmente en verano para refrescar y saciar el apetito. Se elabora con ingredientes frescos y ligeros, como verduras, frutas, hierbas y especias, que se mezclan y se sirven fríos para disfrutar de su sabor y textura.",
    href: "/guisados/sopa-fria",
    content: `
      <p>
        La sopa fría es una preparación culinaria que se sirve a baja temperatura,
        generalmente en verano para refrescar y saciar el apetito. Se elabora con
        ingredientes frescos y ligeros, como verduras, frutas, hierbas y especias,
        que se mezclan y se sirven fríos para disfrutar de su sabor y textura.
      </p>
        
      <p>
        Existen diferentes tipos de sopas frías en la gastronomía mundial, como
        el gazpacho, el vichyssoise, el salmorejo y el ajo blanco, cada uno con
        sus propias recetas y variaciones regionales. El gazpacho, por ejemplo,
        es una sopa fría de origen español que se prepara con tomates, pepinos,
        pimientos, cebolla, ajo, aceite de oliva, vinagre y pan, que se mezclan
        y se sirven fríos para disfrutar de su sabor refrescante y saludable.
      </p>
    `,
    ingredients: [],
    img: `${spaguettiImg.src}`,
  },
];
