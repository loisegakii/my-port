import { useState } from "react";
import Navbar           from "./Navbar";
import Hero             from "./Hero";
import About            from "./About";
import Services         from "./Services";
import PortfolioSection from "./PortfolioSection";
import Testimonials     from "./Testimonials";
import Contact          from "./Contact";
import Footer           from "./Footer";
import AdminPanel       from "./AdminPanel";
import useProjects      from "../hooks/useProjects";

export default function Portfolio() {
  const [dark, setDark]           = useState(true);
  const [adminOpen, setAdminOpen] = useState(false);
  const [adminHover, setAdminHover] = useState(false);

  const { projects, addProject, updateProject, deleteProject } = useProjects();

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const bg = dark ? "#020b18" : "#f0f4f8";
  const fg = dark ? "#e2e8f0" : "#1e293b";

  return (
    <div style={{ background: bg, color: fg, minHeight: "100vh", overflowX: "hidden" }}>

      <Navbar dark={dark} setDark={setDark} scrollTo={scrollTo} />
      <Hero             dark={dark} scrollTo={scrollTo} />
      <About            dark={dark} />
      <Services         dark={dark} />
      <PortfolioSection dark={dark} projects={projects} />
      <Testimonials     dark={dark} />
      <Contact          dark={dark} />
      <Footer           dark={dark} scrollTo={scrollTo} />

      {/* ── Floating Admin Button ── */}
      <button
        onClick={() => setAdminOpen(true)}
        title="Open Admin Panel"
        onMouseOver={() => setAdminHover(true)}
        onMouseOut={() => setAdminHover(false)}
        style={{
          position: "fixed", bottom: 28, right: 28, zIndex: 99,
          width: adminHover ? "auto" : 46,
          height: 46,
          padding: adminHover ? "0 20px" : "0",
          background: adminHover
            ? "linear-gradient(135deg,#0ea5e9,#0284c7)"
            : "rgba(14,165,233,0.15)",
          border: "1px solid rgba(14,165,233,0.4)",
          borderRadius: 50,
          cursor: "pointer",
          fontSize: adminHover ? 13 : 18,
          fontWeight: 700,
          fontFamily: "inherit",
          transition: "all 0.3s",
          display: "flex", alignItems: "center",
          justifyContent: "center", gap: 6,
          whiteSpace: "nowrap",
          boxShadow: adminHover ? "0 8px 24px rgba(14,165,233,0.4)" : "none",
          color: adminHover ? "white" : "#0ea5e9",
          backdropFilter: "blur(8px)",
          overflow: "hidden",
        }}
      >
        {adminHover ? <>⚙️ Admin Panel</> : "⚙️"}
      </button>

      {/* ── Admin Panel Overlay ── */}
      {adminOpen && (
        <AdminPanel
          projects={projects}
          onAdd={addProject}
          onUpdate={updateProject}
          onDelete={deleteProject}
          onClose={() => setAdminOpen(false)}
        />
      )}
    </div>
  );
}