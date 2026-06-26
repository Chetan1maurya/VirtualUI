import React, { useState } from "react";

export const EarbudsCard = ({
  image = "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80",
  title = "Pro Wireless Earbuds",
  price = 149.99,
  currency = "$",
  rating = 4.8,
  accent = "#6366f1",
  bg = "#0f172a",
  features = ["Active Noise Cancelling", "30h Battery Life", "IPX7 Waterproof", "Wireless Charging"],
  onAddToCart = () => {}
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
        width: "280px",
        border: "1px solid " + (hovered ? alpha(accent, 0.3) : "rgba(255,255,255,0.07)"),
        fontFamily: "system-ui,sans-serif",
        transition: "transform 0.25s, box-shadow 0.25s",
        transform: hovered ? "translateY(-4px)" : "translateY(0px)",
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.5)" : "0 4px 20px rgba(0,0,0,0.3)"
      }}
    >
      <div style={{ position: "relative", width: "100%", height: "220px", display: "flex", alignItems: "center", justifyContent: "center", background: "#020617" }}>
        <img 
          src={image} 
          alt={title} 
          style={{ 
            width: "80%", 
            height: "80%", 
            objectFit: "contain", 
            transform: hovered ? "scale(1.05)" : "scale(1)", 
            transition: "transform 0.4s ease" 
          }} 
        />
      </div>
      <div style={{ padding: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#fff", margin: 0 }}>{title}</h3>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#fbbf24" stroke="none"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>{rating}</span>
          </div>
        </div>
        
        <div style={{ fontSize: "24px", fontWeight: "800", color: "#fff", marginBottom: "16px" }}>
          {currency}{price.toFixed(2)}
        </div>
        
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: "8px" }}>
          {features.map((f, i) => (
            <li key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>
              <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: accent }} />
              {f}
            </li>
          ))}
        </ul>
        
        <button
          onClick={onAddToCart}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "none",
            background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")",
            color: "#fff",
            fontSize: "14px",
            fontWeight: "700",
            cursor: "pointer",
            fontFamily: "inherit",
            transition: "transform 0.2s",
            transform: hovered ? "scale(1.02)" : "scale(1)"
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};