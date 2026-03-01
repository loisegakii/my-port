import FadeIn from "./FadeIn";

const services = [
  { icon: "⚡", title: "Custom Web Development",        desc: "React, Django, Next.js — modern, scalable web applications built to perform.",               color: "#0ea5e9" },
  { icon: "🎨", title: "WordPress Design & Optimisation", desc: "Beautiful, fast WordPress sites with custom themes and plugin integration.",               color: "#8b5cf6" },
  { icon: "🛒", title: "E-commerce Integration",         desc: "WooCommerce, Shopify, and custom cart solutions with payment gateways.",                    color: "#06b6d4" },
  { icon: "🔍", title: "SEO Website Structuring",        desc: "Technical SEO, structured data, Core Web Vitals optimisation for top rankings.",            color: "#10b981" },
  { icon: "📄", title: "Academic Research Papers",       desc: "High-quality research papers with proper methodology, citations and analysis.",             color: "#f59e0b" },
  { icon: "🎓", title: "Thesis & Dissertation Writing",  desc: "Full thesis support from proposal to final submission with academic rigour.",               color: "#ef4444" },
  { icon: "📊", title: "PowerPoint Presentations",       desc: "High-impact presentations that tell compelling stories and win pitches.",                   color: "#ec4899" },
];

export default function Services({ dark }) {
  const cBg = dark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.04)";
  const cBd = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)";

  return (
    <section id="services" style={{ padding: "96px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 12, letterSpacing: 3, color: "#0ea5e9", fontWeight: 700, marginBottom: 10, textTransform: "uppercase" }}>
              What I Offer
            </div>
            <h2 className="syne" style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 800, color: dark ? "#fff" : "#0f172a" }}>
              Premium <span className="gradient-text">Services</span>
            </h2>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
          {services.map((s, i) => (
            <FadeIn key={i} delay={i * 55}>
              <div className="service-card" style={{ background: cBg, borderColor: cBd }}>
                <div style={{ fontSize: 34, marginBottom: 16 }}>{s.icon}</div>
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