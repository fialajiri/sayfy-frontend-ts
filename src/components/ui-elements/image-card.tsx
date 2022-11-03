import Image from "next/image";
import { useState } from "react";

interface ImageCardProps {
  imageUrl: string;
  alt: string;
  title?: string;
}
const cloudFormationUrl = `https://d3o6i10cj9gxf0.cloudfront.net`;
const filter = `fit-in/600x400`;

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, title, alt }) => {
  const [src, setSrc] = useState(
    `${cloudFormationUrl}/${filter}/${
      imageUrl.includes("https")
        ? imageUrl.replace(process.env.IMAGE_DOMAIN as string, "")
        : imageUrl
    }`
  );
  const imagePath = imageUrl.includes("https")
    ? imageUrl.replace(process.env.IMAGE_DOMAIN as string, "")
    : imageUrl;

  const imageFinalUrl = `${cloudFormationUrl}/${filter}/${imagePath}`;

  const fallBackUrl = imageUrl.includes("https")
    ? imageUrl
    : `${process.env.IMAGE_DOMAIN}/${imageUrl}`;

  return (
    <div className="image-card__container">
      {title && <p className="image-card__image-title">{title}</p>}
      <Image
        src={fallBackUrl}
        width={400}
        height={260}   
        quality={25}     
        alt={alt}
       
      />
    </div>
  );
};

export default ImageCard;
