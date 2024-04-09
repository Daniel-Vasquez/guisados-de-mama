export enum Service {
  CIVIL = "CIVIL",
  CRIMINAL = "CRIMINAL",
  TRADE = "TRADE",
  FAMILY = "FAMILY",
  PUBLIC = "PUBLIC",
  ALIMONY = "ALIMONY",
  LABOR = "LABOR",
  SUPPORT = "SUPPORT",
  CUSTODY = "CUSTODY",
  PROPERTY = "PROPERTY",
  PENSION = "PENSION",
}

export type ServiceType = {
  title: string;
  serviceName: string;
  description: string;
  href: string;
  content: string;
  img: string;
  servicios: Array<string>;
  type: Service;
};