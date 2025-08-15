import { useEffect, useMemo, useState } from "react";
import "../styles/product.less";

export const Products = () => {
  const [images, setImages] = useState([]);
  const width = 1000;
  const height = 1000;

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

  // Rozkładamy obrazki na 4 kolumny: 0..3
  const columns = useMemo(() => {
    const cols = [[], [], [], []];
    images.forEach((img, idx) => {
      cols[idx % 4].push(img);
    });
    return cols;
  }, [images]);

  // Kolumny 0 i 2: DUŻY potem MAŁY
  // Kolumny 1 i 3: MAŁY potem DUŻY
  const renderColumn = (colItems, colIndex) => {
    const invert = colIndex % 2 === 1; // odwrócenie: 1 i 3
    const ordered =
      colItems.length === 2
        ? invert
          ? [
              { ...colItems[0], size: "small" },
              { ...colItems[1], size: "large" },
            ]
          : [
              { ...colItems[0], size: "large" },
              { ...colItems[1], size: "small" },
            ]
        : // fallback gdy mniej niż 2 elementy
          colItems.map((it, i) => ({
            ...it,
            size: invert
              ? i === 0
                ? "small"
                : "large"
              : i === 0
              ? "large"
              : "small",
          }));

    return (
      <div
        className={`products__col ${invert ? "products__col--invert" : ""}`}
        key={`col-${colIndex}`}
      >
        {ordered.map((img, i) => (
          <a
            href={img.link}
            key={`${colIndex}-${i}`}
            className={`products__item ${img.size}`}
          >
            <img src={img.url} alt={img.title} loading="lazy" />
            <div className="products__description">{img.title}</div>
          </a>
        ))}
      </div>
    );
  };

  return (
    <div className="products container">
      <div className="products__grid">
        {columns.map((col, idx) => renderColumn(col, idx))}
      </div>
    </div>
  );
};
