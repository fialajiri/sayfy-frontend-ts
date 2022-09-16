interface ImageObject {
  imageUrl: string;
  imageKey: string;
}

export interface AktualitaDoc {
  id: string;
  date: string;
  title: string;
  perex: string;
  message: string;
  image: ImageObject;
}
