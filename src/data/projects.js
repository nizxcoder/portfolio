import digiOneStep from "../projectimage/digionestep.png";
import bookingRoute from "../projectimage/bookingroute.png";
import onHousing from "../projectimage/onhousing.png";
import newsImg from "../projectimage/newsApp.png";
import textUtil from "../projectimage/textutils.png";
import crosswind from "../projectimage/crosswind.png";
import eisaku from "../projectimage/eisaku.png";
import rivago from "../projectimage/rivago.png";

export const PROJECTS = [
  {
    imageSrc: crosswind,
    title: "Crosswind – Kids Learning Platform",
    description:
      "A subscription-based learning app for kids featuring quizzes, games, and puzzles. Designed a Candy Crush–style progression system and integrated a payment gateway with scalable architecture.",
    link: "https://crosswindeducation.com/",
  },
  {
    imageSrc: eisaku,
    title: "Eisaku – Logistics Management Web App",
    description:
      "Developed a scalable logistics platform for large-scale courier operations, shipment tracking, and order lifecycle. Implemented robust RBAC for multi-level permissions and a modular architecture.",
    link: "https://eisaku.co.in/",
  },
  {
    imageSrc: rivago,
    title: "Rivago Infotech – Recruitment & Staffing",
    description:
      "Web platform for a global staffing company enabling seamless talent acquisition and job management. Built scalable modules to handle candidate sourcing and recruitment workflows across industries.",
    link: "https://www.rivagoinfotech.com/",
  },
  {
    imageSrc: bookingRoute,
    title: "BookingRoute - Hotel Booking System",
    description:
      "Designed a seamless room booking experience with custom guest selection, seasonal pricing logic (weekday/weekend), and a dynamic grid-based UI using Flutter. Integrated state management using GetX and structured scalable business logic.",
    link: "#",
  },
  {
    imageSrc: onHousing,
    title: "OnHousing - A Mutli-Service Booking System",
    description:
      "Built the entire UI/UX of the mobile app in Flutter, managing complex state flows using GetX. Integrated in-app chat, secure online payment handling, and services like land, hotel, cab, shopping, and bus booking.",
    link: "#",
  },
  {
    imageSrc: newsImg,
    title: "Restro - A Restaurant Management System",
    description:
      "Built a full-stack restaurant delivery system using the MERN stack. Features real-time delivery tracking, multi-order routing, and role-based dashboards with WebSockets and TomTom Maps. Handled end-to-end architecture and UI/UX.",
    link: "#",
  },
];
