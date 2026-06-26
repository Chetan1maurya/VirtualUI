import React, { useState } from "react";

export const InteractiveCard = ({
  title = "Card Title",
  description = "A clean, interactive card component you can customize to your heart's content.",
  tag = "Featured",
  accentColor = "#6C63FF",
  backgroundColor = "#1a1a2e",
  textColor = "#e8e8f0",
  width = 340,
  onAction = null,
  actionLabel = "Explore",
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
      boxShadow: hovered
        ? `0 20px 48px rgba(0,0,0,0.5), 0 0 0 1px ${accentColor}55`
        : "0 8px 24px rgba(0,0,0,0.3)",
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
      pointerEvents: "none",
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
      marginBottom: 16,
    },
    title: {
      margin: "0 0 10px",
      fontSize: 22,
      fontWeight: "normal",
      lineHeight: 1.3,
      letterSpacing: "-0.01em",
      color: textColor,
    },
    divider: {
      height: 1,
      background: `linear-gradient(to right, ${accentColor}88, transparent)`,
      margin: "14px 0",
      border: "none",
    },
    description: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.7,
      color: `${textColor}bb`,
      fontFamily: "'Georgia', serif",
    },
    footer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 22,
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
      outline: "none",
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
      filter: liked ? "none" : "grayscale(1) opacity(0.5)",
    },
  };

  return (
    <div
      style={styles.card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={styles.glow} />
      <div style={styles.tag}>{tag}</div>
      <h2 style={styles.title}>{title}</h2>
      <hr style={styles.divider} />
      <p style={styles.description}>{description}</p>
      <div style={styles.footer}>
        <button style={styles.button} onClick={handleAction}>
          {actionLabel} →
        </button>
        <button
          style={styles.likeBtn}
          onClick={() => setLiked((l) => !l)}
          title={liked ? "Unlike" : "Like"}
        >
          {liked ? "♥" : "♡"}
        </button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 28,
        flexWrap: "wrap",
        background: "#0f0f1a",
        padding: 40,
      }}
    >
      <InteractiveCard />
      <InteractiveCard
        title="Minimal Mode"
        description="Swap colors, text, and behavior via props. Every card can feel completely distinct."
        tag="Custom"
        accentColor="#00C9A7"
        backgroundColor="#0d1f1c"
        textColor="#d4f5ed"
        actionLabel="Open"
      />
      <InteractiveCard
        title="Warm Edition"
        description="Adjust width, accent color, or pass an onAction handler to wire this into any workflow."
        tag="Warm"
        accentColor="#FF6B6B"
        backgroundColor="#1f1010"
        textColor="#f5e0d4"
        width={300}
        actionLabel="View"
      />
    </div>
  );
}