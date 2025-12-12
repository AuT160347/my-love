import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function ImageSliderModal({ open, onClose, images = [] }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (!open) return;
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [open, images.length]);

    if (!open) return null;

    const handleClose = () => {
        onClose();

        Swal.fire({
            html: `
    <div style="font-size:72px; margin-bottom:10px;">
      💗
    </div>
    <div style="font-size:22px; font-weight:800;">
      ใจอ่อนได้แล้วนะ
    </div>
    <div style="margin-top:6px; opacity:0.8;">
      เค้ารักเธอนะรักที่สุด เปิดใจกลับมาได้แล้ว
    </div>
  `,
            showConfirmButton: true,
            confirmButtonText: "ยิ้มให้หน่อย 😊",
            background: "#fff0f5",
            color: "#d6336c",
            confirmButtonColor: "#ff4d6d",
            showClass: {
                popup: "animate__animated animate__zoomIn"
            },
            hideClass: {
                popup: "animate__animated animate__zoomOut"
            }
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
