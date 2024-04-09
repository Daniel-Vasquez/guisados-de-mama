import { type CollaboratorsType } from "@/types/Collaborators";
const PUBLIC_MY_PHONE_NUMBER = import.meta.env.PUBLIC_MY_PHONE_NUMBER;

export const COLLABORATORS: CollaboratorsType[] = [
  {
    name: "Daniel Vásquez",
    role: "Programador",
    services: [
      "Diseñador web.",
      "Desarrollador web.",
      "SEO.",
      "Cofundador.",
    ],
    phone: `${PUBLIC_MY_PHONE_NUMBER}`,
  },
]