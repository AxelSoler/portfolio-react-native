import Project from "./Project";
import projects from "./ProjectsList";
import { ImCross } from "react-icons/im";
const ProjectsModal = ({ closeModal }: { closeModal: () => void }) => {
  // const [visibleCount, setVisibleCount] = useState(2);

  // const handleLoadMore = () => {
  //   setVisibleCount((prev) => prev + 2);
  // };
  return (
    <div className="fixed inset-0 overflow-y-auto bg-gradient-to-r from-slate-300 via-slate-100 to-slate-300 shadow-md dark:bg-gradient-to-r dark:from-[#0a0a0a] dark:via-[#004aad] dark:to-[#0a0a0a] bg-opacity-50 flex justify-center z-20">
      <div className="px-4 md:px-6 space-y-2 rounded-2xl w-full lg:w-4/5">
        <button
          onClick={closeModal}
          className="text-2xl fixed top-4 lg:top-6 right-8 lg:right-16 cursor-pointer bg-[rgba(255,255,255,0.35)] dark:bg-[rgba(17,17,17,0.35)] rounded p-2"
        >
          <ImCross className="text-lg md:text-2xl" />
        </button>
        <div className="space-y-2 md:space-y-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold underline p-4 text-center">
            Last Projects
          </h2>

          {projects.slice(0, 4).map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={project.name} className="fade-in-up">
                <Project project={project} isEven={isEven} />
              </div>
            );
          })}
        </div>

        {/* <div className="flex justify-center w-full">
          <button
            onClick={handleLoadMore}
            className={`mt-4 px-6 w-full md:w-auto py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium md:text-lg rounded-3xl shadow-lg transform transition duration-300 
                  ${
                    visibleCount >= projects.length
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:scale-105 cursor-pointer"
                  }`}
            disabled={visibleCount >= projects.length}
          >
            <FiChevronDown className="inline mr-2 text-2xl" />
            {visibleCount >= projects.length
              ? "All projects loaded"
              : "Load More Projects"}
            <FiChevronDown className="inline ml-2 text-2xl" />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ProjectsModal;
