import React, { useState } from "react";
import ImageSliderModal from "./ImageSliderModal";
import "./App.css";

// import รูป
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

export default function App() {
  const [open, setOpen] = useState(false);

  const images = [
    i1, i2, i3, i4, i5,
    i6, i7, i8, i9, i10
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
