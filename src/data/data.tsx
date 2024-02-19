import Image from "../assets/social.jpg";
import phpImage from "../assets/php.png";
import dockerImg from "../assets/docker.png";
import reactImg from "../assets/react.png";
import shelterImg from "../assets/sheltermart.png";
import ogsaaImg from "../assets/ogsaa.png";
import armImg from "../assets/arm.png";

import mosaveImg from "../assets/Mosave.png";
import moticketImg from "../assets/moticket.png";
import {
  ImageType,
  MenuProps,
  ProjectCardProps,
  SkillsProps,
  TimelineProps,
} from "../types/types";
export const URL = "https://olumide-portfolio.vercel.app/";
export const NAME = "Olumide Odebiyi";


export const SECTIONS = ["Home", "Experience", "Projects", "Skills"];
export const HERO_IMAGE = "https://picsum.photos/id/1005/1600/1400";
export const CTA_TEXT = "About Me";
export const MENU: MenuProps[] = [
  { key: 1, route: "#home", name: SECTIONS[0] },
  { key: 2, route: "#experience", name: SECTIONS[1] },
  { key: 3, route: "#projects", name: SECTIONS[2] },
  // { key: 4, route: "#skills", name: SECTIONS[3] },
];

export const GREETING_TEXT = "Hello, ";
export const GREETING_DESCRIPTION =
  "My name is Olumide Odebiyi, a software engineer with over 9 years experience. ";

export const EXPERIENCE: TimelineProps[] = [
  {
    key: 1,
    company: "Avante Consulting Solutions Ltd.",
    position: "Lead, Software Engineer",
    logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    start: "July, 2015  ",
    end: "Present",
    description: "Design and development of different web and mobile applications for corporate clients and small businesses using industry standard technology stacks..",
  },
  {
    key: 2,
    company: "Simplex Business Solutions Ltd.",
    position: "Software Engineer",
    logo: "https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png",
    start: "January, 2015",
    end: "June, 2015",
    description: "",
  },
  {
    key: 3,
    company: "Speckless Innovations Ltd.",
    position: "Head, Web Projects",
    logo: "https://www.backbase.com/wp-content/uploads/2020/05/Microsoft-Logo-PNG-Transparent.png",
    start: "March, 2013",
    end: "December, 2014 ",
    description: "",
  },
  {
    key: 4,
    company: "Dafidi IT Solutions",
    position: "Program Analyst",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png",
    start: "June, 2012 ",
    end: "February, 2014",
    description: "",
  },
];
export const KEYWORDS = [
  "Developer",
  "front end developer based in India",
  "piyush mehta",
  "Awesome Portfolio",
];
export const IMAGE: ImageType = {
  src: Image,
  height: "600",
  width: "314",
};

export const projects: ProjectCardProps[] = [
  {
    id: 1,
    projectName: "MoTickets UK",
    projectDescription:
      "A seamless event management platform with frontend and adminpanel designed to create memorable events.",
    projectImageLogo: moticketImg,
    link: "https://motickets.co.uk",
    buttonText: "View Project",
    tech: ["React", "TailwindCSS", "Typescript", "NodeJs"],
  },
  {
    id: 1,
    projectName: "MoLoyal Agent App",
    projectDescription:
      "A mobile application with a suite of features for the agents of the  MoLoyal, MoTickets and MoSave brand. Allows agents to perform Loyalty, fulfil savings, sell event tickets and perform other transactions for customers.",
    projectImageLogo: mosaveImg,
    link: "https://play.google.com/store/apps/details?id=com.avantecs.moloyal",
    buttonText: "View Project",
    tech: ["Ionic", "Angular", "SCSS", "Javascript"],
  },
  {
    id: 2,
    projectName: "Ogun State Adverting Agency Portal",
    projectDescription:
      "Ogun State Advertising Agency (OGSAA) portal for registering structural and mobile advertising types in Ogun State and recording bill payments.",
    projectImageLogo: ogsaaImg,
    link: "https://ogsaaonline.com",
    buttonText: "View Project",
    tech: ["Boostrap4", "Slim PHP(Admin)"],
  },
  {
    id: 3,
    projectName: "ShelterMart Nigeria",
    projectDescription:
      "Property Rental and Listing Application for ShelterMart Nigeria Ltd. built with (React + Firebase). Used to track their growth and reach.",
    projectImageLogo: shelterImg,
    link: "https://shelter-mart-app.vercel.app/",
    buttonText: "View Project",
    tech: ["React", "NodeJs", "Firebase"],
  },
  {
    id: 4,
    projectName: "BizNews Blog",
    projectDescription:
      "A blog based on the https://www.marketaux.com/ free stock market and finance news API.",
    projectImageLogo: armImg,
    link: "https://biznews-deployment.netlify.app/",
    buttonText: "View Project",
    tech: ["React", "Typescript", "Marketaux API"],
  },
];
/**
 *  @type {SkillsProps}
 * skills
 * Kept level as random but you can hard code it if you want
 */
export const skills: SkillsProps[] = [
  {
    id: 1,
    img: phpImage,
    skill: "Javascript",
    level: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: 2,
    img: reactImg,
    skill: "React",
    level: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: 3,
    img: dockerImg,
    skill: "CSS",
    level: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: 4,
    img: `https://picsum.photos/id/1/600/314`,
    skill: "HTML",
    level: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: 5,
    img: `https://picsum.photos/id/1/600/314`,
    skill: "Java",
    level: Math.floor(Math.random() * 100) + 1,
  },
  {
    id: 6,
    img: `https://picsum.photos/id/1/600/314`,
    skill: "Googling",
    level: Math.floor(Math.random() * 100) + 1,
  },
];
