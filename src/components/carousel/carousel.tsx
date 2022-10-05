import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { AktualitaDoc } from "../../models/models";
import AktualitaCard from "../aktuality/aktualita-card";

interface NewsCarouselProps {
  aktuality: AktualitaDoc[];
}

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const Carousel: React.FC<NewsCarouselProps> = ({ aktuality }) => {
  const AktualityCards = aktuality.map((aktualita) => (
    <AktualitaCard aktualita={aktualita} key={aktualita.id} />
  ));

  return (
    <AliceCarousel
      mouseTracking
      items={AktualityCards}
      controlsStrategy="alternate"
      responsive={responsive}
    />
  );
};

export default Carousel;
