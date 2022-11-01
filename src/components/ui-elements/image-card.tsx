import Image from "next/image";

interface ImageCardProps {
  imageUrl: string;
  alt: string;
  title?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, title, alt }) => {
  const imagePath = imageUrl.includes("https")
    ? imageUrl
    : `${process.env.IMAGE_DOMAIN}/${imageUrl}`;

  return (
    <div className="image-card__container">
      {title && <p className="image-card__image-title">{title}</p>}
      <Image src={imagePath} layout="fill" objectFit="cover" alt={alt} />
    </div>
  );
};

export default ImageCard;
