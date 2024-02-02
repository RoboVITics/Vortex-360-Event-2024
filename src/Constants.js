
import simg1 from "./assets/autodesk_new.png";
import vect1 from "./assets/Robot_arm.png";

import vect2 from "./assets/robot_vector.png";
// import simg2 from "./sponsor-img/schneider.png";
// import simg3 from "./sponsor-img/texas-instruments.png";
// import simg4 from "./sponsor-img/siemens.png";
export const serverURL="http://localhost:5000"
export const buttons = [
  { id: 1, slide: "0", class: "active" },
  { id: 2, slide: "1", class: "" },
  { id: 3, slide: "2", class: "" },
  { id: 4, slide: "3", class: "" },
  { id: 5, slide: "4", class: "" },
  { id: 6, slide: "5", class: "" },
];

export const prizes = [
  {
    id: 1,
    title: "First Prize",
    desp: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis velit possimus reprehenderit sunt, adipisci mollitia natus architecto molestiae assumenda soluta quo distinctio atque! Suscipit dolorum laborum, voluptatum nihil dolorem cumque?",
    icon: "./award_2058516.png",
  },
  {
    id: 2,
    title: "Second Prize",
    desp: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis velit possimus reprehenderit sunt, adipisci mollitia natus architecto molestiae assumenda soluta quo distinctio atque! Suscipit dolorum laborum, voluptatum nihil dolorem cumque?",
    icon: "./award_2058517.png",
  },
  {
    id: 3,
    title: "Third Prize",
    desp: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis velit possimus reprehenderit sunt, adipisci mollitia natus architecto molestiae assumenda soluta quo distinctio atque! Suscipit dolorum laborum, voluptatum nihil dolorem cumque?",
    icon: "./award_2058521.png",
  },
];
export const timeline = [
  {
    id: 1,
    name: "DAY 1",
    upper: "carousel-item active",

  },

  {
    id: 2,
    name: "DAY 2",
    upper: "carousel-item",

  },
  {
    id: 3,
    name: "DAY 3",
    upper: "carousel-item",

  },
];

export const domains = [
  {
    id: 1,
    name: "Robotics in Medicine",
    upper: "carousel-item",
    desp: "Surgical precision, bionics and healthcare has transformed exponentially with the rise of robotics, this track focuses on designing of such hardware.",
    bg: vect1,
    bg2: vect2,
    content: [
      [
        "Subhead1",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, inventore.",
      ],
      [
        "Subhead2",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, inventore.",
      ],
      [
        "Subhead3",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, inventore.",
      ],
    ],
  },

  {
    id: 2,
    name: " Household robotics",
    desp: "This track focuses on designing Smart Home Solutions, Multi-Purpose Utility Robots and Security and Surveillance devices which shall improve user’s quality of life.",
    upper: "carousel-item",
    //upper: "carousel-item carousel-item-next carousel-item-start",
    bg: vect1,
    bg2: vect2,
    content: [
      [
        "Subhead1",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, inventore.",
      ],
      [
        "Subhead2",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, inventore.",
      ],
      [
        "Subhead3",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, inventore.",
      ],
    ],
  },
  {
    id: 3,
    name: "Product Design",
    desp: "In this track design adaptive ergonomic solutions, that prioritize innovation with space-saving concepts with portability and mobility which offer functionality without compromising style or efficiency.",
    upper: "carousel-item",
    bg: vect1,
    bg2: vect2,
    content: [
      [
        "Subhead1",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, inventore.",
      ],
      [
        "Subhead2",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, inventore.",
      ],
      [
        "Subhead3",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, inventore.",
      ],
    ],
  },
  {
    id: 4,
    name: "Design in Industry",
    desp: "Design efficient warehousing and storage solutions and smart logistics solutions and productivity enhancement machines equipped with advanced automation, predictive maintenance, and ergonomic design, fostering a more efficient and ergonomic industrial environment, in this track. ",
    upper: "carousel-item",
    bg: vect1,
    bg2: vect2,
    content: [
      [
        "Subhead1",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, inventore.",
      ],
      [
        "Subhead2",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, inventore.",
      ],
      [
        "Subhead3",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, inventore.",
      ],
    ],
  },
  {
    id: 5,
    name: "Open Ended/Ideation",
    desp: "An opportunity to explore the daily life practices, organizational structures, industrial functions completely different from previous tracks and imagination is your limit. ",
    upper: "carousel-item",
    bg: vect1,
    bg2: vect2,
    content: [
      [
        "Subhead1",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, inventore.",
      ],
      [
        "Subhead2",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, inventore.",
      ],
      [
        "Subhead3",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, inventore.",
      ],
    ],
  },
  {
    id: 6,
    name: "Autodesk",
    desp: "In this track it's time to bring your ideas to life using Fusion 360, a CAD modeling software powered by Autodesk",
    upper: "carousel-item active",
    bg: vect1,
    bg2: vect2,
    content: [
      [
        "Subhead1",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, inventore.",
      ],
      [
        "Subhead2",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, inventore.",
      ],
      [
        "Subhead3",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, inventore.",
      ],
    ],
  },
];

export const sponsors = [
  {
    id: 1,
    icon: simg1,
  },
  // { id: 2, icon: simg2 },
  // { id: 2, icon: simg3 },
  // { id: 2, icon: simg4 },
];