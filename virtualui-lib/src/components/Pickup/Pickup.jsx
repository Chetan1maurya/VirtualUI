import React, { useState } from "react";

export const Pickup = ({
  location = "Main Warehouse",
  address = "123 Logistics Ave, Suite 4B",
  slot = "10:00 AM – 11:00 AM",
  status = "ready",
  statusVariant = "success",
  actionLabel = "Confirm Pickup",
  onAction = null,
}) => {
  const [hovered, setHovered] = useState(false);
  const [saved, setSaved] = useState(false);
  const [clicked, setClicked] = useState(false);

  const statusStyles = {
    success: { background: "#eaf3de", color: "#27500a" },
    info:    { background: "#e6f1fb", color: "#0c447c" },
    warning: { background: "#faeeda", color: "#633806" },
    danger:  { background: "#fcebeb", color: "#791f1f" },
  };

  const status$ = statusStyles[statusVariant] || statusStyles.info;

  const handleAction = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 200);
    if (onAction) onAction({ location, slot, saved });
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
      {/* Status badge */}
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
          background: status$.background,
          color: status$.color,
        }}
      >
        {status}
      </span>

      {/* Location + address */}
      <div>
        <p style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 500, color: "#111" }}>
          {location}
        </p>
        <p style={{ margin: "0 0 8px", fontSize: 13, color: "#666", lineHeight: 1.6 }}>
          {address}
        </p>

        {/* Time slot pill */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontSize: 12,
            fontWeight: 500,
            color: "#444",
            background: "#f4f4f0",
            border: "0.5px solid rgba(0,0,0,0.1)",
            borderRadius: 8,
            padding: "4px 10px",
          }}
        >
          <span style={{ fontSize: 13 }}>🕐</span>
          {slot}
        </div>
      </div>

      {/* Actions */}
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
          onClick={() => setSaved((s) => !s)}
          title={saved ? "Unsave location" : "Save location"}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: 20,
            color: saved ? "#f59e0b" : "#aaa",
            transition: "transform 0.2s, color 0.2s",
            transform: saved ? "scale(1.3)" : "scale(1)",
            padding: "2px 6px",
          }}
        >
          {saved ? "★" : "☆"}
        </button>
      </div>
    </div>
  );
};

export default function App() {
  const [log, setLog] = useState(null);

  const handleAction = (data) => {
    setLog(`Action fired → location: "${data.location}", slot: "${data.slot}", saved: ${data.saved}`);
    setTimeout(() => setLog(null), 3000);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f0", padding: 40, fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: 20, fontWeight: 500, marginBottom: 8, color: "#111" }}>
        Pickup — prop showcase
      </h1>
      <p style={{ fontSize: 14, color: "#666", marginBottom: 32 }}>
        Three variants using different <code>statusVariant</code>, <code>location</code>, <code>slot</code>, and <code>actionLabel</code> props.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginBottom: 24 }}>
        <Pickup
          location="Main Warehouse"
          address="123 Logistics Ave, Suite 4B"
          slot="10:00 AM – 11:00 AM"
          status="Ready"
          statusVariant="success"
          actionLabel="Confirm Pickup"
          onAction={handleAction}
        />
        <Pickup
          location="Downtown Hub"
          address="45 Market Street, Ground Floor"
          slot="2:00 PM – 3:00 PM"
          status="Scheduled"
          statusVariant="info"
          actionLabel="View Details"
          onAction={handleAction}
        />
        <Pickup
          location="East Side Depot"
          address="78 Industrial Road, Bay 12"
          slot="5:30 PM – 6:00 PM"
          status="Delayed"
          statusVariant="warning"
          actionLabel="Reschedule"
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
          <span style={{ color: "#89b4fa" }}>&lt;Pickup</span>{"\n"}
          {"  "}<span style={{ color: "#a6e3a1" }}>location</span>=<span style={{ color: "#f38ba8" }}>"Main Warehouse"</span>{"\n"}
          {"  "}<span style={{ color: "#a6e3a1" }}>address</span>=<span style={{ color: "#f38ba8" }}>"123 Logistics Ave, Suite 4B"</span>{"\n"}
          {"  "}<span style={{ color: "#a6e3a1" }}>slot</span>=<span style={{ color: "#f38ba8" }}>"10:00 AM – 11:00 AM"</span>{"\n"}
          {"  "}<span style={{ color: "#a6e3a1" }}>status</span>=<span style={{ color: "#f38ba8" }}>"Ready"</span>{"\n"}
          {"  "}<span style={{ color: "#a6e3a1" }}>statusVariant</span>=<span style={{ color: "#f38ba8" }}>"info | success | warning | danger"</span>{"\n"}
          {"  "}<span style={{ color: "#a6e3a1" }}>actionLabel</span>=<span style={{ color: "#f38ba8" }}>"Confirm Pickup"</span>{"\n"}
          {"  "}<span style={{ color: "#a6e3a1" }}>onAction</span>=<span style={{ color: "#f38ba8" }}>{"{(data) => console.log(data)}"}</span>{"\n"}
          <span style={{ color: "#89b4fa" }}>/&gt;</span>
        </div>
      </div>
    </div>
  );
}