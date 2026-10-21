import { ImageResponse } from "next/og";

export const alt = "Hotel Adriano — Adriatic Dolce Vita";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 84px",
          background:
            "linear-gradient(135deg, #0d0b09 0%, #18130f 55%, #123640 100%)",
          color: "#f8f2e6",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 44, height: 1, background: "#c9a15a" }} />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#e8c67e",
            }}
          >
            On the Adriatic
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 108,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1,
            }}
          >
            Hotel Adriano
          </div>
          <div
            style={{
              fontSize: 40,
              fontStyle: "italic",
              color: "#e8c67e",
            }}
          >
            Adriatic Dolce Vita
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            color: "rgba(248,242,230,0.65)",
          }}
        >
          <div style={{ display: "flex", gap: 40 }}>
            <span>42 Rooms &amp; Suites</span>
            <span>Rooftop Pool</span>
            <span>Private Beach</span>
          </div>
          <div style={{ display: "flex", letterSpacing: 3, textTransform: "uppercase" }}>
            hoteladriano.it
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
