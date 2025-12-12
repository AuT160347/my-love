import React, { useState } from "react";
import ImageSliderModal from "./ImageSliderModal";
import "./App.css";

export default function App() {
  const [open, setOpen] = useState(false);

  const images = [
    "/img/i1.jpg",
    "/img/i2.jpg",
    "/img/i3.jpg",
    "/img/i4.jpg",
    "/img/i5.jpg",
    "/img/i6.jpg",
    "/img/i7.jpg",
    "/img/i8.jpg",
    "/img/i9.jpg",
    "/img/i10.jpg",
  ];

  return (
    <div className="app-wrapper">
      <div className="hearts-bg" />

      <div className="app-content">
        <button
          onClick={() => setOpen(true)}
          className="love-btn"
        >
          MY LUV 💗
        </button>
      </div>

      <ImageSliderModal
        open={open}
        onClose={() => setOpen(false)}
        images={images}
      />
    </div>
  );
}
