import { ParsedUrlQuery } from "querystring";

export interface UserDoc {
  id: string;
  email: string;
  isAdmin: boolean;
}

export interface AktualitaDoc {
  id: string; 
  title: string;
  aktualitaUrl:string
  perex: string;
  text: string;
  mainPhoto: string;
  photoGallery: string[];
  filesFromEditor:string[];
  createdAt:string
}

export interface GalleryDoc {
  id: string;
  title: string;
  images: string[];
}

export interface ErrorDoc {
  messages: string[];
  status:number
}

export interface IParams extends ParsedUrlQuery {
  title: string;
}

export interface VysledekDoc {
  rocnik:number;
  rok:string;
  url:string;
}

export interface PropoziceDoc{
  id:string;
  title: string;
  text: string;
  assets: string[];
}
