import React from "react";
import Carousel from "./Common/Carousel";

function MayYouLikes() {
  const items = [
    {
      name: "Lindale Outdoor Wooden Swing & Slide Playset",
      price: "AED 10,529",
      beforePrice: "AED 13,161",
      image: "./images/card/card5.png",
      discount: "20% OFF",
      rating: 3.9,
      priceMatch: "PRICE MATCH PROMISE",
      delivery: "Free Delivery",
    },
    {
      name: "Ching Ching - Smart Coupe - Green",
      price: "AED 475",
      beforePrice: "AED 595",
      image: "./images/card/card2.png",
      discount: "",
      priceMatch: "PRICE MATCH PROMISE",
      rating: 3.9,
      delivery: "Free Delivery",
    },
    {
      name: "Aptamil - Advance 1 Next Generation Infant",
      price: "AED 10,529",
      beforePrice: "AED 13,161",
      image: "./images/card/card3.png",
      discount: "20% OFF",
      rating: 3.9,
      delivery: "Free Delivery",
    },
    {
      name: "Fox 2 Complete Black",
      price: "AED 10,625",
      beforePrice: "AED 13,281",
      image: "./images/card/card4.png",
      discount: "",
      rating: 3.9,
      delivery: "Free Delivery",
    },

    {
      name: "Lindale Outdoor Wooden Swing & Slide Playset",
      price: "AED 634",
      beforePrice: "AED 845",
      image: "./images/card/card1.png",
      discount: "20% OFF",
      rating: 3.9,
      delivery: "Free Delivery",
    },
  ];
  return (
    <>
      <div className="py-10">
        <Carousel items={items} title="You May Also Like" />
      </div>
      <div className="py-10">
        <Carousel items={items} title="Frequently Bought Together" />
      </div>
    </>
  );
}

export default MayYouLikes;
