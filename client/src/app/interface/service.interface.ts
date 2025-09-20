export interface ServiceItemInterface {
  id: string | number;
  order: number;
  title: string;
  description?: string;
  iconUrl?: string;
  child: ServiceItemChildInterface[];
}

export interface ServiceItemChildInterface {
  id: string | number;
  title: string;
}
