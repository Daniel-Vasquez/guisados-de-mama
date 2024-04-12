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
      "Descubre la auténtica experiencia mexicana en cada bocado! Nuestra cochinita pibil te transportará directamente a las calles de Yucatán con su sabor único y tradicional.",
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
    priceKilogram: 300,
    priceHalfKilogram: 200,
    img: `${cochinitaImg.src}`,
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
    priceKilogram: 120,
    priceHalfKilogram: 60,
    img: `${chicharronImg.src}`,
  },
  {
    title: "Mole con pollo deshebrado",
    stewName: "mole-con-pollo-deshebrado",
    description:
      "Descubre el exquisito sabor de nuestra receta casera de mole con pollo, una experiencia culinaria que te transportará a los sabores auténticos de México en cada bocado.",
    href: "/guisados/mole-con-pollo-deshebrado",
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
    priceKilogram: 220,
    priceHalfKilogram: 110,
    img: `${moleImg.src}`,
  },
  {
    title: "Cerdo en salsa verde con verdolagas",
    stewName: "cerdo-en-salsa-verde-con-verdolagas",
    description:
      "El cerdo en salsa verde es un platillo tradicional mexicano que tiene sus raíces en la época prehispánica. Se cree que era ya parte de la dieta de los aztecas.",
    href: "/guisados/cerdo-en-salsa-verde-con-verdolagas",
    content: `
      <p>
        El cerdo en salsa verde con verdolagas es un guisado tradicional mexicano
        que combina la carne de cerdo con una salsa verde picante y las verdolagas,
        una hierba silvestre comestible. Se prepara cociendo la carne en la salsa
        verde con las verdolagas hasta que se ablande y absorba los sabores, creando
        un plato sabroso y reconfortante.
      </p>
      <p>
        La salsa verde se elabora con tomates verdes, chiles, cebolla, ajo y cilantro,
        que se licúan hasta obtener una mezcla homogénea y ligeramente espesa. Esta
        salsa se cocina a fuego lento con la carne de cerdo y las verdolagas, permitiendo
        que los sabores se mezclen y se intensifiquen, creando un guiso delicioso y aromático.
      </p>
    `,
    priceKilogram: 200,
    priceHalfKilogram: 100,
    img: `${frijolesImg.src}`,
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
    priceKilogram: 70,
    priceHalfKilogram: 40,
    img: `${spaguettiImg.src}`,
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
    priceKilogram: 70,
    priceHalfKilogram: 40,
    img: `${spaguettiImg.src}`,
  },
  {
    title: "Sopa fría con jamón (codito)",
    stewName: "sopa-fria-con-jamon-codito",
    description:
      "¡No hay receta tan fácil y rica como la sopa de coditos fría! Es tan práctica que puedes prepararla cualquier día de la semana y puedes servirla como entrada antes de tu plato fuerte, como guarnición o llevarla como lunch al trabajo o escuela.",
    href: "/guisados/sopa-fria-con-jamon-codito",
    content: `
      <p>
        ¡No hay receta tan fácil y rica como la sopa de coditos fría! Es tan práctica
        que puedes prepararla cualquier día de la semana y puedes servirla como entrada
        antes de tu plato fuerte, como guarnición o llevarla como lunch al trabajo o escuela.
      </p>
      <p>
        La sopa de coditos fría es una receta que no puede faltar en tu recetario, ya que
        es muy fácil de hacer y además es muy económica. Además, puedes agregarle los ingredientes
        que más te gusten para darle tu toque personal.
      </p>
    `,
    priceKilogram: 70,
    priceHalfKilogram: 40,
    img: `${spaguettiImg.src}`,
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
    priceKilogram: 70,
    priceHalfKilogram: 40,
    img: `${spaguettiImg.src}`,
  },
  {
    title: "Salsa de molcajete roja",
    stewName: "salsa-de-molcajete-roja",
    description:
      "No hay nada más mexicano que una buena salsa roja molcajeteadas. Esta salsa es perfecta para acompañar cualquier platillo mexicano, desde tacos y enchiladas hasta carnes asadas y guisados. Su sabor es intenso y picante, con un toque ahumado y terroso que la hace única y deliciosa.",
    href: "/guisados/salsa-de-molcajete-roja",
    content: `
      <p>
        Las salsas molcajeteadas son un elemento clave de la gastronomía mexicana. 
        Su preparación es una tradición que ha pasado de generación en generación. 
        Estas salsas son conocidas por su sabor único y su textura rústica, que se 
        obtiene al moler los ingredientes en un molcajete, un mortero de piedra 
        volcánica.
      </p>
      <p>
        Los ingredientes de las salsas molcajeteadas pueden ir desde los clásicos chiles, 
        como el jalapeño, el serrano o el habanero, hasta tomates, cebollas, ajo y cilantro. 
        Otros ingredientes populares incluyen el aguacate y el tomatillo.
      </p>
    `,
    priceQuarterKilogram: 30,
    img: `${spaguettiImg.src}`,
  },
];
