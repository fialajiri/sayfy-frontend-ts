import axios from "axios";
import { AXIOS_CONFIG } from "../../models/axios-config";
import { HttpError } from "../../models/error-model";
import { GalleryDoc } from "../../models/models";
import uploadFileToS3 from "../upload-to-s3";

const createNewGallery = async (galleryName: string, images: File[]): Promise<void> => {
  const imagesKey: string[] = [];

  const newEmptyGallery: GalleryDoc = await createEmptyGallery(galleryName);

  for (const image of images) {
    const imageUrl = await uploadFileToS3(image, galleryName);
    imagesKey.push(imageUrl);
  }

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

