import Image from "next/image";

interface ImageCardProps {
  imageUrl: string;
  alt:string;
  isKey?: boolean;
  title?: string;
  isClickable?:boolean
  onClick?: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, isKey, title, onClick, alt }) => {
  const imagePath = isKey ? `${process.env.IMAGE_DOMAIN}/${imageUrl}` : imageUrl;

  return (
      <div className="image-card__container" onClick={onClick ? onClick : undefined}>
        {title && <p className="image-card__image-title">{title}</p>}
      <Image src={imagePath} layout="fill" objectFit="cover" alt={alt} />
    </div>
  );
};

export default ImageCard;
