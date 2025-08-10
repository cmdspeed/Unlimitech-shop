import { useEffect, useState } from "react";
import "../styles/product.less";

export const Products = () => {
  const [images, setImages] = useState([]);
  const width = 600;
  const height = 600;

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?limit=8")
      .then((res) => res.json())
      .then((data) => {
        const resized = data.map((img, idx) => ({
          ...img,
          url: `https://picsum.photos/id/${img.id}/${width}/${height}`,
          title:
            [
              "Baleriny",
              "Jazzówki",
              "Mokasyny",
              "Czółenka",
              "Sandały",
              "Kozaki",
              "Półbuty",
              "Wyprzedaż",
            ][idx] || `Kategoria ${idx + 1}`,
          link: "#",
        }));
        setImages(resized);
      });
  }, []);

  return (
    <div className="products container my-4">
      <div className="products__items row g-3">
        {images.map((img, idx) => (
          <div className="col-6" key={idx}>
            <a
              href={img.link}
              className="products__item d-block position-relative rounded overflow-hidden"
            >
              <img src={img.url} alt={img.title} loading="lazy" />
              <div className="products__description position-absolute top-50 start-50 translate-middle ">
                {img.title}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
