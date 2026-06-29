export const publication = {
  title:
    "Development of an Autonomous UAV for Seed and Fertilizer Distribution in Precision Agriculture",
  authors: "Z. A. Jibon, M. M. H. Akash, et al.",
  venue:
    "Proceedings of the 14th International Conference on Computing Communication and Networking Technologies (ICCCNT), Delhi, India, 2023, pp. 1–5",
  doi: "10.1109/ICCCNT56998.2023.10308310",
  doiUrl: "https://doi.org/10.1109/ICCCNT56998.2023.10308310",
};

export const researchInterests = [
  "Computer Vision",
  "Deep Learning",
  "Biometric Recognition",
  "Semantic Segmentation",
  "Applied Machine Learning",
];

export type ResearchItem = {
  title: string;
  role: string;
  period: string;
  points: string[];
  tech: string[];
};

export const research: ResearchItem[] = [
  {
    title: "Muzzle-Based Biometric Cattle Identification",
    role: "Research Engineer · Adorsho Pranisheba Ltd",
    period: "Oct 2022 – Jul 2023",
    points: [
      "Proposed an automated cattle-recognition pipeline using FaceNet/ArcFace, reaching 95% accuracy on 5,000+ samples.",
      "Designed YOLOv5 muzzle-region detection and an augmentation pipeline for real-world lighting and angle variability.",
      "Built an end-to-end biometric insurance-verification pipeline that cut manual verification time by 70%.",
    ],
    tech: ["PyTorch", "OpenCV", "YOLOv5", "FaceNet", "ArcFace"],
  },
  {
    title: "Semantic Segmentation for Autonomous Driving in Bangladesh",
    role: "Undergraduate Thesis · AIUB",
    period: "Jun 2022 – Oct 2022",
    points: [
      "Systematically evaluated U-Net, DeepLab and PSPNet on a custom urban-traffic dataset.",
      "Collected and annotated 2,000+ Dhaka traffic images to improve generalization in dense conditions.",
      "Identified key failure modes for urban road scenes and proposed data-centric improvements.",
    ],
    tech: ["PyTorch", "U-Net", "DeepLab", "PSPNet", "Label Studio"],
  },
  {
    title: "Autonomous Mars Rover Navigation System",
    role: "Software Team Lead · AIUB Robotic Crew",
    period: "Jul 2021 – Apr 2023",
    points: [
      "Led the software pipeline for a rover navigation system that placed 11th worldwide at IRC 2023.",
      "Integrated RTK-GNSS and AR-Tag localization with ROS-based navigation and sensor fusion.",
      "Developed MobileNetV3 terrain classification and custom real-time inference modules; mentored 4 juniors.",
    ],
    tech: ["ROS", "PyTorch", "MobileNetV3", "YOLOv5", "OpenCV"],
  },
];
