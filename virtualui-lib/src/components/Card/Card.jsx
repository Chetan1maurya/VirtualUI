import React, { useState } from "react";

export const InteractiveCard = ({
  title = "Card title",
  description = "A clean, interactive card component you can customize to your heart's content.",
  tag = "Featured",
  tagVariant = "info",
  actionLabel = "Explore",
  onAction = null,
}) => {
  const [hovered, setHovered] = useState(false);
  const [liked, setLiked] = useState(false);
  const [clicked, setClicked] = useState(false);

  const tagStyles = {
    info: { background: "#e6f1fb", color: "#0c447c" },
    success: { background: "#eaf3de", color: "#27500a" },
    warning: { background: "#faeeda", color: "#633806" },
    danger: { background: "#fcebeb", color: "#791f1f" },
  };

  const tag$ = tagStyles[tagVariant] || tagStyles.info;

  const handleAction = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 200);
    if (onAction) onAction({ title, liked });
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#ffffff",
        border: `0.5px solid ${hovered ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.12)"}`,
        borderRadius: 12,
        padding: "20px 20px 16px",
        transition: "transform 0.2s ease, border-color 0.2s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <span
        style={{
          display: "inline-block",
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          padding: "3px 9px",
          borderRadius: 8,
          alignSelf: "flex-start",
          background: tag$.background,
          color: tag$.color,
        }}
      >
        {tag}
      </span>

      <div>
        <p style={{ margin: "0 0 6px", fontSize: 16, fontWeight: 500, color: "#111" }}>
          {title}
        </p>
        <p style={{ margin: 0, fontSize: 13, color: "#666", lineHeight: 1.6 }}>
          {description}
        </p>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 4 }}>
        <button
          onClick={handleAction}
          style={{
            fontSize: 13,
            padding: "6px 14px",
            border: "0.5px solid rgba(0,0,0,0.25)",
            borderRadius: 8,
            background: clicked ? "#111" : "transparent",
            color: clicked ? "#fff" : "#111",
            cursor: "pointer",
            transition: "background 0.15s, color 0.15s, transform 0.1s",
            transform: clicked ? "scale(0.96)" : "scale(1)",
          }}
        >
          {actionLabel} →
        </button>

        <button
          onClick={() => setLiked((l) => !l)}
          title={liked ? "Unlike" : "Like"}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: 20,
            color: liked ? "#e24b4a" : "#aaa",
            transition: "transform 0.2s, color 0.2s",
            transform: liked ? "scale(1.3)" : "scale(1)",
            padding: "2px 6px",
          }}
        >
          {liked ? "♥" : "♡"}
        </button>
      </div>
    </div>
  );
};

export default function App() {
  const [log, setLog] = useState(null);

  const handleAction = (data) => {
    setLog(`Action fired → title: "${data.title}", liked: ${data.liked}`);
    setTimeout(() => setLog(null), 3000);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f0", padding: 40, fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: 20, fontWeight: 500, marginBottom: 8, color: "#111" }}>
        InteractiveCard — prop showcase
      </h1>
      <p style={{ fontSize: 14, color: "#666", marginBottom: 32 }}>
        Three variants using different <code>tagVariant</code>, <code>title</code>, <code>description</code>, and <code>actionLabel</code> props.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginBottom: 24 }}>
        <InteractiveCard
          title="Card title"
          description="A clean, interactive card component you can customize to your heart's content."
          tag="Featured"
          tagVariant="info"
          actionLabel="Explore"
          onAction={handleAction}
        />
        <InteractiveCard
          title="Minimal mode"
          description="Swap colors, text, and behavior via props. Every card can feel completely distinct."
          tag="Custom"
          tagVariant="success"
          actionLabel="Open"
          onAction={handleAction}
        />
        <InteractiveCard
          title="Warm edition"
          description="Adjust width, accent color, or pass an onAction handler into any workflow."
          tag="Warm"
          tagVariant="warning"
          actionLabel="View"
          onAction={handleAction}
        />
      </div>

      {log && (
        <div style={{
          fontSize: 13,
          padding: "10px 14px",
          background: "#eaf3de",
          color: "#27500a",
          borderRadius: 8,
          border: "0.5px solid #c0dd97",
        }}>
          {log}
        </div>
      )}

      <div style={{ marginTop: 40 }}>
        <p style={{ fontSize: 13, color: "#888", marginBottom: 12 }}>Prop reference</p>
        <div style={{
          background: "#1e1e2e",
          color: "#cdd6f4",
          borderRadius: 10,
          padding: "16px 20px",
          fontSize: 13,
          fontFamily: "monospace",
          lineHeight: 1.8,
        }}>
          <span style={{ color: "#89b4fa" }}>&lt;InteractiveCard</span>{"\n"}
          {"  "}<span style={{ color: "#a6e3a1" }}>title</span>=<span style={{ color: "#f38ba8" }}>"Card title"</span>{"\n"}
          {"  "}<span style={{ color: "#a6e3a1" }}>description</span>=<span style={{ color: "#f38ba8" }}>"Your description here"</span>{"\n"}
          {"  "}<span style={{ color: "#a6e3a1" }}>tag</span>=<span style={{ color: "#f38ba8" }}>"Featured"</span>{"\n"}
          {"  "}<span style={{ color: "#a6e3a1" }}>tagVariant</span>=<span style={{ color: "#f38ba8" }}>"info | success | warning | danger"</span>{"\n"}
          {"  "}<span style={{ color: "#a6e3a1" }}>actionLabel</span>=<span style={{ color: "#f38ba8" }}>"Explore"</span>{"\n"}
          {"  "}<span style={{ color: "#a6e3a1" }}>onAction</span>=<span style={{ color: "#f38ba8" }}>{"{(data) => console.log(data)}"}</span>{"\n"}
          <span style={{ color: "#89b4fa" }}>/&gt;</span>
        </div>
      </div>
    </div>
  );
}