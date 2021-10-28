import React from "react";
import Card from "./Card";

import image1 from "./assets/image1.jpg";
import image2 from './assets/image2.jpg'
import image3 from './assets/image3.jpg'

const cards = [
  {
    id: 1,
    title: "Title on deck",
    image: image1,
    url: "",
  },
  {
    id: 2,
    title: "Title on deck",
    image: image2,
    url: "",
  },
  {
    id: 3,
    title: "Title on deck",
    image: image3,
    url: "",
  },
  {
    id: 4,
    title: "Title on deck",
    image: image1,
    url: "",
  },
  {
    id: 5,
    title: "Title on deck",
    image: image2,
    url: "",
  },
  {
    id: 6,
    title: "Title on deck",
    image: image3,
    url: "",
  }
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-200">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
