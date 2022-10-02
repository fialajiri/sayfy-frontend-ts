import axios from "axios";
import { AXIOS_CONFIG } from "../../interfaces/axios-config";
import { GalleryDoc } from "../../interfaces/models";

interface iData {
  key: string;
  signedUrl: string;
}

const createNewGallery = async (galleryName: string, images: File[]): Promise<GalleryDoc> => {
  const imagesKey: string[] = [];

  const { data: gallery }: { data: GalleryDoc } = await axios.post(
    `${process.env.BACKEND_URL}/api/gallery`,
    { title: galleryName, images: imagesKey },
    AXIOS_CONFIG
  );

  for (const image of images) {
    const filePath = `${galleryName}/${image.name}`;
    const fileType = image.type;

    const {
      data: { key, signedUrl },
    }: { data: iData } = await axios.post(
      `${process.env.BACKEND_URL}/api/upload`,
      {
        filePath,
        fileType,
      },
      AXIOS_CONFIG
    );

    await axios.put(signedUrl, image, { headers: { "Content-Type": fileType } });

    imagesKey.push(key);
  }
  
  await axios.put(
    `${process.env.BACKEND_URL}/api/gallery/${gallery.id}`,
    { title: galleryName, images: imagesKey },
    AXIOS_CONFIG
  );

  return gallery;
};

export default createNewGallery;
