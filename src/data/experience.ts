export type Job = {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
  tech: string[];
};

export const experience: Job[] = [
  {
    company: "Fingerprint Information Technology Ltd",
    role: "Software Engineer",
    period: "Dec 2024 – Present",
    location: "Dhaka, Bangladesh",
    points: [
      "Architected the Moneybag payment gateway backend end to end — requirements, R&D, and integration of mobile and bank payment processors for Bangladesh Bank PSO compliance.",
      "Designed a domain-driven schema and layered service architecture so settlement, reconciliation and merchant workflows scale independently.",
      "Built a multi-tenant merchant platform: RBAC, API-key rate limiting, webhook delivery and affiliate commission tracking.",
      "Deployed a PostgreSQL Patroni cluster across 3 data centers with automatic failover, plus a full observability stack and CI/CD with health checks and rollback.",
    ],
    tech: ["Python", "FastAPI", "PostgreSQL", "Patroni", "Celery", "Redis", "Docker", "Grafana"],
  },
  {
    company: "Yildiz Consultancy",
    role: "Software Engineer (Part-time, Remote)",
    period: "Aug 2025 – Present",
    location: "Remote",
    points: [
      "Built a multi-tenant media localization and AI dubbing platform — multilingual voice generation, translation and subtitle sync for podcast and video content.",
      "Implemented an ElevenLabs voice-synthesis pipeline with request stitching and emotional presets for natural prosody on long-form audio.",
      "Architected My Smart Homes (MSH), a custom-branded Home Assistant platform with consumer and enterprise tracks and companion Android/iOS apps.",
      "Designed a meta-repo architecture with Git submodules, cutting 2–4 hours of manual upstream conflict resolution per sync to a single scripted operation.",
    ],
    tech: ["Python", "FastAPI", "React", "TypeScript", "Home Assistant", "ElevenLabs", "DeepL", "AWS"],
  },
  {
    company: "Uhurutek Solutions Ltd",
    role: "Software Engineer",
    period: "Sept 2023 – Nov 2024",
    location: "Dhaka, Bangladesh",
    points: [
      "Built secure RAG chatbots with LangChain and the OpenAI API, cutting customer-support response time by 50%.",
      "Delivered an on-premise chatbot for a government tax agency meeting strict security and compliance — no cloud data exposure.",
      "Reached 92% retrieval accuracy on complex tax queries via prompt engineering and a custom PDF/Word/web ingestion pipeline.",
      "Built an API gateway with Keycloak auth and APISIX rate limiting; migrated legacy infra to FastAPI/PostgreSQL with distributed Redis caching.",
    ],
    tech: ["Python", "FastAPI", "LangChain", "APISIX", "Keycloak", "Redis", "Vector DB"],
  },
  {
    company: "Adorsho Pranisheba Ltd",
    role: "Software Engineer",
    period: "Oct 2022 – Aug 2023",
    location: "Dhaka, Bangladesh",
    points: [
      "Built a muzzle-based biometric cattle-recognition backend with trained CNN models — 95% identification accuracy across 5,000+ records.",
      "Integrated it into a full herd-management system with insurance verification and IoT-driven health monitoring.",
      "Promoted from intern to Software Engineer within 3 months for outstanding technical contributions.",
    ],
    tech: ["Python", "Django", "OpenCV", "PyTorch", "YOLOv5", "MySQL", "RabbitMQ"],
  },
];
