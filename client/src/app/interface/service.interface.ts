export interface AccordionInterface {
  id: string | number;
  order: number;
  title: string;
  description?: string;
  iconUrl?: string;
  child: AccordionChildInterface[];
}

export interface AccordionChildInterface {
  id: string | number;
  title: string;
}
