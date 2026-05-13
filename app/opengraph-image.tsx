import { ImageResponse } from "next/og";

import { SITE_NAME, SITE_TAGLINE } from "@/app/lib/seo";

export const runtime = "nodejs";

export const alt = `${SITE_NAME} – ${SITE_TAGLINE}`;
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
          justifyContent: "center",
          padding: "96px",
          color: "#ffffff",
          fontFamily:
            "'Inter', 'Helvetica Neue', 'Segoe UI', Arial, sans-serif",
          background:
            "linear-gradient(135deg, #050A1A 0%, #0a1733 55%, #1f5cff 160%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-180px",
            right: "-160px",
            width: "640px",
            height: "640px",
            borderRadius: "9999px",
            background:
              "radial-gradient(closest-side, rgba(31,92,255,0.55), rgba(31,92,255,0))",
            filter: "blur(2px)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-220px",
            left: "-140px",
            width: "520px",
            height: "520px",
            borderRadius: "9999px",
            background:
              "radial-gradient(closest-side, rgba(126,162,255,0.32), rgba(126,162,255,0))",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontSize: 28,
            letterSpacing: "0.32em",
            color: "#9bb8ff",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          <span>Event</span>
          <span style={{ opacity: 0.5 }}>·</span>
          <span>Ljud</span>
          <span style={{ opacity: 0.5 }}>·</span>
          <span>Ljus</span>
          <span style={{ opacity: 0.5 }}>·</span>
          <span>Fyrverkeri</span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "32px",
            fontSize: 112,
            fontWeight: 800,
            lineHeight: 1.02,
            letterSpacing: "-0.02em",
          }}
        >
          {SITE_NAME}
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "32px",
            maxWidth: "920px",
            fontSize: 44,
            lineHeight: 1.2,
            color: "#cfdcff",
          }}
        >
          {SITE_TAGLINE}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "72px",
            left: "96px",
            right: "96px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 26,
            color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.12em",
          }}
        >
          <span>soderentertainment.com</span>
          <span style={{ color: "#7ea2ff", fontWeight: 700 }}>SEDAN 2005</span>
        </div>
      </div>
    ),
    size,
  );
}
