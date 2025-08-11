import { useEffect, useState } from "react";
import $ from "jquery";
import "../styles/category.less";

export const Category = () => {
  const [products, setProducts] = useState([]);

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

  return (
    <div>
      {/* Pasek kategorii z własnym scroll */}
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
    </div>
  );
};
