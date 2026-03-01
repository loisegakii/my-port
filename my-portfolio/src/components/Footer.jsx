const socials = [
  { label: "in", name: "LinkedIn", url: "https://www.linkedin.com/in/loisegakii-03501414b/" },
  { label: "gh", name: "GitHub",   url: "#" },
  { label: "wa", name: "WhatsApp", url: "https://wa.me/254703472816" },
  { label: "up", name: "Upwork",   url: "#" },
];

const quickLinks = ["About", "Services", "Portfolio", "Testimonials", "Contact"];
const serviceList = ["Web Development", "WordPress Design", "Academic Writing", "SEO Strategy", "Presentations"];

export default function Footer({ dark, scrollTo }) {
  const cBd = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)";

  return (
    <footer style={{ padding: "42px 5% 26px", borderTop: `1px solid ${cBd}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          className="footer-grid"
          style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 42, marginBottom: 38 }}
        >
          {/* Brand */}
          <div>
            <div className="playfair" style={{ fontWeight: 800, fontSize: 21, marginBottom: 12 }}>
              <span className="gradient-text">Loise</span>
              <span style={{ color: dark ? "#fff" : "#0f172a" }}> Njeru</span>
            </div>
            <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.8, maxWidth: 290 }}>
              Building web applications and delivering academic excellence.
              Available for freelance projects globally from Nairobi, Kenya.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  aria-label={s.name}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    width: 34, height: 34, borderRadius: 8,
                    background: "rgba(255,255,255,0.06)",
                    border: `1px solid ${cBd}`,
                    color: "#94a3b8", fontSize: 11,
                    textDecoration: "none", fontWeight: 700,
                    transition: "all 0.2s", textTransform: "uppercase",
                  }}
                  onMouseOver={(e) => { e.currentTarget.style.background = "rgba(14,165,233,0.14)"; e.currentTarget.style.color = "#0ea5e9"; }}
                  onMouseOut={(e)  => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "#94a3b8"; }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontWeight: 700, color: dark ? "#fff" : "#0f172a", marginBottom: 13, fontSize: 15 }}>
              Navigation
            </div>
            {quickLinks.map((l) => (
              <div key={l} style={{ marginBottom: 8 }}>
                <button className="nav-link" onClick={() => scrollTo(l.toLowerCase())}>
                  {l}
                </button>
              </div>
            ))}
          </div>

          {/* Services */}
          <div>
            <div style={{ fontWeight: 700, color: dark ? "#fff" : "#0f172a", marginBottom: 13, fontSize: 15 }}>
              Services
            </div>
            {serviceList.map((s) => (
              <div key={s} style={{ marginBottom: 8, fontSize: 13, color: "#64748b" }}>{s}</div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: `1px solid ${cBd}`, paddingTop: 20,
            display: "flex", justifyContent: "space-between",
            alignItems: "center", flexWrap: "wrap", gap: 8,
          }}
        >
          <p style={{ color: "#475569", fontSize: 13 }}>© 2026 Loise Njeru. All rights reserved.</p>
          <p style={{ color: "#475569", fontSize: 13 }}>Crafted with React in Nairobi, Kenya</p>
        </div>
      </div>
    </footer>
  );
}