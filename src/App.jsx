import React, { useState } from "react";
import ImageSliderModal from "./ImageSliderModal";
import "./App.css"; // 👈 เพิ่มไฟล์ CSS

export default function App() {
  const [open, setOpen] = useState(false);

  const images = [
    "./src/img/i1.jpg",
    "./src/img/i2.jpg",
    "./src/img/i3.jpg",
    "./src/img/i4.jpg",
    "./src/img/i5.jpg",
    "./src/img/i6.jpg",
    "./src/img/i7.jpg",
    "./src/img/i8.jpg",
    "./src/img/i9.jpg",
    "./src/img/i10.jpg",
  ];

  return (
    <div className="app-wrapper">
      {/* พื้นหลังหัวใจ */}
      <div className="hearts-bg" />

      {/* เนื้อหาหลัก */}
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
