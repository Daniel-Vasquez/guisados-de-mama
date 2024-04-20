export type StewType = {
  title: string;
  stewName: string;
  description: string;
  additionalIngredients?: Array<string>;
  href: string;
  content: string;
  priceKilogram?: number;
  priceHalfKilogram?: number;
  priceQuarterKilogram?: number;
  img: string;
};