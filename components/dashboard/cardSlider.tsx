"use client";

import ExchangeSlide from "./exchange-slide";
import React from "react";
import Slider from "react-slick";

function CardSlider() {
  const symbols = [
    "BINANCE:BTCUSD",
    "COINBASE:ETHUSD",
    "COINBASE:USDTUSD",
    "BINANCE:BNBUSD",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container px-6">
      <Slider className="flex space-x-2" {...settings}>
        {symbols.map((slide, i) => (
          <div key={i}>
            <ExchangeSlide
              cryptoPair={slide}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CardSlider;
