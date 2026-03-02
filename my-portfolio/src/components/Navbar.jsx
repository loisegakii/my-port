import { useState } from "react";

export default function Navbar({ dark, setDark, scrollTo }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const border = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)";

  const handleNav = (section) => {
    scrollTo(section);
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          background: "rgba(2,11,24,0.95)",
          backdropFilter: "blur(16px)",
          borderBottom: `1px solid ${border}`,
          padding: "0 5%",
        }}
      >
        <div
          style={{
            maxWidth: 1200, margin: "0 auto",
            display: "flex", alignItems: "center",
            justifyContent: "space-between", height: 64,
          }}
        >
          {/* Logo */}
          <div className="playfair" style={{ fontWeight: 800, fontSize: 22, color: "#fff" }}>
            <span className="gradient-text">Loise</span> Njeru
          </div>

          {/* ── Desktop links ── */}
          <div
            className="desktop-nav"
            style={{ display: "flex", gap: 30, alignItems: "center" }}
          >
            {["about", "services", "portfolio", "testimonials", "contact"].map((s) => (
              <button key={s} className="nav-link" onClick={() => handleNav(s)}>
                {s[0].toUpperCase() + s.slice(1)}
              </button>
            ))}

            <button
              onClick={() => setDark(!dark)}
              style={{
                background: "rgba(255,255,255,0.07)",
                border: `1px solid ${border}`,
                borderRadius: 8, width: 34, height: 34,
                cursor: "pointer", fontSize: 14,
                color: dark ? "#e2e8f0" : "#1e293b",
              }}
            >
              {dark ? "☀️" : "🌙"}
            </button>

            <button
              className="btn-primary"
              style={{ padding: "8px 18px", fontSize: 13 }}
              onClick={() => handleNav("contact")}
            >
              Hire Me
            </button>
          </div>

          {/* ── Mobile: theme toggle + hamburger ── */}
          <div className="mobile-nav-controls" style={{ display: "none", alignItems: "center", gap: 10 }}>
            <button
              onClick={() => setDark(!dark)}
              style={{
                background: "rgba(255,255,255,0.07)",
                border: `1px solid ${border}`,
                borderRadius: 8, width: 34, height: 34,
                cursor: "pointer", fontSize: 14,
                color: dark ? "#e2e8f0" : "#1e293b",
              }}
            >
              {dark ? "☀️" : "🌙"}
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: `1px solid ${border}`,
                borderRadius: 8, width: 38, height: 38,
                cursor: "pointer", padding: 8,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center", gap: 4,
              }}
            >
              <span style={{
                display: "block", width: 18, height: 2,
                background: "#e2e8f0", borderRadius: 2, transition: "all 0.3s",
                transform: menuOpen ? "rotate(45deg) translate(4px, 6px)" : "none",
              }} />
              <span style={{
                display: "block", width: 18, height: 2,
                background: "#e2e8f0", borderRadius: 2, transition: "all 0.3s",
                opacity: menuOpen ? 0 : 1,
              }} />
              <span style={{
                display: "block", width: 18, height: 2,
                background: "#e2e8f0", borderRadius: 2, transition: "all 0.3s",
                transform: menuOpen ? "rotate(-45deg) translate(4px, -6px)" : "none",
              }} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile dropdown menu ── */}
      <div
        className="mobile-menu"
        style={{
          position: "fixed", top: 64, left: 0, right: 0, zIndex: 99,
          background: "rgba(2,11,24,0.98)",
          backdropFilter: "blur(16px)",
          borderBottom: `1px solid ${border}`,
          maxHeight: menuOpen ? 420 : 0,
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          display: "none",
        }}
      >
        <div style={{ padding: "8px 5% 24px" }}>
          {["about", "services", "portfolio", "testimonials", "contact"].map((s, i) => (
            <button
              key={s}
              onClick={() => handleNav(s)}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                width: "100%", textAlign: "left",
                background: "none", border: "none",
                padding: "15px 0",
                borderBottom: i < 4 ? `1px solid ${border}` : "none",
                color: "#94a3b8", fontSize: 15, fontWeight: 500,
                cursor: "pointer", fontFamily: "inherit",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#0ea5e9")}
              onMouseOut={(e)  => (e.currentTarget.style.color = "#94a3b8")}
            >
              {s[0].toUpperCase() + s.slice(1)}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          ))}
          <button
            className="btn-primary"
            style={{ width: "100%", marginTop: 18, fontSize: 14, textAlign: "center" }}
            onClick={() => handleNav("contact")}
          >
            Hire Me
          </button>
        </div>
      </div>

      {/* Backdrop overlay when menu is open */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 98,
            background: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(2px)",
          }}
          className="mobile-menu"
        />
      )}

      {/* ── Responsive CSS ── */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav          { display: none !important; }
          .mobile-nav-controls  { display: flex !important; }
          .mobile-menu          { display: block !important; }
        }
      `}</style>
    </>
  );
}