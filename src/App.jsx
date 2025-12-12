import React, { useState } from "react";
import ImageSliderModal from "./ImageSliderModal";
import "./App.css";

export default function App() {
  const [open, setOpen] = useState(false);

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
      />
    </div>
  );
}
