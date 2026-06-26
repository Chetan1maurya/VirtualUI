// src/components/Button/Button.jsx
import React, { useState } from "react";
var InteractiveCard = ({
  title = "Card Title",
  description = "A clean, interactive card component you can customize to your heart's content.",
  tag = "Featured",
  accentColor = "#6C63FF",
  backgroundColor = "#1a1a2e",
  textColor = "#e8e8f0",
  width = 340,
  onAction = null,
  actionLabel = "Explore"
}) => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [liked, setLiked] = useState(false);
  const handleAction = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
    if (onAction) onAction({ title, liked });
  };
  const styles = {
    card: {
      width,
      background: backgroundColor,
      borderRadius: 20,
      padding: "28px 28px 24px",
      boxSizing: "border-box",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      color: textColor,
      position: "relative",
      overflow: "hidden",
      cursor: "default",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      transform: hovered ? "translateY(-6px)" : "translateY(0)",
      boxShadow: hovered ? `0 20px 48px rgba(0,0,0,0.5), 0 0 0 1px ${accentColor}55` : "0 8px 24px rgba(0,0,0,0.3)"
    },
    glow: {
      position: "absolute",
      top: -60,
      right: -60,
      width: 180,
      height: 180,
      borderRadius: "50%",
      background: `radial-gradient(circle, ${accentColor}44 0%, transparent 70%)`,
      transition: "opacity 0.3s ease",
      opacity: hovered ? 1 : 0.4,
      pointerEvents: "none"
    },
    tag: {
      display: "inline-block",
      background: `${accentColor}22`,
      color: accentColor,
      border: `1px solid ${accentColor}55`,
      borderRadius: 6,
      padding: "3px 10px",
      fontSize: 11,
      fontFamily: "'Courier New', monospace",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      marginBottom: 16
    },
    title: {
      margin: "0 0 10px",
      fontSize: 22,
      fontWeight: "normal",
      lineHeight: 1.3,
      letterSpacing: "-0.01em",
      color: textColor
    },
    divider: {
      height: 1,
      background: `linear-gradient(to right, ${accentColor}88, transparent)`,
      margin: "14px 0",
      border: "none"
    },
    description: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.7,
      color: `${textColor}bb`,
      fontFamily: "'Georgia', serif"
    },
    footer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 22
    },
    button: {
      background: clicked ? accentColor : "transparent",
      color: clicked ? "#fff" : accentColor,
      border: `1.5px solid ${accentColor}`,
      borderRadius: 8,
      padding: "8px 18px",
      fontSize: 13,
      fontFamily: "'Courier New', monospace",
      letterSpacing: "0.05em",
      cursor: "pointer",
      transition: "background 0.15s ease, color 0.15s ease, transform 0.1s ease",
      transform: clicked ? "scale(0.96)" : "scale(1)",
      outline: "none"
    },
    likeBtn: {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: 20,
      padding: "4px 8px",
      borderRadius: 8,
      transition: "transform 0.2s ease",
      transform: liked ? "scale(1.3)" : "scale(1)",
      filter: liked ? "none" : "grayscale(1) opacity(0.5)"
    }
  };
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      style: styles.card,
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false)
    },
    /* @__PURE__ */ React.createElement("div", { style: styles.glow }),
    /* @__PURE__ */ React.createElement("div", { style: styles.tag }, tag),
    /* @__PURE__ */ React.createElement("h2", { style: styles.title }, title),
    /* @__PURE__ */ React.createElement("hr", { style: styles.divider }),
    /* @__PURE__ */ React.createElement("p", { style: styles.description }, description),
    /* @__PURE__ */ React.createElement("div", { style: styles.footer }, /* @__PURE__ */ React.createElement("button", { style: styles.button, onClick: handleAction }, actionLabel, " \u2192"), /* @__PURE__ */ React.createElement(
      "button",
      {
        style: styles.likeBtn,
        onClick: () => setLiked((l) => !l),
        title: liked ? "Unlike" : "Like"
      },
      liked ? "\u2665" : "\u2661"
    ))
  );
};

// src/components/CarCard/CarCard.jsx
import React2, { useState as useState2 } from "react";
var CarCard = ({
  image = "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=600&q=80",
  model = "Tesla Model S",
  year = 2023,
  price = 79990,
  currency = "$",
  mileage = 1200,
  badgeText = "New",
  accent = "#6366f1",
  bg = "#0f172a",
  onButtonClick = () => {
  }
}) => {
  const [hovered, setHovered] = useState2(false);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return /* @__PURE__ */ React2.createElement(
    "div",
    {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      style: {
        background: bg,
        borderRadius: "20px",
        overflow: "hidden",
        width: "300px",
        border: "1px solid " + (hovered ? alpha(accent, 0.3) : "rgba(255,255,255,0.07)"),
        fontFamily: "system-ui,sans-serif",
        transition: "transform 0.25s, box-shadow 0.25s",
        transform: hovered ? "translateY(-4px)" : "translateY(0px)",
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.5)" : "0 4px 20px rgba(0,0,0,0.3)"
      }
    },
    /* @__PURE__ */ React2.createElement("div", { style: { position: "relative", width: "100%", height: "180px", overflow: "hidden" } }, /* @__PURE__ */ React2.createElement("img", { src: image, alt: model, style: { width: "100%", height: "100%", objectFit: "cover", transform: hovered ? "scale(1.05)" : "scale(1)", transition: "transform 0.4s ease" } }), /* @__PURE__ */ React2.createElement("div", { style: { position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" } }), badgeText && /* @__PURE__ */ React2.createElement("div", { style: { position: "absolute", top: "12px", left: "12px", padding: "4px 10px", borderRadius: "20px", background: alpha(accent, 0.85), fontSize: "10px", fontWeight: "700", color: "#fff", textTransform: "uppercase", letterSpacing: "0.5px" } }, badgeText)),
    /* @__PURE__ */ React2.createElement("div", { style: { padding: "18px" } }, /* @__PURE__ */ React2.createElement("h3", { style: { fontSize: "15px", fontWeight: "700", color: "#fff", margin: "0 0 8px", lineHeight: 1.4 } }, model), /* @__PURE__ */ React2.createElement("div", { style: { display: "flex", gap: "12px", marginBottom: "8px" } }, /* @__PURE__ */ React2.createElement("div", { style: { fontSize: "12px", color: "rgba(255,255,255,0.45)", fontWeight: "500" } }, year), /* @__PURE__ */ React2.createElement("div", { style: { fontSize: "12px", color: "rgba(255,255,255,0.45)", fontWeight: "500" } }, mileage, " miles")), /* @__PURE__ */ React2.createElement("div", { style: { fontSize: "18px", fontWeight: "800", color: accent, marginBottom: "18px" } }, currency, price.toLocaleString()), /* @__PURE__ */ React2.createElement(
      "button",
      {
        onClick: onButtonClick,
        style: { width: "100%", padding: "11px", borderRadius: "12px", border: "none", background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")", color: "#fff", fontSize: "13px", fontWeight: "700", cursor: "pointer", fontFamily: "inherit" }
      },
      "Buy Now"
    ))
  );
};

// src/components/LandCruiserCard/LandCruiserCard.jsx
import React3, { useState as useState3 } from "react";
var LandCruiserCard = ({
  image = "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80",
  title = "Toyota Land Cruiser",
  year = "2023",
  price = "$85,000",
  features = ["4WD", "V8 Engine", "7 Seats", "Off-road Package"],
  accent = "#e11d48",
  bg = "#020617",
  onButtonClick = () => {
  }
}) => {
  const [hovered, setHovered] = useState3(false);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return /* @__PURE__ */ React3.createElement(
    "div",
    {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      style: {
        background: bg,
        borderRadius: "20px",
        overflow: "hidden",
        width: "320px",
        border: "1px solid " + (hovered ? alpha(accent, 0.3) : "rgba(255,255,255,0.07)"),
        fontFamily: "system-ui,sans-serif",
        transition: "transform 0.25s, box-shadow 0.25s",
        transform: hovered ? "translateY(-4px)" : "translateY(0px)",
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.5)" : "0 4px 20px rgba(0,0,0,0.3)"
      }
    },
    /* @__PURE__ */ React3.createElement("div", { style: { position: "relative", width: "100%", height: "180px", overflow: "hidden" } }, /* @__PURE__ */ React3.createElement("img", { src: image, alt: title, style: { width: "100%", height: "100%", objectFit: "cover", transform: hovered ? "scale(1.05)" : "scale(1)", transition: "transform 0.4s ease" } }), /* @__PURE__ */ React3.createElement("div", { style: { position: "absolute", top: "12px", right: "12px", padding: "4px 10px", borderRadius: "20px", background: alpha(accent, 0.85), fontSize: "12px", fontWeight: "700", color: "#fff" } }, year)),
    /* @__PURE__ */ React3.createElement("div", { style: { padding: "18px" } }, /* @__PURE__ */ React3.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" } }, /* @__PURE__ */ React3.createElement("h3", { style: { fontSize: "18px", fontWeight: "700", color: "#fff", margin: 0 } }, title), /* @__PURE__ */ React3.createElement("div", { style: { fontSize: "16px", fontWeight: "800", color: accent } }, price)), /* @__PURE__ */ React3.createElement("ul", { style: { listStyle: "none", padding: 0, margin: "0 0 18px", display: "flex", flexWrap: "wrap", gap: "8px" } }, features.map((f, i) => /* @__PURE__ */ React3.createElement("li", { key: i, style: { padding: "4px 10px", borderRadius: "20px", background: alpha(accent, 0.12), border: "1px solid " + alpha(accent, 0.3), fontSize: "11px", fontWeight: "600", color: accent } }, f))), /* @__PURE__ */ React3.createElement(
      "button",
      {
        onClick: onButtonClick,
        style: { width: "100%", padding: "12px", borderRadius: "10px", border: "none", background: "linear-gradient(135deg, " + accent + ", " + alpha(accent, 0.7) + ")", color: "#fff", fontSize: "14px", fontWeight: "700", cursor: "pointer", fontFamily: "inherit" }
      },
      "View Details"
    ))
  );
};

// src/components/EarbudsCard/EarbudsCard.jsx
import React4, { useState as useState4 } from "react";
var EarbudsCard = ({
  image = "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&q=80",
  title = "Pro Wireless Earbuds",
  price = 149.99,
  currency = "$",
  rating = 4.8,
  accent = "#6366f1",
  bg = "#0f172a",
  features = ["Active Noise Cancelling", "30h Battery Life", "IPX7 Waterproof", "Wireless Charging"],
  onAddToCart = () => {
  }
}) => {
  const [hovered, setHovered] = useState4(false);
  const alpha = (hex, op) => {
    const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
    return "rgba(" + r + "," + g + "," + b + "," + op + ")";
  };
  return /* @__PURE__ */ React4.createElement(
    "div",
    {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      style: {
        background: bg,
        borderRadius: "20px",
        overflow: "hidden",
        width: "280px",
        border: "1px solid " + (hovered ? alpha(accent, 0.3) : "rgba(255,255,255,0.07)"),
        fontFamily: "system-ui,sans-serif",
        transition: "transform 0.25s, box-shadow 0.25s",
        transform: hovered ? "translateY(-4px)" : "translateY(0px)",
        boxShadow: hovered ? "0 16px 40px rgba(0,0,0,0.5)" : "0 4px 20px rgba(0,0,0,0.3)"
      }
    },
    /* @__PURE__ */ React4.createElement("div", { style: { position: "relative", width: "100%", height: "220px", display: "flex", alignItems: "center", justifyContent: "center", background: "#020617" } }, /* @__PURE__ */ React4.createElement(
      "img",
      {
        src: image,
        alt: title,
        style: {
          width: "80%",
          height: "80%",
          objectFit: "contain",
          transform: hovered ? "scale(1.05)" : "scale(1)",
          transition: "transform 0.4s ease"
        }
      }
    )),
    /* @__PURE__ */ React4.createElement("div", { style: { padding: "20px" } }, /* @__PURE__ */ React4.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" } }, /* @__PURE__ */ React4.createElement("h3", { style: { fontSize: "16px", fontWeight: "700", color: "#fff", margin: 0 } }, title), /* @__PURE__ */ React4.createElement("div", { style: { display: "flex", alignItems: "center", gap: "4px" } }, /* @__PURE__ */ React4.createElement("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "#fbbf24", stroke: "none" }, /* @__PURE__ */ React4.createElement("path", { d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" })), /* @__PURE__ */ React4.createElement("span", { style: { fontSize: "13px", color: "rgba(255,255,255,0.7)" } }, rating))), /* @__PURE__ */ React4.createElement("div", { style: { fontSize: "24px", fontWeight: "800", color: "#fff", marginBottom: "16px" } }, currency, price.toFixed(2)), /* @__PURE__ */ React4.createElement("ul", { style: { listStyle: "none", padding: 0, margin: "0 0 20px", display: "flex", flexDirection: "column", gap: "8px" } }, features.map((f, i) => /* @__PURE__ */ React4.createElement("li", { key: i, style: { display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "rgba(255,255,255,0.6)" } }, /* @__PURE__ */ React4.createElement("div", { style: { width: "4px", height: "4px", borderRadius: "50%", background: accent } }), f))), /* @__PURE__ */ React4.createElement(
      "button",
      {
        onClick: onAddToCart,
        style: {
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
        }
      },
      "Add to Cart"
    ))
  );
};

// src/components/Pickup/Pickup.jsx
import React5, { useState as useState5 } from "react";
var Pickup = ({
  location = "Main Warehouse",
  address = "123 Logistics Ave, Suite 4B",
  slot = "10:00 AM \u2013 11:00 AM",
  status = "ready",
  statusVariant = "success",
  actionLabel = "Confirm Pickup",
  onAction = null
}) => {
  const [hovered, setHovered] = useState5(false);
  const [saved, setSaved] = useState5(false);
  const [clicked, setClicked] = useState5(false);
  const statusStyles = {
    success: { background: "#eaf3de", color: "#27500a" },
    info: { background: "#e6f1fb", color: "#0c447c" },
    warning: { background: "#faeeda", color: "#633806" },
    danger: { background: "#fcebeb", color: "#791f1f" }
  };
  const status$ = statusStyles[statusVariant] || statusStyles.info;
  const handleAction = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 200);
    if (onAction) onAction({ location, slot, saved });
  };
  return /* @__PURE__ */ React5.createElement(
    "div",
    {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      style: {
        background: "#ffffff",
        border: `0.5px solid ${hovered ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.12)"}`,
        borderRadius: 12,
        padding: "20px 20px 16px",
        transition: "transform 0.2s ease, border-color 0.2s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    },
    /* @__PURE__ */ React5.createElement(
      "span",
      {
        style: {
          display: "inline-block",
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          padding: "3px 9px",
          borderRadius: 8,
          alignSelf: "flex-start",
          background: status$.background,
          color: status$.color
        }
      },
      status
    ),
    /* @__PURE__ */ React5.createElement("div", null, /* @__PURE__ */ React5.createElement("p", { style: { margin: "0 0 4px", fontSize: 16, fontWeight: 500, color: "#111" } }, location), /* @__PURE__ */ React5.createElement("p", { style: { margin: "0 0 8px", fontSize: 13, color: "#666", lineHeight: 1.6 } }, address), /* @__PURE__ */ React5.createElement(
      "div",
      {
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          fontSize: 12,
          fontWeight: 500,
          color: "#444",
          background: "#f4f4f0",
          border: "0.5px solid rgba(0,0,0,0.1)",
          borderRadius: 8,
          padding: "4px 10px"
        }
      },
      /* @__PURE__ */ React5.createElement("span", { style: { fontSize: 13 } }, "\u{1F550}"),
      slot
    )),
    /* @__PURE__ */ React5.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 4 } }, /* @__PURE__ */ React5.createElement(
      "button",
      {
        onClick: handleAction,
        style: {
          fontSize: 13,
          padding: "6px 14px",
          border: "0.5px solid rgba(0,0,0,0.25)",
          borderRadius: 8,
          background: clicked ? "#111" : "transparent",
          color: clicked ? "#fff" : "#111",
          cursor: "pointer",
          transition: "background 0.15s, color 0.15s, transform 0.1s",
          transform: clicked ? "scale(0.96)" : "scale(1)"
        }
      },
      actionLabel,
      " \u2192"
    ), /* @__PURE__ */ React5.createElement(
      "button",
      {
        onClick: () => setSaved((s) => !s),
        title: saved ? "Unsave location" : "Save location",
        style: {
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: 20,
          color: saved ? "#f59e0b" : "#aaa",
          transition: "transform 0.2s, color 0.2s",
          transform: saved ? "scale(1.3)" : "scale(1)",
          padding: "2px 6px"
        }
      },
      saved ? "\u2605" : "\u2606"
    ))
  );
};
export {
  CarCard,
  EarbudsCard,
  InteractiveCard,
  LandCruiserCard,
  Pickup
};
