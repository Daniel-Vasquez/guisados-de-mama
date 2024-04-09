import { Service, type ServiceType } from "@/types/services";
import { getImage } from "@/utils";

export const SERVICES: ServiceType[] = [
  {
    title: "Derecho penal",
    serviceName: "derecho-penal",
    description:
      "Ofrecemos asesoramiento experto para defender a imputados o asistir a víctimas. Nuestro compromiso se centra en lograr el máximo beneficio para nuestros representados, abordando con precisión normas, sanciones y procedimientos legales.",
    href: "/servicios/derecho-penal",
    content: `
      <p>
        El Derecho Penal, también conocido como Derecho Criminal,
        es una parte esencial del sistema legal que regula las conductas
        consideradas como delitos en la sociedad. Esta rama legal establece
        normas y sanciones para aquellos que violan las leyes penales,
        con el objetivo principal de proteger bienes jurídicos fundamentales
        como la vida, la libertad, la propiedad y la seguridad pública.
      </p>
      <p>
        A través de la imposición de penas y medidas de seguridad,
        busca prevenir y castigar comportamientos que perturben la paz social
        y el orden público.
      </p>
    `,
    servicios: [],
    img: getImage("derecho-penal.jpg"),
    type: Service.CIVIL,
  },
  {
    title: "Derecho Civil",
    serviceName: "derecho-civil",
    description:
      "Regulamos relaciones jurídicas, abarcando matrimonio, contratos y propiedad. Busca equilibrio, justicia y resolución transparente de disputas para garantizar la convivencia pacífica.",
    href: "/servicios/derecho-civil",
    content: `
      <p>
        El Derecho Civil es una rama fundamental del ordenamiento jurídico que
        regula las relaciones entre individuos en el ámbito privado, abarcando
        temas como el estado civil, el matrimonio, la familia, la propiedad,
        las obligaciones contractuales y la sucesión. 
      </p>
      <p>
        Este campo del derecho se
        centra en la noción de persona y su capacidad jurídica, que incluye
        aspectos como la personalidad jurídica, la capacidad de obrar y el
        estado civil, como el nombre, la nacionalidad y el domicilio.
      </p>
    `,
    servicios: [],
    img: getImage("derecho-civil.jpg"),
    type: Service.CRIMINAL,
  },
  {
    title: "Mercantil",
    serviceName: "mercantil",
    description:
      "Nos especializamos en regular actividades comerciales, incluyendo contratos, sociedades mercantiles y títulos de crédito. Facilitamos y protegemos transacciones comerciales mediante normativas que regulan las relaciones entre los involucrados.",
    href: "/servicios/mercantil",
    content: `
      <p>
        El Derecho Mercantil, también conocido como Derecho Comercial, es una
        rama del ordenamiento jurídico que regula las relaciones jurídicas
        derivadas de las actividades comerciales. Se aplica a comerciantes y
        actos de comercio, así como a instituciones relacionadas con el mundo
        empresarial. Destaca por su flexibilidad y adaptabilidad a las dinámicas
        del mercado, con el objetivo de fomentar y regular transacciones
        comerciales.
      </p>

      <p>
        En este ámbito se encuentran las sociedades mercantiles,
        que permiten a individuos unirse para llevar a cabo negocios en común,
        regulando su creación, organización y funcionamiento, así como los
        derechos y responsabilidades de los socios.
      </p>      
    `,
    servicios: [],
    img: getImage("derecho-mercantil.jpeg"),
    type: Service.TRADE,
  },
  {
    title: "Derecho de Familia",
    serviceName: "derecho-de-familia",
    description:
      "Enfocados en regular situaciones familiares, abordamos matrimonio, divorcio, patria potestad y sucesiones. Protegemos los derechos de los miembros familiares, asegurando un marco legal justo y equitativo para resolver conflictos y preservar el bienestar.",
    href: "/servicios/derecho-de-familia",
    content: `
      <p>
        El Derecho de Familia es una rama del ordenamiento jurídico que regula
        las relaciones familiares y los vínculos entre sus miembros, abordando
        aspectos como el matrimonio, el divorcio, la filiación, la adopción y
        la patria potestad. En cuanto al matrimonio, establece las condiciones
        y requisitos para su celebración, así como los derechos y deberes de
        los cónyuges durante la vida conyugal, incluyendo los regímenes
        matrimoniales que regulan la relación económica entre ellos.
      </p>

      <p>
        Respecto a la disolución del matrimonio, se ocupa del divorcio,
        estableciendo las causales y las consecuencias en términos de
        custodia de los hijos, reparto de bienes y pensiones alimenticias.
        También regula la filiación y la adopción, velando por el bienestar
        y los derechos de los niños en estos procesos.
      </p>
    `,
    servicios: [],
    img: getImage("derecho-de-familia.jpeg"),
    type: Service.FAMILY,
  },
  {
    title: "Defensa de los servidores públicos en el proceso administrativo",
    serviceName: "defensa-servidores-publicos-en-el-proceso-administrativo",
    description:
      "Salvaguardamos derechos y garantías de funcionarios frente a sanciones, asegurando presunción de inocencia y revisión imparcial. Defendemos con pruebas, alegatos y recursos legales para un proceso justo y equitativo.",
    href: "/servicios/defensa-servidores-publicos-en-el-proceso-administrativo",
    content: `
      <p>
        El derecho de defensa en el ámbito administrativo es fundamental para
        garantizar el debido proceso y proteger los derechos de los servidores
        públicos. En este contexto, se asegura la presunción de inocencia,
        el derecho a ser informado de las acusaciones, presentar pruebas y ser
        escuchado durante el procedimiento. Esto implica que los órganos
        administrativos deben ser imparciales, permitiendo a los servidores
        públicos conocer los cargos en su contra, presentar pruebas a su favor
        y cuestionar las pruebas en su contra.
      </p>
        
      <p>
        Este derecho no solo tiene
        implicaciones en términos de sanciones disciplinarias, sino también en
        la protección de los derechos laborales y profesionales de los servidores
        públicos, evitando decisiones arbitrarias que puedan afectar su carrera
        y reputación.
      </p>
    `,
    servicios: [],
    img: getImage("defensa-servidores-publicos.jpeg"),
    type: Service.PUBLIC,
  },
];
