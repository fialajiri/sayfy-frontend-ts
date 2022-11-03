import Image from "next/image";

interface ImageCardProps {
  imageUrl: string;
  alt: string;
  title?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, title, alt }) => {
  const cloudFormationUrl = `https://d3o6i10cj9gxf0.cloudfront.net`;
  const filter = `fit-in/600x400`;
  const imagePath = imageUrl.includes("https")
    ? imageUrl.replace(process.env.IMAGE_DOMAIN as string, "")
    : imageUrl;

  const imageFinalUrl = `${cloudFormationUrl}/${filter}/${imagePath}`;

  console.log(imageFinalUrl)

  return (
    <div className="image-card__container">
      {title && <p className="image-card__image-title">{title}</p>}
      <Image src={imageFinalUrl} layout="fill" objectFit="cover" alt={alt} />
    </div>
  );
};

export default ImageCard;
