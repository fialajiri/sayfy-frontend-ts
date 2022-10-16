import axios from "axios";
import { GalleryDoc } from "../../models/models";
import { HttpError } from "../../models/error-model";

export const getGalleries = async () => {
  let galleries: GalleryDoc[];

  try {
    const data = await axios.get(`${process.env.BACKEND_URL}/api/gallery/`);
    galleries = data.data;
  } catch (err: any) {
    throw new HttpError(err.response?.data, err.response?.status);
  }

  return galleries;
};

export const getGallery = async (idOrTitle: string) => {
  let gallery: GalleryDoc;

  try {
    const data = await axios.get(`${process.env.BACKEND_URL}/api/gallery/${idOrTitle}`);
    gallery = data.data;
  } catch (err: any) {
    throw new HttpError(err.response?.data, err.response?.status);
  }

  return gallery;
};
