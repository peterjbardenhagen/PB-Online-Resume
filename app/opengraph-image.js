import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://peter.bardenhagen.xyz";

  const heroImageUrl = new URL("/imgs/hero-image.png", baseUrl).toString();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
          padding: 48,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            gap: 32,
            alignItems: "stretch",
          }}
        >
          <div
            style={{
              flex: 1,
              background: "#f3f4f6",
              borderRadius: 32,
              padding: 44,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 999,
                  background: "#000000",
                  color: "#ffffff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  fontWeight: 800,
                  letterSpacing: 0.5,
                }}
              >
                PB
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 18, color: "#111827", fontWeight: 600 }}>
                  Peter Bardenhagen
                </div>
                <div style={{ fontSize: 14, color: "#4b5563" }}>
                  Online Resume
                </div>
              </div>
            </div>

            <div style={{ fontSize: 24, color: "#111827", marginBottom: 6 }}>
              Hi I&apos;m
            </div>
            <div
              style={{
                fontSize: 64,
                lineHeight: 1.05,
                color: "#000000",
                fontWeight: 900,
                marginBottom: 18,
              }}
            >
              Peter Bardenhagen
            </div>

            <div
              style={{
                fontSize: 22,
                lineHeight: 1.35,
                color: "#374151",
                marginBottom: 28,
              }}
            >
              Solution Architect &amp; Technology Leader
            </div>

            <div style={{ display: "flex", gap: 14 }}>
              <div
                style={{
                  padding: "12px 18px",
                  background: "#000000",
                  color: "#ffffff",
                  borderRadius: 12,
                  fontSize: 16,
                  fontWeight: 700,
                }}
              >
                peter.bardenhagen.xyz
              </div>
              <div
                style={{
                  padding: "12px 18px",
                  background: "#ffffff",
                  color: "#111827",
                  borderRadius: 12,
                  border: "1px solid #e5e7eb",
                  fontSize: 16,
                  fontWeight: 700,
                }}
              >
                Enterprise Digital Transformation
              </div>
            </div>
          </div>

          <div
            style={{
              width: 420,
              background: "#d1fae5",
              borderRadius: 32,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08)",
            }}
          >
            <img
              src={heroImageUrl}
              alt="Peter Bardenhagen"
              style={{
                width: 420,
                height: 630,
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
