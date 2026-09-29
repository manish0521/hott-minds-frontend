import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { COMPANY } from "@/constants/company";

interface OgImageProps {
  eyebrow: string;
  title: string;
  /** Rendered in brand orange after the title */
  accent: string;
  tagline: string;
  /** Photo under /public, e.g. "/images/hott-minds-flame-tee.jpg" */
  image: string;
}

async function publicImageDataUri(path: string): Promise<string> {
  const data = await readFile(join(process.cwd(), "public", path), "base64");
  const type = path.endsWith(".png") ? "image/png" : "image/jpeg";
  return `data:${type};base64,${data}`;
}

/**
 * Loads just the glyphs we need from Google Fonts (TTF, which ImageResponse requires).
 * Falls back to the built-in font rather than failing the build when offline.
 */
async function loadGoogleFont(family: string, text: string): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(text)}`
    ).then((res) => res.text());
    const fontUrl = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    if (!fontUrl) return null;
    const font = await fetch(fontUrl);
    return font.ok ? await font.arrayBuffer() : null;
  } catch {
    return null;
  }
}

/** Branded 1200×630 social share card, matching the site's hero sections. */
export async function renderOgImage({ eyebrow, title, accent, tagline, image }: OgImageProps) {
  const contactLine = `${COMPANY.contacts.phone.display} · ${COMPANY.contacts.location.city}, ${COMPANY.contacts.location.region}`;
  const [photo, logo, anton, inter, interSemiBold] = await Promise.all([
    publicImageDataUri(image),
    publicImageDataUri("/images/logo-mark.png"),
    loadGoogleFont("Anton", `${title}${accent}${COMPANY.name}`.toUpperCase()),
    loadGoogleFont("Inter:wght@400", `${tagline}${contactLine}`),
    loadGoogleFont("Inter:wght@600", eyebrow.toUpperCase()),
  ]);
  // All or nothing: a partial set would render missing glyphs from whichever subset has them.
  const fonts =
    anton && inter && interSemiBold
      ? [
          { name: "Anton", data: anton, weight: 400 as const },
          { name: "Inter", data: inter, weight: 400 as const },
          { name: "Inter", data: interSemiBold, weight: 600 as const },
        ]
      : undefined;

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        padding: 64,
        background: "#141210",
        color: "#faf6ef",
        fontFamily: "Inter",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
          paddingRight: 48,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: 3,
              color: "#ff5c1a",
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginTop: 24,
              fontFamily: "Anton",
              fontSize: 92,
              lineHeight: 0.95,
              textTransform: "uppercase",
            }}
          >
            <span style={{ color: "#ffffff", marginRight: 22 }}>{title}</span>
            <span style={{ color: "#ff5c1a" }}>{accent}</span>
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 26,
              lineHeight: 1.35,
              color: "rgba(250,246,239,0.7)",
            }}
          >
            {tagline}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img> */}
          <img src={logo} width={52} height={54} alt="" />
          <div style={{ display: "flex", flexDirection: "column", marginLeft: 18 }}>
            <span style={{ fontFamily: "Anton", fontSize: 34, letterSpacing: 2, color: "#ffffff" }}>
              {COMPANY.name.toUpperCase()}
            </span>
            <span style={{ fontSize: 20, color: "rgba(250,246,239,0.6)" }}>{contactLine}</span>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignSelf: "center",
          width: 440,
          height: 440,
          borderRadius: 24,
          overflow: "hidden",
          border: "2px solid #2e2a27",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img> */}
        <img src={photo} width={440} height={440} alt="" style={{ objectFit: "cover" }} />
      </div>

      <div
        style={{
          display: "flex",
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 12,
          background: "#ff5c1a",
        }}
      />
    </div>,
    { width: 1200, height: 630, fonts }
  );
}
