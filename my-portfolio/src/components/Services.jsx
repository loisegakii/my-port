import { useEffect } from "react";
import FadeIn from "./FadeIn";

// ── Inject Font Awesome once into <head> if not already present ───────────
function useFontAwesome() {
  useEffect(() => {
    if (document.getElementById("fa-cdn")) return;
    const link  = document.createElement("link");
    link.id     = "fa-cdn";
    link.rel    = "stylesheet";
    link.href   = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
    document.head.appendChild(link);
  }, []);
}

const services = [
  {
    fa:    "fa-solid fa-code",
    title: "Custom Web Development",
    desc:  "React, Django, Next.js — modern, scalable web applications built to perform.",
    color: "#0ea5e9",
  },
  {
    fa:    "fa-brands fa-wordpress",
    title: "WordPress Design & Optimisation",
    desc:  "Beautiful, fast WordPress sites with custom themes and plugin integration.",
    color: "#8b5cf6",
  },
  {
    fa:    "fa-solid fa-cart-shopping",
    title: "E-commerce Integration",
    desc:  "WooCommerce, Shopify, and custom cart solutions with payment gateways.",
    color: "#06b6d4",
  },
  {
    fa:    "fa-solid fa-magnifying-glass-chart",
    title: "SEO Website Structuring",
    desc:  "Technical SEO, structured data, Core Web Vitals optimisation for top rankings.",
    color: "#10b981",
  },
  {
    fa:    "fa-solid fa-file-lines",
    title: "Academic Research Papers",
    desc:  "High-quality research papers with proper methodology, citations and analysis.",
    color: "#f59e0b",
  },
  {
    fa:    "fa-solid fa-graduation-cap",
    title: "Thesis & Dissertation Writing",
    desc:  "Full thesis support from proposal to final submission with academic rigour.",
    color: "#ef4444",
  },
  {
    fa:    "fa-solid fa-display",
    title: "PowerPoint Presentations",
    desc:  "High-impact presentations that tell compelling stories and win pitches.",
    color: "#ec4899",
  },
];

export default function Services({ dark }) {
  useFontAwesome();

  const cBg = dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.04)";
  const cBd = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)";

  return (
    <section id="services" style={{ padding: "96px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{
              fontSize: 12, letterSpacing: 3, color: "#0ea5e9",
              fontWeight: 700, marginBottom: 10, textTransform: "uppercase",
            }}>
              What I Offer
            </div>
            <h2
              className="playfair"
              style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 800, color: dark ? "#fff" : "#0f172a" }}
            >
              Premium <span className="gradient-text">Services</span>
            </h2>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
          {services.map((s, i) => (
            <FadeIn key={i} delay={i * 55}>
              <div className="service-card" style={{ background: cBg, borderColor: cBd }}>

                {/* Icon box */}
                <div
                  style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: `${s.color}18`,
                    border: `1px solid ${s.color}40`,
                    display: "flex", alignItems: "center",
                    justifyContent: "center", marginBottom: 18,
                  }}
                >
                  <i
                    className={s.fa}
                    style={{ fontSize: 22, color: s.color }}
                  />
                </div>

                {/* Accent bar */}
                <div style={{ width: 34, height: 3, background: s.color, borderRadius: 2, marginBottom: 16 }} />

                <h3 style={{ fontSize: 17, fontWeight: 700, color: dark ? "#fff" : "#0f172a", marginBottom: 9 }}>
                  {s.title}
                </h3>
                <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}