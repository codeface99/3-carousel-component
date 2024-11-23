import { useEffect, useState } from "react";

type CarouselProps = {
  images: string[];
};

export const Carousel = ({ images }: CarouselProps): JSX.Element => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Autoplay logic
  useEffect(() => {
    if (isPaused) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [images.length, isPaused]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <div
        style={{
          height: "400px",
          width: "450px",
          overflow: "hidden",
          position: "relative",
          borderRadius: "4px",
        }}
      >
        <div
          style={{
            display: "flex",
            transition: "transform 0.3s",
            transform: `translateX(-${450 * currentImageIndex}px)`,
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {images.map((image, idx) => (
            <img
              key={`${image}-${idx}`}
              src={image}
              alt={`image ${idx}`}
              width="450px"
              height="400px"
            />
          ))}
        </div>

        <button
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            display: "block",
            height: "100%",
            backgroundColor: "transparent",
            border: "none",
            fontSize: "30px",
            color: "white",
            cursor: "pointer",
          }}
          onClick={() =>
            setCurrentImageIndex((prevValue) =>
              prevValue === 0 ? images.length - 1 : prevValue - 1
            )
          }
        >
          {"<"}
        </button>

        <button
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            display: "block",
            height: "100%",
            backgroundColor: "transparent",
            border: "none",
            fontSize: "30px",
            color: "white",
            cursor: "pointer",
          }}
          onClick={() =>
            setCurrentImageIndex((prevValue) => (prevValue + 1) % images.length)
          }
        >
          {">"}
        </button>
      </div>

      {/* CarouselControls */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        {images.map((image, idx) => (
          <button
            key={`${image}-${idx}`}
            onClick={() => setCurrentImageIndex(idx)}
            disabled={currentImageIndex === idx}
            style={{ cursor: "pointer" }}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
