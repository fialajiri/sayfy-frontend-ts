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
  message: string;
  imageUrl: string;
}

export interface GalleryDoc {
  id: string;
  title: string;
  images: string[];
}

export interface ErrorDoc {
  message: string;
}
