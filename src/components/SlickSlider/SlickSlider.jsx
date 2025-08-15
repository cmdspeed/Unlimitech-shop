import { useEffect, useState } from "react";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel";
import leftArrow from "../../icon/leftArrow.svg";
import rightArrow from "../../icon/rightArrow.svg";
import "../styles/slickSlider.less";

export const SlickSlider = () => {
  const [images, setImages] = useState([]);
  const height = 520;

  useEffect(() => {
    const isDesktop = window.innerWidth >= 768;

    const width = isDesktop ? 1400 : 358;

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
        const isPC = window.innerWidth >= 1000;
        $(".slider")
          .not(".slick-initialized")
          .slick({
            dots: true,
            arrows: isPC,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 3000,
            prevArrow: `<button type="button" class="slick-prev"><img src="${leftArrow}" alt="prev"/></button>`,
            nextArrow: `<button type="button" class="slick-next"><img src="${rightArrow}" alt="next"/></button>`,
          });
      }, 0);
    }
  }, [images]);

  if (images.length === 0) {
    return <p>Ładowanie slidera...</p>;
  }

  return (
    <div className="slider mx-auto p-0 row ">
      {images.map((image) => (
        <div key={image.id} className="slider__item col-12">
          <div className="slider__image__wrapper position-relative overflow-hidden ">
            <img
              src={image.img}
              alt={image.title}
              className="slider__image d-block object-fit-cover rounded-5"
              loading="lazy"
            />
            <div className="slider__overlay position-absolute">
              <div className="slider__overlay__text">
                <h1 className="slider__overlay__title">{image.title}</h1>
                <p className="slider__overlay__desc fw-medium">
                  {image.description}
                </p>
              </div>
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
