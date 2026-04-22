import type { Project } from "@/data/types";

export const projectsEn: Project[] = [
  {
    slug: "formula-student-autonomous-car-path-planning-and-tracking",
    title: "Formula Student Autonomous Car - Path Planning and Tracking Controller",
    summary:
      "Development work for Formula Student Artificial Intelligence focused on cone data processing, path planning, vehicle dynamics modelling, and MPC-based trajectory tracking.",
    status: "archived",
    timeframe: "Oct 2022 - Apr 2024",
    featured: true,
    stack: [
      "Formula Student AI",
      "Simulink",
      "CarSim",
      "MPC",
      "A* Path Planning",
      "Vehicle Dynamics"
    ],
    highlights: [
      "Processed cone coordinate CSV data from the perception workflow and visualised track layouts for path analysis.",
      "Calculated centreline waypoints using midpoint and Euclidean distance methods between yellow and blue cones.",
      "Built a simplified 3-DOF vehicle dynamics model in Simulink to support controller development.",
      "Combined a 7-DOF vehicle dynamics model with an MPC controller through the CarSim-Simulink simulation platform."
    ],
    responsibilities: [
      "Worked as path planning and tracking engineer across Formula Student AI project work.",
      "Developed path planning and tracking controller logic for autonomous Formula Student scenarios.",
      "Supported autonomous driving system operation as an ADS-DV operator.",
      "Analysed simulation behaviour against Formula Student-style dynamic constraints."
    ],
    problemSolved:
      "The project explored how to generate a usable racing line from perception inputs and validate a tracking controller with stable, controllable behaviour under Formula Student autonomous driving constraints.",
    cover: {
      src: "/projects/formula-student-autonomous-car-cover.png",
      alt: "Placeholder cover for the Formula Student autonomous car project"
    },
    screenshots: [
      {
        src: "/projects/formula-student-autonomous-car-screen-1.png",
        alt: "Placeholder screenshot for path planning and tracking controller work"
      }
    ],
    links: [
      {
        label: "GitHub profile",
        href: "https://github.com/BoykaHe"
      }
    ],
    readmeSource: {
      kind: "inline",
      content: [
        "# Formula Student Autonomous Car - Path Planning and Tracking Controller",
        "",
        "This project focuses on path planning and tracking control for Formula Student Artificial Intelligence scenarios.",
        "",
        "## Current evidence status",
        "",
        "- Real project summary has been added from the CV.",
        "- Repository, screenshots, simulation artefacts, and full technical report links are still TODO.",
        "",
        "## Technical areas",
        "",
        "- Cone coordinate processing",
        "- Centreline waypoint generation",
        "- A* path planning",
        "- MPC tracking control",
        "- Simulink and CarSim-based simulation"
      ].join("\n")
    }
  },
  {
    slug: "design-of-cav-pod",
    title: "Design of CAV Pod",
    summary:
      "A connected and autonomous vehicle pod design project for the University of Leeds, covering electric shuttle concept development, chassis/suspension/steering design, sensor selection, path planning, and FMEA.",
    status: "archived",
    timeframe: "Sep 2023 - Dec 2023",
    featured: true,
    stack: [
      "CAV Design",
      "Chassis Design",
      "Suspension Design",
      "Steering Design",
      "Ansys Granta EduPack",
      "FMEA"
    ],
    highlights: [
      "Collaborated with automotive engineering peers to design an electric autonomous shuttle pod for the University of Leeds.",
      "Contributed to chassis, suspension, and steering design decisions for the vehicle concept.",
      "Worked on sensor selection plus path planning and trajectory tracking considerations.",
      "Used Ansys EduPack for material selection and analysis of key vehicle components."
    ],
    responsibilities: [
      "Owned chassis, suspension, and steering design work within the team project scope.",
      "Supported sensor selection and autonomous driving function planning.",
      "Contributed to material selection analysis and failure mode and effects analysis.",
      "Helped translate a broad CAV concept into a more structured engineering design proposal."
    ],
    problemSolved:
      "The project addressed how to turn an autonomous shuttle idea into a structured engineering concept, balancing vehicle hardware design, autonomy requirements, materials, and risk analysis.",
    cover: {
      src: "/projects/design-of-cav-pod-cover.png",
      alt: "Placeholder cover for the CAV Pod design project"
    },
    screenshots: [
      {
        src: "/projects/design-of-cav-pod-screen-1.png",
        alt: "Placeholder screenshot for CAV Pod design work"
      }
    ],
    links: [
      {
        label: "Project documentation - TODO",
        href: "https://github.com/BoykaHe"
      }
    ],
    readmeSource: {
      kind: "inline",
      content: [
        "# Design of CAV Pod",
        "",
        "This project covers the conceptual design of an electric connected and autonomous shuttle pod.",
        "",
        "## Current evidence status",
        "",
        "- Real project summary has been added from the CV.",
        "- CAD screenshots, final report, FMEA table, and design diagrams are still TODO.",
        "",
        "## Technical areas",
        "",
        "- Chassis design",
        "- Suspension design",
        "- Steering design",
        "- Sensor selection",
        "- Material selection",
        "- FMEA"
      ].join("\n")
    }
  },
  {
    slug: "conceptual-design-autonomous-vehicle-self-driving-system",
    title: "Conceptual Design of Autonomous Vehicle Self-Driving System",
    summary:
      "A conceptual autonomous driving system architecture project covering sensor selection and fusion, path planning, and the overall software/hardware framework.",
    status: "archived",
    timeframe: "Mar 2024",
    featured: true,
    stack: [
      "Autonomous System Architecture",
      "Sensor Selection",
      "Sensor Fusion",
      "Path Planning",
      "Software/Hardware Framework"
    ],
    highlights: [
      "Developed a conceptual architecture for an autonomous vehicle self-driving system.",
      "Considered sensor selection, sensor fusion, path planning, and software/hardware framework design.",
      "Connected high-level autonomous driving requirements to a structured system architecture."
    ],
    responsibilities: [
      "Defined the main autonomous driving system architecture.",
      "Mapped key subsystem responsibilities across sensing, planning, and platform layers.",
      "Prepared the concept as an engineering design artefact rather than a purely visual proposal."
    ],
    problemSolved:
      "The project clarified how an autonomous vehicle system can be decomposed into sensing, fusion, planning, and implementation layers before moving into detailed component or algorithm development.",
    cover: {
      src: "/projects/autonomous-vehicle-self-driving-system-cover.png",
      alt: "Placeholder cover for the autonomous vehicle self-driving system concept"
    },
    screenshots: [
      {
        src: "/projects/autonomous-vehicle-self-driving-system-screen-1.png",
        alt: "Placeholder screenshot for autonomous system architecture work"
      }
    ],
    links: [
      {
        label: "Architecture documentation - TODO",
        href: "https://github.com/BoykaHe"
      }
    ],
    readmeSource: {
      kind: "inline",
      content: [
        "# Conceptual Design of Autonomous Vehicle Self-Driving System",
        "",
        "This project documents the concept-level design of an autonomous vehicle self-driving system.",
        "",
        "## Current evidence status",
        "",
        "- Real project summary has been added from the CV.",
        "- System diagrams, report excerpts, and detailed architecture documentation are still TODO.",
        "",
        "## Technical areas",
        "",
        "- Sensor selection",
        "- Sensor fusion",
        "- Path planning",
        "- Software/hardware framework design",
        "- Autonomous system decomposition"
      ].join("\n")
    }
  }
];
