import { type StewType } from "@/types/stews";
import cochinitaImg from "@/images/cochinita-pibil.png"
import chicharronImg from "@/images/chicharron-en-salsa.png"
import albondigasImg from "@/images/albondigas.png"
import cerdoMoritaImg from "@/images/cerdo-salsa-morita-nopales.png"
import arrozImg from "@/images/arroz-rojo.png"
import spaguettiImg from "@/images/spaghetti.png"
import sopaImg from "@/images/sopa-fria.png"
import frijolesImg from "@/images/frijoles-refritos.png"
import salsaGuacamoleImg from "@/images/salsa-guacamole.png"
import molePolloImg from "@/images/mole-con-pollo.png"
// import salsaImg from "@/images/salsa-roja.png"

export const STEWS: StewType[] = [
  {
    title: "Cochinita Pibil",
    stewName: "cochinita-pibil",
    description:
      "La cochinita pibil es un platillo tradicional de la gastronomía yucateca que se prepara con carne de cerdo adobada en achiote y cocida en hojas de plátano. El resultado es una carne jugosa, tierna y llena de sabor, que se sirve con tortillas de maíz, cebolla morada encurtida, frijoles refritos y salsa de habanero.",
    additionalIngredients: [
      "Salsa de habanero.",
      "Cebolla morada.",
    ],
    href: "/guisados/cochinita-pibil",
    content: `
      <p>
        La cochinita pibil se sirve tradicionalmente con tortillas de maíz, cebolla
        morada encurtida, frijoles refritos y salsa de habanero. Estos acompañamientos
        realzan los sabores de la cochinita pibil y crean una experiencia gastronómica
        única y deliciosa.
      </p>
    `,
    price: 230,
    img: `${cochinitaImg.src}`,
    available: true,
  },
  {
    title: "Chicharron en Salsa Verde",
    stewName: "chicharron-en-salsa-verde",
    description:
      "¡Experimenta la explosión de sabores de nuestra deliciosa receta de chicharrón en salsa verde! Una combinación única que te hará enamorar de la gastronomía mexicana en cada mordida.",
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
    price: 180,
    img: `${chicharronImg.src}`,
    available: true,
  },
  {
    title: "Albondigas al chipotle",
    stewName: "albondigas-al-chipotle",
    description:
      "Las albóndigas al chipotle son un platillo tradicional mexicano que combina la suavidad de las albóndigas con el sabor picante y ahumado del chipotle. Se preparan cociendo las albóndigas en una salsa de tomate con chipotle, cebolla, ajo y especias, hasta que estén suaves y jugosas.",
    href: "/guisados/albondigas-al-chipotle",
    content: `
      <p>
        Las albóndigas al chipotle son un platillo tradicional mexicano que combina
        la suavidad de las albóndigas con el sabor picante y ahumado del chipotle.
        Se preparan cociendo las albóndigas en una salsa de tomate con chipotle,
        cebolla, ajo y especias, hasta que estén suaves y jugosas.
      </p>
      <p>
        La salsa de tomate con chipotle se elabora con tomates, chiles chipotles,
        cebolla, ajo y especias, que se licúan hasta obtener una mezcla homogénea
        y ligeramente espesa. Esta salsa se cocina a fuego lento con las albóndigas,
        permitiendo que los sabores se mezclen y se intensifiquen, creando un guiso
        delicioso y aromático.
      </p>
    `,
    price: 150,
    img: `${albondigasImg.src}`,
    available: true,
  },
  {
    title: "Cerdo en salsa de morita",
    stewName: "cerdo-en-salsa-morita-con-nopales",
    description:
      "El cerdo en salsa morita es un platillo tradicional mexicano que combina la carne de cerdo con una salsa picante y ahumada de chiles morita. Se prepara cociendo la carne en la salsa morita hasta que se ablande y absorba los sabores, creando un plato sabroso y reconfortante",
    href: "/guisados/cerdo-en-salsa-morita-con-nopales",
    content: `
      <p>
        El cerdo en salsa morita es un platillo tradicional mexicano que combina
        la carne de cerdo con una salsa picante y ahumada de chiles morita. Se prepara
        cociendo la carne en la salsa morita hasta que se ablande y absorba los sabores,
        creando un plato sabroso y reconfortante.
      </p>
      <p>
        La salsa morita se elabora con chiles morita, tomates, cebolla, ajo y especias,
        que se licúan hasta obtener una mezcla homogénea y ligeramente espesa. Esta salsa
        se cocina a fuego lento con la carne de cerdo, permitiendo que los sabores se mezclen
        y se intensifiquen, creando un guiso delicioso y aromático.
      </p>
    `,
    price: 200,
    img: `${cerdoMoritaImg.src}`,
    available: true,
  },
  {
    title: "Mole rojo con pollo",
    stewName: "mole-rojo-con-pollo",
    description:
      "El mole rojo con pollo es un platillo tradicional mexicano que combina la suavidad del pollo con la intensidad y complejidad de la salsa de mole rojo. Se prepara cociendo el pollo en la salsa de mole rojo hasta que esté suave y jugoso, creando un plato sabroso y reconfortante.",
    href: "/guisados/mole-rojo-con-pollo",
    content: `
      <p>
        El mole rojo con pollo es un platillo tradicional mexicano que combina
        la suavidad del pollo con la intensidad y complejidad de la salsa de
        mole rojo. Se prepara cociendo el pollo en la salsa de mole rojo hasta
        que esté suave y jugoso, creando un plato sabroso y reconfortante.
      </p>
      <p>
        La salsa de mole rojo se elabora con chiles secos, especias,
        frutas secas, chocolate y otros ingredientes, que se muelen y se
        cocinan juntos hasta obtener una salsa espesa y aromática. Esta salsa
        se cocina a fuego lento con el pollo, permitiendo que los sabores se
        mezclen y se intensifiquen, creando un guiso delicioso y aromático.
      </p>
    `,
    price: 120,
    img: `${molePolloImg.src}`,
    available: true,
  },
  {
    title: "Arroz rojo",
    stewName: "arroz-rojo",
    description:
      "El arroz rojo es un platillo tradicional mexicano que debe su color característico al tomate, donde ya era cultivado y consumido por las culturas mesoamericanas.",
    href: "/guisados/arroz-rojo",
    content: `
      <p>
        El arroz rojo es un platillo tradicional mexicano que se prepara con arroz,
        tomate, cebolla, ajo y especias, que se cocinan juntos hasta obtener un arroz
        rojo y sabroso. Se sirve como acompañamiento de otros platillos mexicanos, como
        guisados, carnes, pescados y mariscos.
      </p>
      <p>
        Para preparar el arroz rojo, se fríe el arroz con cebolla y ajo, hasta que
        esté dorado y crujiente. Luego se agrega el tomate licuado con chiles y especias,
        y se cocina hasta que el arroz absorba el líquido y se cocine completamente.
        El arroz rojo se sirve caliente, esponjoso y sabroso, con un color rojo intenso
        y un sabor delicioso y aromático.
      </p>
    `,
    price: 50,
    img: `${arrozImg.src}`,
    available: true,
  },
  {
    title: "Spaguetti rojo",
    stewName: "spaguetti-rojo",
    description:
      "El arroz rojo es un platillo tradicional mexicano que se prepara con arroz, tomate, cebolla, ajo y especias, que se cocinan juntos hasta obtener un arroz rojo y sabroso. Se sirve como acompañamiento de otros platillos mexicanos, como guisados, carnes, pescados y mariscos.",
    href: "/guisados/spaguetti-rojo",
    content: `
      <p>
        El arroz rojo es un platillo tradicional mexicano que se prepara con arroz,
        tomate, cebolla, ajo y especias, que se cocinan juntos hasta obtener un arroz
        rojo y sabroso. Se sirve como acompañamiento de otros platillos mexicanos, como
        guisados, carnes, pescados y mariscos.
      </p>
      <p>
        Para preparar el arroz rojo, se fríe el arroz con cebolla y ajo, hasta que
        esté dorado y crujiente. Luego se agrega el tomate licuado con chiles y especias,
        y se cocina hasta que el arroz absorba el líquido y se cocine completamente.
        El arroz rojo se sirve caliente, esponjoso y sabroso, con un color rojo intenso
        y un sabor delicioso y aromático.
      </p>
    `,
    price: 65,
    img: `${spaguettiImg.src}`,
    available: true,
  },
  {
    title: "Sopa fría con jamón (codito)",
    stewName: "sopa-fria-con-jamon-codito",
    description:
      "¡No hay receta tan fácil y rica como la sopa de coditos fría! Es tan práctica que puedes prepararla cualquier día de la semana y puedes servirla como entrada antes de tu plato fuerte, como guarnición o llevarla como lunch al trabajo o escuela.",
    href: "/guisados/sopa-fria-con-jamon-codito",
    content: `
      <p>
        La sopa de coditos fría es una receta que no puede faltar en tu recetario, ya que
        es muy fácil de hacer y además es muy económica. Además, puedes agregarle los ingredientes
        que más te gusten para darle tu toque personal.
      </p>
    `,
    price: 40,
    img: `${sopaImg.src}`,
    available: true,
  },
  {
    title: "Frijoles refritos o de la olla",
    stewName: "frijoles-refritos-o-de-la-olla",
    description:
      "Los frijoles y las legumbres son ricas en proteína vegetal, fibra, vitaminas del grupo B, hierro, ácido fólico, calcio, potasio, fósforo y zinc. La mayoría de los frijoles también tienen pocas grasas.",
    href: "/guisados/frijoles-refritos-o-de-la-olla",
    content: `
      <p>
        Los frijoles de la olla son un platillo tradicional mexicano que se prepara
        con frijoles cocidos en agua con cebolla, ajo y sal, hasta que estén suaves
        y tiernos. Se sirven calientes como guarnición de otros platillos mexicanos,
        como carnes, guisados, tacos y enchiladas.
      </p>
      <p>
        En cambio los frijoles refritos se prepara con frijoles cocidos y fritos en manteca de cerdo o 
        aceite, hasta que estén dorados y cremosos. Se sirven calientes como guarnición de otros platillos
        mexicanos, como tacos, enchiladas, chilaquiles y quesadillas.
      </p>
    `,
    price: 70,
    img: `${frijolesImg.src}`,
    available: true,
  },
  {
    title: "Salsa de Guacamole",
    stewName: "salsa-de-guacamole",
    description:
      "Las salsas molcajeteadas son un elemento clave de la gastronomía mexicana. Su preparación es una tradición que ha pasado de generación en generación. Estas salsas son conocidas por su sabor único y su textura rústica, que se obtiene al moler los ingredientes en un molcajete, un mortero de piedra volcánica.",
    href: "/guisados/salsa-de-guacamole",
    content: `
      <p>
        El guacamole es una salsa típica de la gastronomía mexicana, elaborada a base de aguacate, 
        tomate, cebolla, chile, cilantro y limón. Su sabor es fresco, cremoso y ligeramente picante, 
        con un toque cítrico y aromático que lo hace único y delicioso.
      </p>
      <p>
        El guacamole es un acompañamiento perfecto para tacos, enchiladas, quesadillas, nachos, 
        carnes asadas y pescados. También se puede servir como aperitivo con totopos, galletas 
        saladas o verduras crudas. Es una salsa versátil y deliciosa que se adapta a cualquier 
        ocasión y paladar.
      </p>
    `,
    price: 45,
    img: `${salsaGuacamoleImg.src}`,
    available: true,
  },
];
