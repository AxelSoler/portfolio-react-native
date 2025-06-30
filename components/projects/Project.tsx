import Image from "next/image";
import type { StaticImageData } from "next/image";

type projectProps = {
  name: string;
  description: string;
  longDescription?: string;
  image: StaticImageData;
  live: string;
  repository: string;
  technologies: string[];
  position: string;
  company: string;
};

const Project = ({
  project,
  isEven
}: {
  project: projectProps;
  isEven: boolean;
}) => {
  return (
    <div
      id={project.name}
      className={`bg-gray-600/30 dark:bg-black/60 flex flex-col xl:flex-row items-center p-4 md:p-6 lg:p-8 rounded ${
        isEven ? "xl:flex-row" : "xl:flex-row-reverse"
      } gap-6`}
    >
      <Image
        src={project.image}
        alt={project.name}
        className="w-[400px] h-[250px] object-contain rounded-xl"
      />
      <div className="flex flex-col gap-4">
        <h3 className="underline font-bold lg:text-xl">{project.name}</h3>
        <p className="md:text-lg">
          {project.longDescription
            ? project.longDescription
            : project.description}
        </p>
        {/* <div className="flex justify-evenly w-full mt-auto">
          {project.live === "private" ? (
            <span className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:scale-105 transform transition duration-300 cursor-not-allowed opacity-50 flex items-center gap-1">
              Private
              <HiOutlineExternalLink />
            </span>
          ) : (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer flex items-center gap-1"
            >
              Live Site
              <HiOutlineExternalLink />
            </a>
          )}
          {project.repository === "private" ? (
            <span className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:scale-105 transform transition duration-300 cursor-not-allowed opacity-50 flex items-center gap-1">
              Private
              <FaGithub />
            </span>
          ) : (
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer flex items-center gap-1"
            >
              Repository
              <FaGithub />
            </a>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Project;
