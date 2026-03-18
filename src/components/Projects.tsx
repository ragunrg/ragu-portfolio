import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Projects = () => {
  const projects = useSelector((state: RootState) => state.profile.projects);

  return (
    <section aria-labelledby="projects-heading" className="p-6 my-8">
      <h2 id="projects-heading" className="text-2xl font-bold text-gray-800 dark:text-white mb-8">
        Featured Projects
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:border-indigo-500 dark:hover:border-indigo-400 cursor-pointer overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-full blur-3xl" />

            <div className="relative z-10">
              {/* Project Icon & Title */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="inline-block p-3 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.name}
                  </h3>
                </div>
                <span className="text-2xl text-indigo-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
                  ↗
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-5 line-clamp-3">
                {project.description}
              </p>

              {/* Technology Tags */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, tidx) => (
                    <span
                      key={tidx}
                      className="inline-block text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-700 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
