import React from "react";
import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

interface ImageCarouselProps {
  class: string;
  images: {
    imageUrl: string;
    imageId: string;
    imageName: string;
  }[];
}

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 2 },
};

const CarouselImage: React.FC<ImageCarouselProps> = (props) => {
  const Images = props.images.map((image) => (
    <div className={props.class}>
      <Image
        src={image.imageUrl}
        key={image.imageId}
        alt={image.imageName}
        objectFit="cover"
        layout="fill"
      />
    </div>
  ));

  return (
    <AliceCarousel
      mouseTracking
      items={Images}
      controlsStrategy="alternate"
      responsive={responsive}
    />
  );
};

export default CarouselImage;
