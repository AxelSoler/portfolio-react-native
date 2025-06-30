"use client";
import { useEffect, useState } from "react";
import "./index.css";
import ProjectsModal from "./ProjectsModal";

const Projects = () => {
  const [projectsModal, setProjectsModal] = useState(false);
  useEffect(() => {
    const html = document.documentElement;
    if (projectsModal) {
      html.style.overflow = "hidden";
    } else {
      html.style.overflow = "auto";
    }
  }, [projectsModal]);
  return (
    <section
      className="pt-6 w-full md:w-4/5 mx-auto space-y-2 md:space-y-4"
      id="projects"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold underline md:mt-16 mb-10 text-center">
        Professional Experience
      </h2>

      <div className="p-4 md:p-6 bg-gray-600/30 dark:bg-black/60 rounded-2xl">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold">
            Frontend Developer – GoodSoftwareDev
          </h3>
          <p className="text-sm italic">2022 – Present</p>
          <p className="mt-2 text-base leading-relaxed md:text-lg">
            Since 2022, I’ve been part of the development team at{" "}
            <span className="font-semibold">GoodSoftwareDev</span>, working on
            the design, development, and maintenance of modern, scalable user
            interfaces using technologies such as{" "}
            <span className="font-medium">React.js</span>, and{" "}
            <span className="font-medium">Tailwind CSS</span>.
            <br />
            <br />
            I’ve contributed to building interactive dashboards, SEO-optimized
            landing pages, and reusable components focused on performance and
            accessibility. I collaborate closely with UI/UX designers and
            backend developers to ensure seamless integration between frontend
            interfaces and REST APIs.
            <br />
            <br />
            Throughout this experience, I’ve developed strong proficiency with
            tools like <span className="font-medium">Git</span>,{" "}
            <span className="font-medium">Figma</span>,{" "}
            <span className="font-medium">Notion</span>, and{" "}
            <span className="font-medium">Postman</span> for continuous
            deployment.
            <br />
            <br />
            This role has not only enhanced my technical skill set but also
            strengthened my soft skills, such as effective communication within
            distributed teams, accurate task estimation, and the ability to
            quickly adapt to new projects and technologies in agile
            environments.
            <br />
            <br />I always strive to deliver clean, maintainable, and scalable
            code, with a strong focus on quality, performance, and client
            satisfaction.
            <br />
            <br />
            This role has not only enhanced my technical skills but also helped
            me grow professionally in remote work environments. I’ve gained
            significant experience working asynchronously with international
            teams, participating in code reviews, and contributing to shared
            goals across different time zones.
          </p>
        </div>
      </div>

      <div className="flex justify-center w-full">
        <button
          onClick={() => setProjectsModal(true)}
          className="mt-4 px-6 cursor-pointer w-full md:w-auto py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium md:text-lg rounded-3xl shadow-lg transform transition duration-300 hover:scale-105"
        >
          See Last Projects
        </button>
      </div>

      {projectsModal && <ProjectsModal closeModal={() => setProjectsModal(false)} />}
    </section>
  );
};

export default Projects;
