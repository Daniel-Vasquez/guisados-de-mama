import { type DiscountType } from "@/types/discounts";
import { getImage } from "@/utils";

export const DISCOUNTS: DiscountType[] = [
  {
    discountName: "divorcio",
    title: "¿Necesitas divorciarte?",
    description:
      "El divorcio es el proceso legal que disuelve el vínculo matrimonial y pone fin a la relación conyugal.",
    href: "/descuentos/divorcio",
    content: `
      <p>
        El divorcio es el proceso legal que disuelve el vínculo matrimonial y
        pone fin a la relación conyugal. En el caso de que existan hijos menores
        de edad, el divorcio debe tramitarse en el juzgado de familia y se debe
        solicitar la regulación de la relación con los hijos, es decir,
        la custodia, visitas y alimentos. En el caso de que existan bienes
        comunes, se debe solicitar la liquidación de la sociedad conyugal.
      </p>

      <p>
        El divorcio puede ser de mutuo acuerdo o unilateral. En el divorcio de
        mutuo acuerdo, ambos cónyuges deben estar de acuerdo en divorciarse y
        en las condiciones del divorcio. En el divorcio unilateral, solo uno de
        los cónyuges quiere divorciarse y el otro no.
      </p>
    `,
    requeriments: [
      "Acta de nacimiento de los hijos (en caso de existir)",
      "Acta de matrimonio",
      "INE",
      "Comprobante de domicilio"
    ],
    percentage: "50%",
    discount: 0.5,
    price: 5000,
    img: getImage("divorcio.jpg"),
  },
]