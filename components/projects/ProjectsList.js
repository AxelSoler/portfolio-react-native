import yellowroomsimg from "../../img/projects/YellowRooms.png";
import monsterimg from "../../img/projects/MonsterHunterWorld.png";
import mycroverseimg from "../../img/projects/Mycroverse2.0.png";
import afi from "../../img/projects/afi.png";
import rocketbooking from "../../img/projects/rp1.png";
import homeplate from "../../img/projects/homeplate.png";
import ghs from "../../img/projects/ghs.png";

const projects = [
  {
    name: "GHS",
    description: "A web app for Grapevine High School to manage football players’ profiles and track their college offers in an organized and accessible way.",
    longDescription:
      "This web application was developed for a school to manage and showcase its football players and their college offers. Coaches and staff can easily add, update, and view player profiles, including personal information, athletic stats, highlight videos, and academic achievements. The platform also tracks college offers received by each player, providing a clear and organized view of their recruitment progress. This tool enhances visibility for student-athletes and simplifies communication between the school and interested universities.",
    image: ghs,
    technologies: [
      "JavaScript",
      "React",
      "CSS",
      "Tailwind",
      "NodeJS",
      "Express"
    ],
    live: "https://app.stangsfb.com/",
    repository: "private",
    position: "Front End Developer",
    company: "GoodSoftwareDev"
  },
  {
    name: "Rocket-Booking (RP-1)",
    description: "Users can create and manage targeted SMS and email campaigns to promote their services through an intuitive and centralized platform designed for effective outreach.",
    longDescription: "This web application allows users to create and manage personalized SMS and email marketing campaigns targeted to their contact lists. Designed to help small businesses and professionals promote their services, the platform offers easy-to-use tools for composing messages, scheduling delivery, and tracking engagement, all in one place.",
    image: rocketbooking,
    technologies: [
      "JavaScript",
      "React",
      "CSS",
      "Tailwind",
      "NodeJS",
      "Express"
    ],
    live: "private",
    repository: "private",
    position: "Front End Developer",
    company: "GoodSoftwareDev"
  },
  {
    name: "Home Plate",
    description: "Each user can design and customize their own personal page with content, styles, and layouts that reflect their identity, making it easy to share who they are in a unique and professional way.",
    longDescription: "This project allows users to create and personalize their own individual web pages, tailoring content, colors, fonts, and layout to suit their preferences. The platform provides a simple and intuitive interface for editing, so users can express their personal brand or online identity without needing technical skills.",
    image: homeplate,
    technologies: [
      "JavaScript",
      "React",
      "CSS",
      "Tailwind",
      "NodeJS",
      "Express"
    ],
    live: "private",
    repository: "private",
    position: "Front End Developer",
    company: "GoodSoftwareDev"
  },
  {
    name: "American Fleet Insurance",
    description:
      "American Fleet Insurance is the fastest growing commercial vehicle insurance agency in the US. We build operational software to decrease the sales process timeline.",
    image: afi,
    technologies: [
      "JavaScript",
      "React",
      "CSS",
      "Tailwind",
      "NodeJS",
      "Express"
    ],
    live: "private",
    repository: "private",
    position: "Front End Developer",
    company: "GoodSoftwareDev"
  },
  {
    name: "YellowRooms",
    description:
      "Final project for the Microverse program. A full-stack hotel booking platform where users can search, reserve, and manage their stay in stylish Yellow Rooms. Built with React and Ruby on Rails for a seamless experience.",
    image: yellowroomsimg,
    technologies: ["JavaScript", "React", "CSS", "Ruby", "Rails"],
    live: "https://yellow-rooms.netlify.app/",
    repository: "https://github.com/AxelSoler/YellowRooms-Front",
    position: "Full Stack Developer",
    company: "Microverse"
  },
  {
    name: "Monster Hunter World",
    description:
      "An interactive web application that provides detailed data and statistics on all monsters from the Monster Hunter World game. Users can filter, explore, and learn about each creature’s behavior and attributes.",
    image: monsterimg,
    technologies: ["CSS", "JavaScript", "React", "Redux"],
    live: "https://classy-banoffee-260a19.netlify.app/",
    repository: "https://github.com/AxelSoler/monster-hunter-world",
    position: "Full Stack Developer",
    company: "Microverse"
  },
  {
    name: "Mycroverse-2.0",
    description:
      "A sleek and modern landing page promoting an educational program. Highlights the course benefits and encourages visitors to enroll through interactive design.",
    image: mycroverseimg,
    technologies: ["CSS", "HTML", "JavaScript"],
    live: "https://axelsoler.github.io/HTML-CSS-JavaScript-capstone-project---Mycroverse-2.0/",
    repository:
      "https://github.com/AxelSoler/HTML-CSS-JavaScript-capstone-project---Mycroverse-2.0",
    position: "Front End Developer",
    company: "Microverse"
  }
];

export default projects;
