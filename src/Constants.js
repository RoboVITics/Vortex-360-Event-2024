import imgd1 from "./assets/robotsurgery.jpg";
import imgd2 from "./assets/internet-of-things-iot-istock-1201992144.jpg";
import imgd3 from "./assets/abstract-technology-background-blue-glowing_41981-259.avif";
import imgd4 from "./assets/electronic-engineering-1.jpg";
import imgd5 from "./assets/gff.jpg";
import simg1 from "./assets/autodesk_new.png";
import vect1 from "./assets/Robot_arm.png";

import vect2 from "./assets/robot_vector.png";
// import simg2 from "./sponsor-img/schneider.png";
// import simg3 from "./sponsor-img/texas-instruments.png";
// import simg4 from "./sponsor-img/siemens.png";

export const buttons = [
  { id: 1, slide: "0", class: "active" },
  { id: 2, slide: "1", class: "" },
  { id: 3, slide: "2", class: "" },
  { id: 4, slide: "3", class: "" },
  { id: 5, slide: "4", class: "" },
];

export const timelinebuttons = [
  { id: 1, slide: "0", class: "active" },
  { id: 2, slide: "1", class: "" },
  { id: 3, slide: "2", class: "" },
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
    name: "Track 1",
    upper: "carousel-item active",
    desp: "Tracks would be released soon.",
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
    name: "Track 2",
    desp: "Tracks would be released soon.",
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
    name: "Track 3",
    desp: "Tracks would be released soon.",
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
    name: "Track 4",
    desp: "Tracks would be released soon.",
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
    name: "Track 5",
    desp: "Tracks would be released soon.",
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
export const serverURL="http://localhost:5000"