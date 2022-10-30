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
  900: { items: 2 },
  1200: { items: 2 },
};

const CarouselImage: React.FC<ImageCarouselProps> = (props) => {
  const Images = props.images.map((image) => (
    <div className={props.class} key={image.imageId}>
      <Image
        src={image.imageUrl}        
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
