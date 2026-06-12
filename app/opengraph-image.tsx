import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "TuneUniversal — Free Music Tools Online";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* decorative staff lines */}
        {[180, 210, 240, 270, 300].map((y, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: y,
              left: 60,
              right: 60,
              height: 1,
              background: "rgba(139,92,246,0.18)"
            }}
          />
        ))}

        {/* logo circle */}
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
            boxShadow: "0 0 48px rgba(124,58,237,0.5)"
          }}
        >
          <span style={{ fontSize: 56, color: "#fff" }}>♪</span>
        </div>

        {/* brand name */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "#fff",
            letterSpacing: "-2px",
            marginBottom: 16,
            textShadow: "0 2px 24px rgba(124,58,237,0.4)"
          }}
        >
          TuneUniversal
        </div>

        {/* tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#a5b4fc",
            fontWeight: 400,
            letterSpacing: "0.5px",
            textAlign: "center",
            maxWidth: 800,
            marginBottom: 40
          }}
        >
          Free online music tools for musicians worldwide
        </div>

        {/* tool pills */}
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center", maxWidth: 900 }}>
          {["Guitar Tuner", "Metronome", "Tap BPM", "Chord Transposer", "Sound Meter", "Pitch Generator"].map(
            (tool) => (
              <div
                key={tool}
                style={{
                  background: "rgba(124,58,237,0.25)",
                  border: "1px solid rgba(124,58,237,0.4)",
                  borderRadius: 24,
                  padding: "8px 20px",
                  fontSize: 18,
                  color: "#c4b5fd",
                  fontWeight: 500
                }}
              >
                {tool}
              </div>
            )
          )}
        </div>

        {/* domain */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            right: 48,
            fontSize: 20,
            color: "rgba(165,180,252,0.6)",
            fontWeight: 400
          }}
        >
          tuneuniversal.com
        </div>
      </div>
    ),
    { ...size }
  );
}
