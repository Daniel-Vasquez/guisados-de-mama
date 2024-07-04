export type StewType = {
  title: string;
  stewName: string;
  description: string;
  additionalIngredients?: Array<string>;
  href: string;
  content: string;
  price: number;
  img: string;
  available: boolean;
};