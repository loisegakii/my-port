// Drop profile-photo.png into src/assets/ — Vite will bundle it automatically.
// The line below is the correct import once the file is there:
import profilePhoto from "../assets/profile-photo.png";
import FadeIn from "./FadeIn";
import Counter from "./Counter";

const stats = [
  { label: "Projects Done",  end: 6,  suffix: "+" },
  { label: "Happy Clients",  end: 10, suffix: "+" },
  { label: "Years Exp",      end: 5,  suffix: "+" },
  { label: "Technologies",   end: 8,  suffix: "+" },
];

export default function Hero({ dark, scrollTo }) {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "100px 5% 60px",
        background:
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(14,165,233,0.12) 0%, transparent 60%)," +
          "radial-gradient(ellipse 50% 40% at 90% 90%, rgba(139,92,246,0.07) 0%, transparent 60%)",
      }}
    >
      <div
        className="hero-grid"
        style={{
          maxWidth: 1200, margin: "0 auto", width: "100%",
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 56, alignItems: "center",
        }}
      >
        {/* ── Left: text ── */}
        <div>
          <FadeIn>
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(14,165,233,0.1)",
                border: "1px solid rgba(14,165,233,0.2)",
                borderRadius: 50, padding: "5px 15px",
                marginBottom: 20, fontSize: 12,
                color: "#38bdf8", fontWeight: 600,
              }}
            >
              <span
                style={{
                  width: 7, height: 7, background: "#10b981",
                  borderRadius: "50%", display: "inline-block",
                  animation: "pulse-dot 2s infinite",
                }}
              />
              Available for New Projects
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h1
              className="playfair"
              style={{
                fontSize: "clamp(32px, 5.5vw, 68px)",
                fontWeight: 800, lineHeight: 1.05,
                marginBottom: 16,
                color: dark ? "#fff" : "#0f172a",
              }}
            >
              Web Dev &<br />
              <span className="gradient-text" style={{ fontStyle: "italic" }}>Research</span>
              <br />Specialist
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: "#94a3b8", marginBottom: 30, maxWidth: 460 }}>
              High-performance web applications &amp; precision academic writing.
              From React &amp; Django to PhD-level research — technical excellence meets scholarly rigour.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
              <button className="btn-primary" onClick={() => scrollTo("portfolio")}>
                View Portfolio
              </button>
              <button className="btn-outline" onClick={() => scrollTo("contact")}>
                Contact Me
              </button>
              <a
                href="/LOISE_GAKII_CV.pdf"
                download="Loise_Gakii_CV.pdf"
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  color: "#0ea5e9", fontWeight: 600, fontSize: 13,
                  textDecoration: "none", padding: "10px 20px",
                  border: "1px solid rgba(14,165,233,0.35)",
                  borderRadius: 50,
                  background: "rgba(14,165,233,0.06)",
                  transition: "all 0.3s",
                }}
                onMouseOver={(e) => { e.currentTarget.style.background="rgba(14,165,233,0.14)"; e.currentTarget.style.transform="translateY(-2px)"; }}
                onMouseOut={(e)  => { e.currentTarget.style.background="rgba(14,165,233,0.06)"; e.currentTarget.style.transform="translateY(0)"; }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download CV
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={380}>
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="playfair" style={{ fontSize: 24, fontWeight: 800, color: "#0ea5e9" }}>
                    <Counter end={s.end} suffix={s.suffix} />
                  </div>
                  <div style={{ fontSize: 11, color: "#64748b", marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* ── Right: photo ── */}
        <FadeIn delay={180} style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative", animation: "float 6s ease-in-out infinite" }}>
            {/* Spinning gradient ring */}
            <div
              style={{
                position: "absolute", inset: -4, borderRadius: 28,
                background: "linear-gradient(135deg, #0ea5e9, #8b5cf6, #0ea5e9, #38bdf8)",
                backgroundSize: "300% 300%",
                animation: "spin-slow 8s linear infinite",
                opacity: 0.65,
              }}
            />
            {/* Photo frame */}
            <div
              style={{
                position: "relative", width: 290, height: 350,
                borderRadius: 24, overflow: "hidden",
                border: "3px solid rgba(14,165,233,0.45)",
                boxShadow: "0 0 50px rgba(14,165,233,0.22), 0 0 100px rgba(14,165,233,0.08)",
              }}
            >
              <img
                src={profilePhoto}
                alt="Professional portrait"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            {/* Badge */}
            <div
              style={{
                position: "absolute", bottom: -18, left: "50%",
                transform: "translateX(-50%)",
                background: "linear-gradient(135deg, #0ea5e9, #0284c7)",
                borderRadius: 12, padding: "8px 20px",
                whiteSpace: "nowrap",
                boxShadow: "0 8px 26px rgba(14,165,233,0.42)",
                fontSize: 12, fontWeight: 700, color: "white",
                display: "flex", alignItems: "center",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white" style={{marginRight:6,flexShrink:0}}>
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
                Open to Freelance
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}