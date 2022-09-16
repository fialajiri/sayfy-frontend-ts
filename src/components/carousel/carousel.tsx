import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const newsData = [
  <div data-value="1" key={1}>
    <p>This is news 1</p>
  </div>,
  <div data-value="2" key={2}>
    <p>This is news 2</p>
  </div>,
  <div data-value="3" key={3}>
    <p>This is news 3</p>
  </div >,
  <div data-value="4" key={4}>
    <p>This is news 4</p>
  </div>,
  <div data-value="5" key={5}>
    <p>This is news 5</p>
  </div>,
];

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const Carousel: React.FC = () => {
  return <AliceCarousel mouseTracking items={newsData} controlsStrategy="alternate" responsive={responsive}  />;
};

export default Carousel;
