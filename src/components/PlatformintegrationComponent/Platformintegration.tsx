import React from "react";

/**
 * Sección "Integración con múltiples plataformas"
 * Fondo #111111, totalmente responsive.
 *
 * Nota sobre logos: en vez de reproducir los logotipos de marca originales
 * (que son propiedad de cada empresa), cada plataforma se muestra como un
 * "chip" con su nombre y un ícono simple neutro. Si tenés los SVG oficiales
 * con licencia para usar, podés reemplazar el ícono de cada item por el
 * archivo correspondiente (ver comentario "// <- reemplazar acá").
 */

const PLATFORMS = [
  { name: "Tienda Nube" },
  { name: "Mercado Libre" },
  { name: "Shopify" },
  { name: "VTEX" },
  { name: "Magento" },
];

function PlatformIcon() {
  // Ícono neutro (placeholder). Reemplazar por el SVG de marca si corresponde.
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

export default function PlatformIntegrationSection() {
  return (
    <section
      style={{
        backgroundColor: "#111111",
        color: "#ffffff",
        width: "100%",
        padding: "clamp(2.5rem, 6vw, 5rem) clamp(1.25rem, 5vw, 3rem)",
        boxSizing: "border-box",
        fontFamily:
          "'Inter', system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "clamp(2rem, 5vw, 3rem)",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
          }}
        >
          Integración con múltiples plataformas
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "clamp(1.5rem, 4vw, 3.5rem)",
            width: "100%",
          }}
        >
          {PLATFORMS.map((platform) => (
            <div
              key={platform.name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.5rem",
                color: "#ffffff",
                opacity: 0.92,
                minWidth: "100px",
                transition: "opacity 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "0.92";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <PlatformIcon /> {/* <- reemplazar acá por el SVG oficial si corresponde */}
              <span
                style={{
                  fontSize: "clamp(0.85rem, 1.6vw, 1rem)",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                {platform.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}