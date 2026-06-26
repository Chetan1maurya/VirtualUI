import React, { useState } from "react";

export const CarCard = ({
  image = "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=600&q=80",
  model = "Tesla Model S",
  year = 2023,
  price = 79990,
  currency = "$",
  mileage = 1200,
  badgeText = "New",
  accent = "#6366f1",
  bg = "#0f172a",
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
        width: "300px",
        border: "1px solid " + (hovered ? alpha(accent, 0.3) : "rgba(255,255,255,0.07)"),
        fontFamily: "system-ui,sans-serif",
        transition: "transform 0.25s, box-shadow 0.25s",
        transform: hovered ? "translateY(-4px)" : "translateY(0px)",
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.5)" : "0 4px 20px rgba(0,0,0,0.3)"
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "180px", overflow: "hidden" }}>
        <img src={image} alt={model} style={{ width: "100%", height: "100%", objectFit: "cover", transform: hovered ? "scale(1.05)" : "scale(1)", transition: "transform 0.4s ease" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }} />
        {badgeText && (
          <div style={{ position: "absolute", top: "12px", left: "12px", padding: "4px 10px", borderRadius: "20px", background: alpha(accent, 0.85), fontSize: "10px", fontWeight: "700", color: "#fff", textTransform: "uppercase", letterSpacing: "0.5px" }}>{badgeText}</div>
        )}
      </div>
      <div style={{ padding: "18px" }}>
        <h3 style={{ fontSize: "15px", fontWeight: "700", color: "#fff", margin: "0 0 8px", lineHeight: 1.4 }}>{model}</h3>
        <div style={{ display: "flex", gap: "12px", marginBottom: "8px" }}>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", fontWeight: "500" }}>{year}</div>
          <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", fontWeight: "500" }}>{mileage} miles</div>
        </div>
        <div style={{ fontSize: "18px", fontWeight: "800", color: accent, marginBottom: "18px" }}>{currency}{price.toLocaleString()}</div>
        <button
          onClick={onButtonClick}
          style={{ width: "100%", padding: "11px", borderRadius: "12px", border: "none", background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")" , color: "#fff", fontSize: "13px", fontWeight: "700", cursor: "pointer", fontFamily: "inherit" }}
        >Buy Now</button>
      </div>
    </div>
  );
};