export interface UserDoc {
  id: string;
  email: string;
  isAdmin: boolean;
}

export interface AktualitaDoc {
  id: string;
  date: string;
  title: string;
  perex: string;
  text: string;
  mainPhoto: string;
  photoGallery: string[];
  filesFromEditor:string[]
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
