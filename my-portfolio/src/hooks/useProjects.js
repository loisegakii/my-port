import { useState, useEffect } from "react";

// ── Your real projects pre-loaded as defaults ──────────────────────────────
const DEFAULT_PROJECTS = [
  {
    id: 1,
    title: "Clinic Management System",
    category: "Software",
    description:
      "A full-featured clinic management platform handling patient records, appointment scheduling, billing, and doctor dashboards — built with React and Django.",
    image: "",
    link: "#",
    tech: "React, Django, PostgreSQL",
  },
  {
    id: 2,
    title: "German School Online",
    category: "Web",
    description:
      "A professional e-learning website for a German language school, featuring course listings, student enrolment, and an integrated payment system.",
    image: "",
    link: "#",
    tech: "WordPress, WooCommerce, SEO",
  },
  {
    id: 3,
    title: "EBM Gym Website",
    category: "Web",
    description:
      "A high-energy gym website with class schedules, membership plans, trainer profiles, and a custom booking system — fully mobile-responsive.",
    image: "",
    link: "#",
    tech: "React, Tailwind CSS",
  },
  {
    id: 4,
    title: "Dasa Hair",
    category: "Web",
    description:
      "A sleek e-commerce website for a hair products brand, featuring a product catalogue, cart, checkout, and Instagram-style gallery.",
    image: "",
    link: "#",
    tech: "WordPress, WooCommerce",
  },
  {
    id: 5,
    title: "Zawadi",
    category: "Web",
    description:
      "An elegant gifting platform allowing users to browse curated gift collections, personalise orders, and schedule deliveries.",
    image: "",
    link: "#",
    tech: "React, Node.js",
  },
  {
    id: 6,
    title: "Hustle Stack",
    category: "Software",
    description:
      "A productivity and project management tool for freelancers and small teams — with task boards, time tracking, and client invoicing built in.",
    image: "",
    link: "#",
    tech: "React, Django, REST API",
  },
];

const STORAGE_KEY = "loise_njeru_projects";

export default function useProjects() {
  const [projects, setProjects] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : DEFAULT_PROJECTS;
    } catch {
      return DEFAULT_PROJECTS;
    }
  });

  // Persist to localStorage on every change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  }, [projects]);

  const addProject = (project) => {
    const newProject = { ...project, id: Date.now() };
    setProjects((prev) => [newProject, ...prev]);
    return newProject;
  };

  const updateProject = (id, updates) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updates } : p))
    );
  };

  const deleteProject = (id) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const resetToDefaults = () => {
    setProjects(DEFAULT_PROJECTS);
  };

  return { projects, addProject, updateProject, deleteProject, resetToDefaults };
}