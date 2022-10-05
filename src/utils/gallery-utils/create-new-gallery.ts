import axios from "axios";
import { AXIOS_CONFIG } from "../../models/axios-config";
import { GalleryDoc } from "../../models/models";
import uploadFileToS3 from "../upload-to-s3";

const createNewGallery = async (galleryName: string, images: File[]): Promise<GalleryDoc> => {
  const imagesKey: string[] = [];

  const { data: gallery }: { data: GalleryDoc } = await axios.post(
    `${process.env.BACKEND_URL}/api/gallery`,
    { title: galleryName, images: imagesKey },
    AXIOS_CONFIG
  );

  for (const image of images) {
    imagesKey.push(await uploadFileToS3(image, galleryName));
  }

  await axios.put(
    `${process.env.BACKEND_URL}/api/gallery/${gallery.id}`,
    { title: galleryName, images: imagesKey },
    AXIOS_CONFIG
  );

  return gallery;
};

export default createNewGallery;
