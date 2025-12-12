// History.jsx
import React from "react";

export default function History({ memories = [] }) {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      {memories.map((m) => (
        <div
          key={m.id}
          style={{
            display: "grid",
            gridTemplateColumns: "96px 1fr",
            gap: 12,
            alignItems: "center",
            padding: 12,
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: 14,
            background: "rgba(255,255,255,0.75)",
          }}
        >
          <img
            src={m.img}
            alt={m.title}
            style={{
              width: 96,
              height: 96,
              borderRadius: 14,
              objectFit: "cover",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
          />
          <div>
            <div style={{ fontWeight: 800, fontSize: 16 }}>{m.title}</div>
            <div style={{ opacity: 0.75, marginTop: 4 }}>{m.date}</div>
            <div style={{ marginTop: 6, lineHeight: 1.5 }}>{m.note}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
