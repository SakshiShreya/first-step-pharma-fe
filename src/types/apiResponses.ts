export interface IAboutMe {
  name?: string;
  phone?: string;
  address?: Array<string>;
}

interface ISubService {
  name: string;
  order: number;
}

export interface IService {
  _id: string;
  name: string;
  subServices: Array<ISubService>;
  order: number;
}
