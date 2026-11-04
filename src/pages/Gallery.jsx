
const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1100&q=85",
    caption: "Dinner, served",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1100&q=85",
    caption: "A place to gather",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1100&q=85",
    caption: "Fresh from the market",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1100&q=85",
    caption: "Colour on a plate",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1100&q=85",
    caption: "Made in our kitchen",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1100&q=85",
    caption: "Around the table",
  },
];

export default function Gallery() {
  return (
    <>
      <section className="page-hero gallery-hero">
        <div className="wrap">
          <span className="eyebrow">
            LITTLE MOMENTS AT SAVORA
          </span>

          <h1>
            A feast for
            <br />
            <em>the eyes.</em>
          </h1>

          <p>
            Good food, good people and the moments in between.
          </p>
        </div>
      </section>

      <section className="wrap page-content">
        <div className="gallery-grid">
          {images.map((image, i) => (
            <figure
              className={`gallery-item gallery-${i + 1}`}
              key={image.id}
            >
              <img
                src={image.url}
                alt={image.caption}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  console.error("Image failed:", image.url);
                }}
              />

              <figcaption>{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
