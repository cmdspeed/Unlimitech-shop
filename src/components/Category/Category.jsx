import { useEffect, useState } from "react";
import $ from "jquery";
import "../styles/category.less";

export const Category = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("Promocje");
  const width = 600;
  const height = 600;

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?limit=12")
      .then((res) => res.json())
      .then((data) => {
        const mockData = data.map((img, idx) => {
          const onSale = idx % 2 === 0;
          const isNew = idx % 3 === 0;
          const isBestseller = idx % 4 === 0;
          const basePrice = 399.99;
          const discountPrice = onSale ? 350.1 : basePrice;
          return {
            id: img.id,
            name: `Buty model ${idx + 1}`,
            available: true,
            isNew,
            onSale,
            isBestseller,
            price: discountPrice,
            oldPrice: onSale ? basePrice : null,
            lowestPrice30d: onSale ? 399.99 : null,
            url: `https://picsum.photos/id/${img.id}/${width}/${height}`,
            link: "#",
          };
        });
        setProducts(mockData);
      });
  }, []);

  const calcMargin = (index) => ({
    marginTop: `calc(${index * 2}rem + 0.57rem)`,
  });

  useEffect(() => {
    $(".section__categories span").on("click", function () {
      $(".section__categories span").removeClass("active");
      $(this).addClass("active");
      setFilter($(this).text());
    });
  }, []);

  const filteredProducts = products.filter((p) => {
    if (filter === "Promocje") return p.onSale;
    if (filter === "Nowości") return p.isNew;
    if (filter === "Bestsellery") return p.isBestseller;
    return true;
  });

  return (
    <div>
      <div>
        <div className="section__categories d-flex gap-3 overflow-x-auto">
          <span className="section__category active border-end border-1 border-dark">
            Promocje
          </span>
          <span className="section__category border-end border-1 border-dark">
            Nowości
          </span>
          <span className="section__category">Bestsellery</span>
        </div>
        <div className="seeMore">
          <a href="#" className="seeMore__link">
            zobacz wszystkie
          </a>
        </div>
      </div>

      <div className="products">
        {filteredProducts.slice(0, 4).map((p) => (
          <div className="card" key={p.id}>
            <div className="position-relative">
              <img
                src={p.url}
                alt={p.name}
                loading="lazy"
                className="card__img rounded-4 object-fit-cover"
              />
              {p.onSale && (
                <span className="card__onSale card__all text-white position-absolute top-0 start-0 rounded fw-bold">
                  PROMOCJA
                </span>
              )}
              {p.isNew && (
                <span
                  className="card__isNew card__all text-white rounded fw-bold position-absolute top-0 start-0"
                  style={calcMargin(p.onSale ? 1 : 0)}
                >
                  NOWOŚĆ
                </span>
              )}
              {p.isBestseller && (
                <span
                  className="card__isBestseller card__all text-white rounded fw-bold position-absolute top-0 start-0"
                  style={calcMargin((p.onSale ? 1 : 0) + (p.isNew ? 1 : 0))}
                >
                  BESTSELLER
                </span>
              )}
            </div>

            <div className="card-body">
              <h6 className="card__title fw-semibold">{p.name}</h6>
              <p className="card__available">
                Zapato | {p.available ? "Dostępny" : "Niedostępny"}
              </p>
              <div className="card__price d-flex">
                <span
                  className={`fw-bold ${
                    p.onSale
                      ? "card__price__sale text-white rounded-1"
                      : "card__price__normal"
                  }`}
                >
                  {p.price.toFixed(2)} zł
                </span>
                {p.oldPrice && (
                  <span className="card__price__old text-decoration-line-through">
                    {p.oldPrice.toFixed(2)} zł
                  </span>
                )}
              </div>
              {p.lowestPrice30d && (
                <p className="card__price__beforeSale">
                  Najniższa cena z 30 dni przed obniżką:{" "}
                  {p.lowestPrice30d.toFixed(2)} zł
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
