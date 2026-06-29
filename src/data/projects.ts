export type Project = {
  name: string;
  tag: string;
  blurb: string;
  highlights: string[];
  stat?: { value: string; label: string };
  tech: string[];
  links: { label: string; href: string }[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    name: "LiveSQL",
    tag: "Open source · npm",
    blurb:
      "Real-time sync for PostgreSQL. When a row changes, every connected client sees it instantly — no polling, no manual invalidation, no infrastructure changes.",
    highlights: [
      "WAL-based CDC logical replication with offset-based backfill and event replay on reconnect.",
      "Multi-package SDK with React, Vue, Svelte and vanilla-JS bindings; JWT auth, row-level permissions, filtered column access.",
      "Backpressure handling, WAL-slot monitoring and failover recovery — covered by 163 unit + 23 chaos tests.",
    ],
    stat: { value: "37,872/s", label: "events at p95 96ms · 1,000 clients · 0 failures" },
    tech: ["TypeScript", "PostgreSQL", "WebSockets", "React", "Vue", "Svelte"],
    links: [
      { label: "GitHub", href: "https://github.com/mahabubul470/liveSQL" },
      { label: "npm", href: "https://www.npmjs.com/package/@livesql/server" },
    ],
    featured: true,
  },
  {
    name: "Canopy Cloud",
    tag: "Open source",
    blurb:
      "A budget- and carbon-aware infrastructure architect. Canopy scans your cloud and produces a unified EcoWeight score that blends cost and carbon for every workload.",
    highlights: [
      "EcoWeight scoring, idle detection, right-sizing and greener-region migration across 48 AWS + GCP regions.",
      "CARL scheduler defers workloads by grid carbon intensity; shift-left `canopy plan` for Terraform & Pulumi.",
      "MCP servers expose billing/carbon/Slack/GitHub tools to LLM hosts, with interactive, Slack or GitHub approval flows.",
    ],
    stat: { value: "30–35%", label: "of cloud spend targeted as overprovisioning waste" },
    tech: ["Python", "FastAPI", "AWS", "GCP", "MCP", "Agentic AI"],
    links: [{ label: "GitHub", href: "https://github.com/mahabubul470/canopy-cloud" }],
    featured: true,
  },
  {
    name: "gpp (git++)",
    tag: "Open source · Rust",
    blurb:
      "An AI-native version control system. gpp replaces Git's commit-centric model with a continuous-capture architecture built for a world where AI agents are first-class contributors.",
    highlights: [
      "Content-addressed store (BLAKE3 + zstd), tree-sitter semantic diffs, and a full Git import/export bridge.",
      "Encrypted knowledge graph, Noise_XX P2P sync, policy engine, per-changeset cost tracking, and a ratatui TUI.",
      "Multi-crate Rust workspace — all 9 phases implemented, 133 tests passing, clippy & fmt clean.",
    ],
    stat: { value: "9 / 9", label: "architecture phases implemented" },
    tech: ["Rust", "tree-sitter", "BLAKE3", "MCP", "P2P"],
    links: [{ label: "GitHub", href: "https://github.com/mahabubul470/gpp" }],
    featured: true,
  },
  {
    name: "Moneybag Payment Gateway",
    tag: "Fingerprint IT · Work",
    blurb:
      "A Bangladesh Bank PSO-compliant payment gateway built from the ground up — settlement, reconciliation, and a multi-tenant merchant platform.",
    highlights: [
      "Automated settlement engine: configurable rules, EMI installments, recurring invoicing, subscription billing, payment links.",
      "Bank reconciliation, dispute resolution, refund/hold workflows and end-to-end audit trails for regulatory review.",
      "PostgreSQL Patroni cluster across 3 data centers with automatic failover; full Prometheus/Grafana/Loki/Sentry observability.",
    ],
    stat: { value: "3 DCs", label: "high-availability Patroni cluster with auto-failover" },
    tech: ["Python", "FastAPI", "Patroni", "Celery", "Redis", "Docker"],
    links: [],
    featured: true,
  },
];
