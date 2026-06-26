import React, { useState } from "react";

export const LandCruiserCard = ({
  image = "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80",
  title = "Toyota Land Cruiser",
  year = "2023",
  price = "$85,000",
  features = ["4WD", "V8 Engine", "7 Seats", "Off-road Package"],
  accent = "#e11d48",
  bg = "#020617",
  onButtonClick = () => {}
}) => {
  const [hovered, setHovered] = useState(false);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1,3),16), g = parseInt(hex.slice(3,5),16), b = parseInt(hex.slice(5,7),16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: bg,
        borderRadius: "20px",
        overflow: "hidden",
        width: "320px",
        border: "1px solid " + (hovered ? alpha(accent, 0.3) : "rgba(255,255,255,0.07)"),
        fontFamily: "system-ui,sans-serif",
        transition: "transform 0.25s, box-shadow 0.25s",
        transform: hovered ? "translateY(-4px)" : "translateY(0px)",
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.5)" : "0 4px 20px rgba(0,0,0,0.3)"
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "180px", overflow: "hidden" }}>
        <img src={image} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover", transform: hovered ? "scale(1.05)" : "scale(1)", transition: "transform 0.4s ease" }} />
        <div style={{ position: "absolute", top: "12px", right: "12px", padding: "4px 10px", borderRadius: "20px", background: alpha(accent, 0.85), fontSize: "12px", fontWeight: "700", color: "#fff" }}>{year}</div>
      </div>
      <div style={{ padding: "18px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
          <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#fff", margin: 0 }}>{title}</h3>
          <div style={{ fontSize: "16px", fontWeight: "800", color: accent }}>{price}</div>
        </div>
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 18px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {features.map((f, i) => (
            <li key={i} style={{ padding: "4px 10px", borderRadius: "20px", background: alpha(accent, 0.12), border: "1px solid " + alpha(accent, 0.3), fontSize: "11px", fontWeight: "600", color: accent }}>{f}</li>
          ))}
        </ul>
        <button
          onClick={onButtonClick}
          style={{ width: "100%", padding: "12px", borderRadius: "10px", border: "none", background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")", color: "#fff", fontSize: "14px", fontWeight: "700", cursor: "pointer", fontFamily: "inherit" }}
        >
          View Details
        </button>
      </div>
    </div>
  );
}