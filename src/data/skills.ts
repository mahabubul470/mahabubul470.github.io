export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Rust", "Go", "C#", "C++"],
  },
  {
    label: "Backend",
    items: ["FastAPI", "Django", "Flask", "NestJS", ".NET", "SQLAlchemy", "Celery"],
  },
  {
    label: "AI / ML",
    items: ["PyTorch", "TensorFlow", "OpenCV", "LangChain", "RAG", "Computer Vision", "MCP"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "Patroni", "MySQL", "MongoDB", "Redis", "Vector DBs"],
  },
  {
    label: "Infra & DevOps",
    items: ["Docker", "GitHub Actions", "AWS", "GCP", "NGINX", "HAProxy", "Keycloak", "APISIX", "Linux"],
  },
  {
    label: "Observability",
    items: ["Prometheus", "Grafana", "Loki", "Sentry"],
  },
  {
    label: "Frontend",
    items: ["React", "Vue", "Svelte", "Tailwind CSS", "Socket.IO"],
  },
];

export const achievements = [
  "Dr. Anwarul Abedin Leadership Award (Gold Medal) — AIUB's highest student honor, 2023",
  "11th place worldwide — International Rover Challenge (IRC) 2023, Space Robotics Society",
  "University Rover Challenge (URC) 2022 — Mars Society",
  "IELTS 7.0 / 9.0 — English (Professional)",
];
