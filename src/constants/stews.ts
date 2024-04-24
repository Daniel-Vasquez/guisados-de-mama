import { type StewType } from "@/types/stews";
import cochinitaImg from "@/images/cochinita-pibil.png"
import chicharronImg from "@/images/chicharron-en-salsa.png"
import albondigasImg from "@/images/albondigas.png"
import cerdoMoritaImg from "@/images/cerdo-salsa-morita-nopales.png"
import arrozImg from "@/images/arroz-rojo.png"
import spaguettiImg from "@/images/spaghetti.png"
import sopaImg from "@/images/sopa-fria.png"
import frijolesImg from "@/images/frijoles-refritos.png"
import salsaImg from "@/images/salsa-roja.png"
import salsaGuacamoleImg from "@/images/salsa-guacamole.png"
import cochinitaMaizImg from "@/images/complmentos/cochinita-con-tortilla-de-maiz.png"
import cochinitaCebollaMoradaImg from "@/images/complmentos/cochinita-con-cebolla-morada.png"
import cochinitaFrijoesImg from "@/images/complmentos/cochinita-con-frijoles.png"

export const STEWS: StewType[] = [
  {
    title: "Cochinita Pibil",
    stewName: "cochinita-pibil",
    description: `
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
    additionalIngredients: [
      "Salsa de habanero.",
      "Cebolla morada.",
    ],
    href: "/guisados/cochinita-pibil",
    content: `
      <h2 class="text-4xl text-[#d61bb2] text-center my-2">
        ¿Cuáles son los beneficios de comer cochinita pibil?
      </h2>

      <p>
        La cochinita pibil es un platillo tradicional de la cocina yucateca que ofrece varios beneficios además de su delicioso sabor. Algunos de los beneficios de comer cochinita pibil son:
      </p>

      <ul class="text-lg">
        <li>
          <strong class="text-gray-700">Alto contenido de proteínas</strong>: La carne de cerdo es una excelente fuente de proteínas, que son esenciales para el crecimiento y la reparación de los tejidos del cuerpo.
        </li>
        <li>
          <strong class="text-gray-700">Rica en vitaminas y minerales</strong>: La cochinita pibil contiene una variedad de vitaminas y minerales, como vitamina C, vitamina A, hierro, zinc y calcio, que son importantes para la salud y el bienestar.
        </li>
        <li>
          <strong class="text-gray-700">Bajo en grasas saturadas</strong>: Aunque la cochinita pibil contiene grasa de cerdo, es baja en grasas saturadas, lo que la hace una opción más saludable que otros platillos fritos o empanizados.
        </li>
        <li>
          <strong class="text-gray-700">Alto contenido de fibra</strong>: La cochinita pibil contiene fibra dietética, que es importante para la digestión y la salud intestinal.
        </li>
        <li>
          <strong class="text-gray-700">Delicioso sabor</strong>: La cochinita pibil es un platillo sabroso y reconfortante que combina los sabores intensos y aromáticos del achiote, los chiles y las especias, con la suavidad y jugosidad de la carne de cerdo.
        </li>
      </ul>

      <h2 class="text-4xl text-[#d61bb2] text-center my-2">
        ¿Qué acompañamientos se suelen servir con los tacos de cochinita? 
      </h2>

      <p>
        Los tacos de cochinita pibil se sirven con una gran variedad de guarniciones que le dan un sabor particular, entre los elementos que no deben faltar se encuentran los siguientes:
      </p>

      <ul class="text-xl">
        <li>
          <strong class="text-gray-700">Tortillas de maíz</strong>: En el sur se acostumbra la preparación de tortillas de maíz para los tacos, es preferible que se cuezan al momento y servirlas calentitas.
          <img src="${cochinitaMaizImg.src}" alt="Tortillas de maíz" class="mx-auto aspect-video">
          <p class="text-center mb-4">*Imagen ilustrativa*</p>
        </li>
        <li>
          <strong class="text-gray-700">Cebollita morada y chile habanero</strong>: Es el acompañante ideal para los ricos tacos de cochinita pibil, se trata de una salsa fresca y picante que explota los sabores de este platillo.
          <img src="${cochinitaCebollaMoradaImg.src}" alt="Tortillas de maíz" class="mx-auto aspect-video">
          <p class="text-center mb-4">*Imagen ilustrativa*</p>
        </li>
        <li>
        <strong class="text-gray-700">Frijoles de la olla</strong>: Los tradicionales frijoles de la olla son un elemento de la cocina prehispánica que no puede faltar como guarnición.
          <img src="${cochinitaFrijoesImg.src}" alt="Tortillas de maíz" class="mx-auto aspect-video rounded-xl mt-4">
          <p class="text-center mb-4">*Imagen ilustrativa*</p>
        </li>
      </ul>
    `,
    priceKilogram: 300,
    priceHalfKilogram: 200,
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
    priceKilogram: 120,
    priceHalfKilogram: 60,
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
    priceKilogram: 200,
    priceHalfKilogram: 100,
    img: `${albondigasImg.src}`,
    available: true,
  },
  {
    title: "Cerdo en salsa morita con nopales",
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
    priceKilogram: 200,
    priceHalfKilogram: 100,
    img: `${cerdoMoritaImg.src}`,
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
    priceKilogram: 70,
    priceHalfKilogram: 40,
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
    priceKilogram: 70,
    priceHalfKilogram: 40,
    img: `${spaguettiImg.src}`,
    available: false,
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
    priceKilogram: 70,
    priceHalfKilogram: 40,
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
    priceKilogram: 70,
    priceHalfKilogram: 40,
    img: `${frijolesImg.src}`,
    available: true,
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
    img: `${salsaImg.src}`,
    available: true,
  },
  {
    title: "Salsa de Guacamole",
    stewName: "salsa-de-guacamole",
    description:
      "Las salsas molcajeteadas son un elemento clave de la gastronomía mexicana. Su preparación es una tradición que ha pasado de generación en generación. Estas salsas son conocidas por su sabor único y su textura rústica, que se obtiene al moler los ingredientes en un molcajete, un mortero de piedra volcánica. Los ingredientes de las salsas molcajeteadas pueden ir desde los clásicos chiles, como el jalapeño, el serrano o el habanero, hasta tomates, cebollas, ajo y cilantro. Otros ingredientes populares incluyen el aguacate y el tomatillo.",
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
    priceQuarterKilogram: 30,
    img: `${salsaGuacamoleImg.src}`,
    available: true,
  },
];
