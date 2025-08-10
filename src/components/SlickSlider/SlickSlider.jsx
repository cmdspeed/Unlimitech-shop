import { useEffect, useState } from "react";
import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel";

export const SlickSlider = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?limit=3")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      setTimeout(() => {
        $(".my-slider").not(".slick-initialized").slick({
          dots: true,
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
    <div className="my-slider">
      {images.map((img) => (
        <div key={img.id}>
          <img
            src={img.download_url}
            alt={img.author}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      ))}
    </div>
  );
};
