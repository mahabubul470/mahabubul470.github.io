export const site = {
  name: "Md Mahabubul Hasan",
  shortName: "Mahabubul Hasan",
  initials: "MH",
  role: "Software Engineer",
  tagline:
    "I build high-availability backend systems and cloud-native infrastructure — across fintech, AI, and IoT.",
  blurb:
    "Software engineer with 3+ years shipping scalable payment platforms, observability stacks, and AI systems. Also an applied-ML / computer-vision researcher.",
  location: "Dhaka, Bangladesh",
  email: "mahabubul470@gmail.com",
  resumes: {
    professional: "/Mahabubul-Hasan-Resume.pdf",
    academic: "/Mahabubul-Hasan-Academic-CV.pdf",
  },
  socials: {
    github: "https://github.com/mahabubul470",
    linkedin: "https://linkedin.com/in/mahabubul470",
    scholar: "https://scholar.google.com/citations?user=-MoBecsAAAAJ",
    leetcode: "https://leetcode.com/mahabubul470",
    codeforces: "https://codeforces.com/profile/de_code",
  },
};

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "3+", label: "Years building backends" },
  { value: "37.8K/s", label: "Events synced (LiveSQL)" },
  { value: "11th", label: "Worldwide, IRC 2023" },
  { value: "🥇", label: "AIUB Leadership Gold Medal" },
];
