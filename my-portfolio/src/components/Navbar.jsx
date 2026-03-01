export default function Navbar({ dark, setDark, scrollTo }) {
  const border = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.1)";

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(2,11,24,0.9)",
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

        {/* Desktop links */}
        <div
          className="desktop-nav"
          style={{ display: "flex", gap: 30, alignItems: "center" }}
        >
          {["about", "services", "portfolio", "testimonials", "contact"].map((s) => (
            <button key={s} className="nav-link" onClick={() => scrollTo(s)}>
              {s[0].toUpperCase() + s.slice(1)}
            </button>
          ))}

          {/* Dark / Light toggle */}
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
            onClick={() => scrollTo("contact")}
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
}