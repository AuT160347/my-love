import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

// ✅ import รูปที่นี่เลย
import i1 from "./img/i1.jpg";
import i2 from "./img/i2.jpg";
import i3 from "./img/i3.jpg";
import i4 from "./img/i4.jpg";
import i5 from "./img/i5.jpg";
import i6 from "./img/i6.jpg";
import i7 from "./img/i7.jpg";
import i8 from "./img/i8.jpg";
import i9 from "./img/i9.jpg";
import i10 from "./img/i10.jpg";

const images = [
  i1, i2, i3, i4, i5,
  i6, i7, i8, i9, i10
];

export default function ImageSliderModal({ open, onClose }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!open) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [open]);

  if (!open) return null;

  const handleClose = () => {
    onClose();

    Swal.fire({
      html: `
        <div style="font-size:72px;">💗</div>
        <div style="font-size:22px; font-weight:800;">
          ใจอ่อนได้แล้วนะ
        </div>
        <div style="opacity:0.8;">
          เค้ารักเธอนะรักที่สุด เปิดใจกลับมาได้แล้ว
        </div>
      `,
      confirmButtonText: "ยิ้มให้หน่อย 😊",
      background: "#fff0f5",
      color: "#d6336c",
      confirmButtonColor: "#ff4d6d",
    });
  };

  const prev = () =>
    setIndex((index - 1 + images.length) % images.length);
  const next = () =>
    setIndex((index + 1) % images.length);

  return (
    <div
      onClick={handleClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        display: "grid",
        placeItems: "center",
        zIndex: 100,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(90vw, 420px)",
          background: "#000",
          borderRadius: 18,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <img
          src={images[index]}
          alt="memory"
          style={{
            width: "100%",
            height: "70vh",
            objectFit: "cover",
          }}
        />

        <button onClick={prev} style={navBtnStyle("left")}>‹</button>
        <button onClick={next} style={navBtnStyle("right")}>›</button>

        <div
          style={{
            position: "absolute",
            bottom: 10,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: 6,
          }}
        >
          {images.map((_, i) => (
            <span
              key={i}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: i === index ? "#ff4d6d" : "#aaa",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function navBtnStyle(side) {
  return {
    position: "absolute",
    top: "50%",
    [side]: 10,
    transform: "translateY(-50%)",
    background: "rgba(0,0,0,0.4)",
    color: "white",
    border: "none",
    borderRadius: "50%",
    width: 36,
    height: 36,
    fontSize: 24,
    cursor: "pointer",
  };
}
