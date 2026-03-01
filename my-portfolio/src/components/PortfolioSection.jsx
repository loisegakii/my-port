import { useState } from "react";
import FadeIn from "./FadeIn";

const FILTERS = ["All", "Web", "Academic", "Presentation", "Software"];
const CAT_COLOR = {
  Web: "#0ea5e9",
  Academic: "#f59e0b",
  Presentation: "#ec4899",
  Software: "#10b981",
};

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        style={{
          background: "#0d1b2a", borderRadius: 22, overflow: "hidden",
          maxWidth: 560, width: "100%",
          border: "1px solid rgba(14,165,233,0.25)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ position: "relative" }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", display: "block" }}
          />
          <button
            onClick={onClose}
            style={{
              position: "absolute", top: 10, right: 10,
              background: "rgba(0,0,0,0.65)", border: "none",
              color: "white", width: 30, height: 30,
              borderRadius: "50%", cursor: "pointer",
              fontSize: 14, display: "flex",
              alignItems: "center", justifyContent: "center",
            }}
          >
            ✕
          </button>
        </div>
        <div style={{ padding: 30 }}>
          <span
            style={{
              display: "inline-block",
              background: CAT_COLOR[project.category] || "#0ea5e9",
              color: "white", padding: "2px 10px",
              borderRadius: 50, fontSize: 10, fontWeight: 700, marginBottom: 12,
            }}
          >
            {project.category}
          </span>
          <h3 className="playfair" style={{ fontSize: 22, fontWeight: 800, color: "#fff", marginBottom: 10 }}>
            {project.title}
          </h3>
          <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: 14, marginBottom: 24 }}>
            {project.description}
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ fontSize: 13 }}
            >
              View Project →
            </a>
            <button className="btn-outline" onClick={onClose} style={{ fontSize: 13 }}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioSection({ dark, projects = [] }) {
  const [filter, setFilter] = useState("All");
  const [modal, setModal]   = useState(null);

  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="portfolio"
      style={{
        padding: "96px 5%",
        background: dark ? "rgba(255,255,255,0.015)" : "rgba(0,0,0,0.02)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 42 }}>
            <div style={{ fontSize: 12, letterSpacing: 3, color: "#0ea5e9", fontWeight: 700, marginBottom: 10, textTransform: "uppercase" }}>
              My Work
            </div>
            <h2 className="playfair" style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 800, color: dark ? "#fff" : "#0f172a" }}>
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>
        </FadeIn>

        {/* Filter tabs */}
        <FadeIn>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 42 }}>
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`filter-btn${filter === f ? " active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
          {shown.map((p, i) => (
            <FadeIn key={p.id} delay={i * 65}>
              <div className="project-card" onClick={() => setModal(p)}>
                <img
                  src={p.image}
                  alt={p.title}
                  style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", display: "block" }}
                />
                <div className="project-overlay">
                  <span
                    style={{
                      display: "inline-block",
                      background: CAT_COLOR[p.category] || "#0ea5e9",
                      color: "white", padding: "2px 10px",
                      borderRadius: 50, fontSize: 10, fontWeight: 700,
                      marginBottom: 8, width: "fit-content",
                    }}
                  >
                    {p.category}
                  </span>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 6 }}>{p.title}</h3>
                  <p style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.6, marginBottom: 10 }}>{p.description}</p>
                  <div style={{ color: "#0ea5e9", fontSize: 12, fontWeight: 600 }}>View Details →</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <ProjectModal project={modal} onClose={() => setModal(null)} />
    </section>
  );
}