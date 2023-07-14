export interface Services {
  id: number;
  name: string;
  image: string;
  title: string;
}

export interface Profess extends Services {
  username: string;
}

export interface Titless {
  title: string;
}
export interface Services2 extends Services {
  text: string;
}
export interface Team extends Services {
  text: string;
}

export interface Blog {
  id: number;
  folder: string;
  image: string;
  title: string;
}

export interface Contact {
  id: number;
  text: string;
  image: string;
  title: string;
}
