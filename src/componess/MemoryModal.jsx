// MemoryModal.jsx
import React, { useEffect } from "react";

export default function MemoryModal({ open, onClose, children, title }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose?.();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.45)",
        display: "grid",
        placeItems: "center",
        padding: 16,
        zIndex: 50,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(720px, 100%)",
          borderRadius: 18,
          background: "white",
          boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "14px 16px",
            borderBottom: "1px solid rgba(0,0,0,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <div style={{ fontWeight: 900 }}>{title || "ความทรงจำของเรา"}</div>
          <button
            onClick={onClose}
            style={{
              border: "1px solid rgba(0,0,0,0.12)",
              background: "white",
              borderRadius: 12,
              padding: "8px 10px",
              cursor: "pointer",
              fontWeight: 700,
            }}
          >
            ปิด ✕
          </button>
        </div>

        <div style={{ padding: 16, maxHeight: "70vh", overflow: "auto" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
