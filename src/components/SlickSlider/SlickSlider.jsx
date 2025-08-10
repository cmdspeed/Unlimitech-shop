import { useEffect, useState } from "react";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel";
import "../styles/slickSlider.less";

export const SlickSlider = () => {
  const [images, setImages] = useState([]);
  const width = 358;
  const height = 520;

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?limit=3")
      .then((res) => res.json())
      .then((data) => {
        const slidesWithText = data.map((img, idx) => ({
          id: img.id,
          img: `https://picsum.photos/id/${img.id}/${width}/${height}`,
          title: idx === 0 ? "Nowa kolekcja" : `Nowa kolekcja ${idx + 1}`,
          description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab.",
          buttonText: "Zobacz więcej",
        }));
        setImages(slidesWithText);
      });
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      setTimeout(() => {
        $(".slider").not(".slick-initialized").slick({
          dots: true,
          arrows: false,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          adaptiveHeight: true,
          autoplay: true,
          autoplaySpeed: 3000,
        });
      }, 0);
    }
  }, [images]);

  if (images.length === 0) {
    return <p>Ładowanie slidera...</p>;
  }

  return (
    <div className="slider mx-auto p-0">
      {images.map((image) => (
        <div key={image.id} className="slider__item">
          <div className="slider__image__wrapper position-relative overflow-hidden ">
            <img
              src={image.img}
              alt={image.title}
              className="slider__image d-block object-fit-cover rounded-5"
              loading="lazy"
            />
            <div className="slider__overlay position-absolute">
              <h2>{image.title}</h2>
              <p className="fw-medium">{image.description}</p>
              <button className="bg-transparent border border-white rounded text-white fw-bold btn">
                {image.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
