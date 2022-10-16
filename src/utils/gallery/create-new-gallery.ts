import axios from "axios";
import { AXIOS_CONFIG } from "../../models/axios-config";
import { GalleryDoc } from "../../models/models";
import { processFiles } from "../upload-to-s3";

const createNewGallery = async (galleryName: string, images: File[]): Promise<void> => {
  const newEmptyGallery: GalleryDoc = await createEmptyGallery(galleryName);

  const imagesKey = await processFiles(images, galleryName);

  await updateGallery(newEmptyGallery.id, galleryName, imagesKey);
};

export default createNewGallery;

const createEmptyGallery = async (galleryName: string) => {
  const { data: gallery }: { data: GalleryDoc } = await axios.post(
    `${process.env.BACKEND_URL}/api/gallery`,
    { title: galleryName, images: [] },
    AXIOS_CONFIG
  );

  return gallery;
};

const updateGallery = async (galleryId: string, galleryName: string, images: string[]) => {
  await axios.put(
    `${process.env.BACKEND_URL}/api/gallery/${galleryId}`,
    { title: galleryName, images },
    AXIOS_CONFIG
  );
};


