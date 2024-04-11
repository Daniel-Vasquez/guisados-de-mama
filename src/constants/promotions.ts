import { type PromotionType } from "@/types/promotions";
import cochinitaImg from "@/images/cochinita-pibil.png"
import chicharronImg from "@/images/chicharron-en-salsa.png"


export const PROMOTIONS: PromotionType[] = [
  {
    promotionName: "promocion-cochinita-pibil",
    title: "Cochinita Pibil",
    description:
      "Disfruta de un 2x1 en el guisado de cochinita pibil. ¡No te quedes sin probarlo!",
    href: "/promociones/promocion-cochinita-pibil",
    content: `
      <p>
        Por el mes de las madres disfruta de un 2x1 en el guisado de cochinita pibil.
      </p>

      <p>
        ¡No te quedes sin probarlo!
      </p>
    `,
    requeriments: [
      "Compra al menos un kilo de cualquier guisado.",
      "Añade el código 'COCHINITA-PROMO' al realizar tu pedido.",
      "Válido del 1 al 31 de mayo.",
    ],
    img: `${cochinitaImg.src}`,
  },
  {
    promotionName: "promocion-chicharron-en-salsa-verde",
    title: "Chicharrón en salsa verde",
    description:
      "Disfruta de un 2x1 en el guisado de chicharrón en salsa verde. ¡No te quedes sin probarlo!",
    href: "/promociones/promocion-chicharron-en-salsa-verde",
    content: `
      <h1 class="text-3xl text-center font-bold">
        *Proximamente*
      </h1>
      <p>
        Por el mes de las madres disfruta de un 2x1 en el guisado de chicharrón en salsa verde.
      </p>

      <p>
        ¡No te quedes sin probarlo!
      </p>
    `,
    requeriments: [
      "Añade el código 'CHICHARRON-PROMO' al realizar tu pedido.",
      "Proximamente.",
    ],
    img: `${chicharronImg.src}`,
  },
]