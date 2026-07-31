import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../../content/projects";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

const Projects = ({ isMaximized }) => {
  const { openImage } = useContext(AppContext);
  const allProjectImages = projects.map(p => p.imagePath);

  return (
    <div
      className={`flex flex-col gap-5 p-4 w-full h-full overflow-y-scroll ${
        isMaximized ? "pb-20" : ""
      }`}
      style={{ background: "var(--color-window-content)", color: "var(--color-text-dark)" }}
    >
      {projects.map((project, i) => (
        <div
          key={i}
          className="flex sm:flex-row flex-col gap-5 w-full p-4"
          style={{
            background: "#fafaf9",
            border: "1px solid var(--color-border-light)",
          }}
        >
          <div className="flex flex-col sm:w-1/2 items-center">
            <img
              src={project.imagePath}
              alt={project.name}
              className={`${isMaximized ? "w-[80%]" : "w-full"} cursor-pointer hover:opacity-80 transition-opacity`}
              onClick={() => openImage(project.imagePath, allProjectImages)}
            />
            <div className="sm:flex hidden m-3 mx-auto gap-2 flex-wrap justify-center">
              {project.techStack.map((tech, j) => (
                <img src={tech} key={j} alt="badge" className="h-[20px]" />
              ))}
            </div>
          </div>
          <div className="sm:w-[47%] flex flex-col gap-2 justify-center pe-3">
            <h2 className="font-extrabold text-xl">{project.name}</h2>
            <p className="text-sm leading-relaxed">{project.description}</p>
            <div className="sm:hidden flex m-3 mx-auto gap-2 flex-wrap justify-center">
              {project.techStack.map((tech, j) => (
                <img key={j} src={tech} alt="badge" className="h-[22px]" />
              ))}
            </div>
            <div className="mt-2 flex justify-center sm:justify-end gap-5">
              <a href={project.githubLink} target="_blank" rel="noreferrer">
                <FiGithub
                  size="26px"
                  style={{ color: "var(--color-accent)" }}
                  className="hover:cursor-pointer"
                />
              </a>
              <a href={project.websiteLink} target="_blank" rel="noreferrer">
                <FiExternalLink
                  size="26px"
                  style={{ color: "var(--color-accent)" }}
                  className="hover:cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
