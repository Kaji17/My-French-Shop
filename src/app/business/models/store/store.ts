export class Store {
  storeid: number;
  name: string;
  urllogo?: string;
  websitelink?: string;
  statut?: string;

  constructor(data: Store) {
    this.storeid = data && data?.storeid;
    this.name = data && data?.name;
    this.urllogo = data && data?.urllogo;
    this.websitelink = data && data?.websitelink;
    this.statut = data && data?.statut
  }
}

export interface ParamGetStore {
  storeid?: number;
  nom?: string;
  pagination: boolean;
  page: number;
  size: number
}
