import { Flag, Languages, Mail, Phone, User } from "lucide-react";
import type { AboutData, TimelineData } from "./resume-section-types";

export const aboutData: AboutData = {
  title: "About Me",
  description:
    "Passionate full-stack developer with a knack for transforming complex requirements into efficient and scalable web solutions.",
  infos: [
    { field: "Name", value: "Ganesh Naidu", icon: User },
    { field: "Phone", value: "+91 6303392483", icon: Phone },
    { field: "Email", value: "ganeshnaidudsa@gmail.com", icon: Mail },
    { field: "Nationality", value: "Indian", icon: Flag },
    { field: "Languages", value: "English, Hindi, Telugu", icon: Languages },
  ],
};

export const experienceData: TimelineData = {
  title: "My Experience",
  description:
    "A journey through Tech experience, each contributing to my growing expertise.",
  items: [
    {
      title: "Associate Engineer",
      subtitle: "Virtusa, Hyderabad, India",
      duration: "JAN 2024 — Present",
      logo: "/nac.png",
      description: "Developing highly scalable applications using Spring Boot and React.",
    },
    {
      title: "Software Devloper Intern",
      subtitle: "Cognizant, Hyderabad, India",
      duration: "SEPT 2023 — JAN 2024",
      logo: "/proxym.png",
      description: "Developed highly optimised frontend application using React and Redux Js.",
    },
    {
      title: "Full Stack Developer Intern",
      subtitle: "Virtusa, Chennai, India",
      duration: "JAN 2023 — JULY 2023",
      logo: "",
      description : "Converted a Spring Boot application from monolithic to microservices architecture."
    },
    
  ],
};

export const educationData: TimelineData = {
  title: "My Education",
  description:
    "My education has honed my analytical and problem-solving skills, driving my growth in software development.",
  items: [
    {
      title: " Bachelor's Degree",
      subtitle: "Rajeev Gandhi Memorial College, Andhra Pradesh, India.",
      duration: "AUG 2019 — MAY 2023",
      logo: "/esprit.png",
      description:
        "Focused on full-stack development, integrating advanced software engineering principles to build scalable and efficient applications.",
    },
    {
      title: "Pre-University Course",
      subtitle: "Narayana Group of Colleges, Andhra Pradesh, India.",
      duration: "JUN 2017 — MAR 2019",
      logo: "/fsm.png",
      description: "Gained a strong foundation in computer science and programming fundamentals.",
    },
    {
      title: "High School",
      subtitle: "Narayana Group of Schools, Andhra Pradesh, India.",
      duration: "JUN 2016 — MAR 2017",
      logo: "",
      description: "Excelled in mathematics, laying the groundwork for future technical studies.",
    },
  ],
};
